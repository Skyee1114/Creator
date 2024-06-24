SELECT
    sucw.clerk_user_id AS user_id,
    sucw.ethereum_address,
    sucw.created_timestamp_utc AS wallet_connected_timestamp_utc,
    COALESCE(SUM(wtr.token_item_purchase_number), 0) as total_tokens_purchased,
    COALESCE(SUM(wtr.token_purchase_eth_amount), 0) as total_tokens_purchased_eth_amount,
    COALESCE(SUM(ROUND(wtr.token_purchase_eth_amount * (1 / conv.conversion_usd_eth), 2)), 0) as total_tokens_purchased_usd_amount,
    conv.conversion_usd_eth_timestamp_utc as conversion_usd_eth_timestamp_utc
FROM
    saas_user_connected_wallets AS sucw
        LEFT JOIN
    web3_transaction_receipts AS wtr
    ON wtr.wallet_address = sucw.ethereum_address
        AND wtr.active_status = true
        CROSS JOIN (
        SELECT conversion_usd_eth, conversion_usd_eth_timestamp_utc
        FROM saas_ico_progress
        WHERE guidid = 'e7c81b7a-9810-4595-91e9-d1c8a79e044f'
        LIMIT 1
    ) as conv
GROUP BY
    sucw.clerk_user_id,
    sucw.ethereum_address,
    sucw.created_timestamp_utc,
    conv.conversion_usd_eth_timestamp_utc
ORDER BY
    sucw.clerk_user_id ASC,
    COALESCE(SUM(ROUND(wtr.token_purchase_eth_amount * (1 / conv.conversion_usd_eth), 2)), 0) DESC,
    wallet_connected_timestamp_utc DESC;
SELECT
    clerk_user_id AS user_id,
    saas_supported_evm_chains.name as chain_name,
    SUM(token_item_purchase_number) as total_tokens_purchased,
    SUM(token_purchase_eth_amount) as total_tokens_purchased_eth_amount,
    SUM(
            ROUND(
                    token_purchase_eth_amount * (1 / conv.conversion_usd_eth),
                    2
            )
    ) as total_tokens_purchased_usd_amount,
    conv.conversion_usd_eth_timestamp_utc as conversion_usd_eth_timestamp_utc
FROM web3_transaction_receipts
         LEFT JOIN saas_supported_evm_chains
                   ON web3_transaction_receipts.chain_guidid = saas_supported_evm_chains.guidid
         CROSS JOIN (
    SELECT conversion_usd_eth, conversion_usd_eth_timestamp_utc
    FROM saas_ico_progress
    WHERE guidid = 'e7c81b7a-9810-4595-91e9-d1c8a79e044f'
    LIMIT 1
) as conv
WHERE web3_transaction_receipts.active_status = true
GROUP BY clerk_user_id, saas_supported_evm_chains.name, conv.conversion_usd_eth_timestamp_utc
ORDER BY clerk_user_id, saas_supported_evm_chains.name;


SELECT clerk_user_id AS user_id,
       ethereum_address,
       created_timestamp_utc AS wallet_connected_timestamp_utc
FROM saas_user_connected_wallets AS sucw
WHERE NOT EXISTS (
    SELECT 1
    FROM web3_transaction_receipts AS wtr
    WHERE wtr.wallet_address = sucw.ethereum_address AND wtr.active_status = true
)
ORDER BY clerk_user_id, created_timestamp_utc DESC;
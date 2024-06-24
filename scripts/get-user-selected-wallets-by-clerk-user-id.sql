SELECT
    guidid,
    ethereum_address,
    chain_arbitrum_enabled,
    chain_avalanche_enabled,
    chain_base_enabled,
    chain_binance_enabled,
    chain_cronos_enabled,
    chain_ethereum_enabled,
    chain_fantom_enabled,
    chain_gnosis_enabled,
    chain_polygon_enabled

FROM saas_user_connected_wallets

WHERE clerk_user_id = 'user_2aP0Jw2SRmYOVsGMR1Im5vS6nSD'
  AND ethereum_address_registered = true
  AND active_status=true

ORDER BY wallet_nickname
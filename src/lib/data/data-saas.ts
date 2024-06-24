// "use server";
//
// import {sql} from '@vercel/postgres';
// import {unstable_noStore as noStore} from 'next/cache';
// import {
//     SaasAssetUserConnectedWalletAssetsDiscoveryEntity,
//     SaasUserConnectedWalletsAssetsDiscoveryEntity
// } from "@/lib/models/entities-saas";

// export async function fetchSaasUserConnectedWallets(clerkUserId: string) {
//     noStore();
//     // console.log("Retrieving SaaS User Connected Wallets ...")
//     try {
//         const data =
//             await sql<SaasUserConnectedWalletsEntity>
//                 `SELECT
//                        guidid,
//                        ethereum_address,
//                        wallet_nickname,
//                        chain_arbitrum_enabled,
//                        chain_avalanche_enabled,
//                        chain_base_enabled,
//                        chain_binance_enabled,
//                        chain_cronos_enabled,
//                        chain_ethereum_enabled,
//                        chain_fantom_enabled,
//                        chain_gnosis_enabled,
//                        chain_polygon_enabled
//                    FROM saas_user_connected_wallets_assets_discovery
//                    WHERE clerk_user_id = ${clerkUserId}
//                      AND ethereum_address_registered = true
//                      AND active_status=true
//                    ORDER BY wallet_nickname
//                    `;
//         // console.log(data.rows); // Logs the data.rows result
//         return data.rows;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }

// export async function fetchSaasAssetUserConnectedWallet(clerkUserId: string, walletAddress: string) {
//     noStore();
//     // console.log("Retrieving SaaS User Connected Wallet -- filtered by UserId & Wallet Address ...")
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletAssetsDiscoveryEntity>
//                 `SELECT
//                        guidid,
//                        ethereum_address,
//                        chain_arbitrum_enabled,
//                        chain_avalanche_enabled,
//                        chain_base_enabled,
//                        chain_binance_enabled,
//                        chain_cronos_enabled,
//                        chain_ethereum_enabled,
//                        chain_fantom_enabled,
//                        chain_gnosis_enabled,
//                        chain_polygon_enabled
//                    FROM saas_user_connected_wallets_assets_discovery
//                    WHERE clerk_user_id = ${clerkUserId}
//                      AND ethereum_address =${walletAddress}
//                      AND active_status=true
//                  LIMIT 1
//                    `;
//         // console.log(data.rows); // Logs the data.rows result
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function createUserConnectedWalletsMyAssetsRecord(clerkUserId: string, walletAddress: string) {
//     noStore();
//     // console.log("Creating new SaaS User Connected Wallet My-Assets Record ...")
//     try {
//         const result = await sql`
//           INSERT INTO saas_user_connected_wallets_assets_discovery(
//             clerk_user_id,
//             ethereum_address
//           ) VALUES (
//                              ${clerkUserId},
//                              ${walletAddress}
//                             )
//         `;
//         // console.log(result);   // Logs the return data result
//         return result;
//     } catch (error) {
//         console.error('Database Error:', error);
//         // throw new Error('Failed to insert new User Connected Wallets record');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecord(
//     chain_arbitrum_latest_check_utc: Date | null,
//     chain_avalanche_latest_check_utc: Date | null,
//     chain_base_latest_check_utc: Date | null,
//     chain_binance_latest_check_utc: Date | null,
//     chain_cronos_latest_check_utc: Date | null,
//     chain_ethereum_latest_check_utc: Date | null,
//     chain_fantom_latest_check_utc: Date | null,
//     chain_gnosis_latest_check_utc: Date | null,
//     chain_polygon_latest_check_utc: Date | null,
//     guid_Id: string
// ) {
//     noStore();
//     // console.log("Updating SaaS User Connected Wallet by GuidId...")
//     try {
//         // console.log(data);   // Logs the return data result
//         return await sql`
//       UPDATE saas_user_connected_wallets_assets_discovery
//       SET
//           chain_arbitrum_latest_check_utc = ${chain_arbitrum_latest_check_utc ? chain_arbitrum_latest_check_utc.toISOString() : null},
//           chain_avalanche_latest_check_utc = ${chain_avalanche_latest_check_utc ? chain_avalanche_latest_check_utc.toISOString() : null},
//           chain_base_latest_check_utc = ${chain_base_latest_check_utc ? chain_base_latest_check_utc.toISOString() : null},
//           chain_binance_latest_check_utc = ${chain_binance_latest_check_utc ? chain_binance_latest_check_utc.toISOString() : null},
//           chain_cronos_latest_check_utc = ${chain_cronos_latest_check_utc ? chain_cronos_latest_check_utc.toISOString() : null},
//           chain_ethereum_latest_check_utc = ${chain_ethereum_latest_check_utc ? chain_ethereum_latest_check_utc.toISOString() : null},
//           chain_fantom_latest_check_utc = ${chain_fantom_latest_check_utc ? chain_fantom_latest_check_utc.toISOString() : null},
//           chain_gnosis_latest_check_utc = ${chain_gnosis_latest_check_utc ? chain_gnosis_latest_check_utc.toISOString() : null},
//           chain_polygon_latest_check_utc = ${chain_polygon_latest_check_utc ? chain_polygon_latest_check_utc.toISOString() : null}
//       WHERE guidid = ${guid_Id}
//     `;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to update User Connected Wallets record');
//         return null;
//     }
// }
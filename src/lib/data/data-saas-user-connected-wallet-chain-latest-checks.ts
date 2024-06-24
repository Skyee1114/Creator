// "use server";
//
// import { sql } from '@vercel/postgres';
// import { unstable_noStore as noStore} from 'next/cache';
// import {
//     SaasAssetUserConnectedWalletChainArbitrumAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainAvalancheAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainBaseAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainBinanceAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainCronosAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainEthereumAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainFantomAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainGnosisAssetDiscoveryEntity,
//     SaasAssetUserConnectedWalletChainPolygonAssetDiscoveryEntity,
// } from "@/lib/models/entities-saas";
// import {Token} from "@/models/type-nft-data";
//
// export async function fetchSaasAssetUserConnectedWalletChainArbitrumLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainArbitrumAssetDiscoveryEntity>
//                 `SELECT
//                        chain_arbitrum_latest_check_utc,
//                        chain_arbitrum_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainArbitrumLatestCheckUtc(
//     chain_arbitrum_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_arbitrum_latest_check_utc = ${chain_arbitrum_latest_check_utc.toISOString()},
//                 chain_arbitrum_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainAvalancheLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainAvalancheAssetDiscoveryEntity>
//                 `SELECT
//                        chain_avalanche_latest_check_utc,
//                        chain_avalanche_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainAvalancheLatestCheckUtc(
//     chain_avalanche_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_avalanche_latest_check_utc = ${chain_avalanche_latest_check_utc.toISOString()},
//                 chain_avalanche_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainBaseLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainBaseAssetDiscoveryEntity>
//                 `SELECT
//                        chain_base_latest_check_utc,
//                        chain_base_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainBaseLatestCheckUtc(
//     chain_base_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_base_latest_check_utc = ${chain_base_latest_check_utc.toISOString()},
//                 chain_base_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainBinanceLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainBinanceAssetDiscoveryEntity>
//                 `SELECT
//                        chain_binance_latest_check_utc,
//                        chain_binance_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainBinanceLatestCheckUtc(
//     chain_binance_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_binance_latest_check_utc = ${chain_binance_latest_check_utc.toISOString()},
//                 chain_binance_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainCronosLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainCronosAssetDiscoveryEntity>
//                 `SELECT
//                        chain_cronos_latest_check_utc,
//                        chain_cronos_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainCronosLatestCheckUtc(
//     chain_cronos_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_cronos_latest_check_utc = ${chain_cronos_latest_check_utc.toISOString()},
//                 chain_cronos_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainEthereumLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainEthereumAssetDiscoveryEntity>
//                 `SELECT
//                        chain_ethereum_latest_check_utc,
//                        chain_ethereum_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainEthereumLatestCheckUtc(
//     chain_ethereum_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_ethereum_latest_check_utc = ${chain_ethereum_latest_check_utc.toISOString()},
//                 chain_ethereum_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainFantomLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainFantomAssetDiscoveryEntity>
//                 `SELECT
//                        chain_fantom_latest_check_utc,
//                        chain_fantom_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainFantomLatestCheckUtc(
//     chain_fantom_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_fantom_latest_check_utc = ${chain_fantom_latest_check_utc.toISOString()},
//                 chain_fantom_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainGnosisLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql<SaasAssetUserConnectedWalletChainGnosisAssetDiscoveryEntity>
//                 `SELECT
//                        chain_gnosis_latest_check_utc,
//                        chain_gnosis_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainGnosisLatestCheckUtc(
//     chain_gnosis_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_gnosis_latest_check_utc = ${chain_gnosis_latest_check_utc.toISOString()},
//                 chain_gnosis_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
//
//
// export async function fetchSaasAssetUserConnectedWalletChainPolygonLatestCheck( guid_Id: string) {
//     noStore();
//     try {
//         const data =
//             await sql< SaasAssetUserConnectedWalletChainPolygonAssetDiscoveryEntity>
//                 `SELECT
//                        chain_polygon_latest_check_utc,
//                        chain_polygon_discovery
//                    FROM saas_user_connected_wallets_assets_discovery
//                  WHERE guidid = ${guid_Id}
//                    `;
//         return data.rows[0] || null;
//     } catch (error) {
//         // console.error('Database Error:', error);
//         // throw new Error('Failed to fetch User Connected Wallets data.');
//         return null;
//     }
// }
//
// export async function updateUserConnectedWalletsRecordChainPolygonLatestCheckUtc(
//     chain_polygon_latest_check_utc: Date,
//     guid_Id: string,
//     dataNft: Token[]
// ) {
//     try {
//         const dataNft1Json = JSON.stringify(dataNft, null, 2);
//         return await sql`
//             UPDATE saas_user_connected_wallets_assets_discovery
//             SET
//                 chain_polygon_latest_check_utc = ${chain_polygon_latest_check_utc.toISOString()},
//                 chain_polygon_discovery = ${dataNft1Json}::jsonb
//             WHERE guidid = ${guid_Id}
//         `;
//     } catch (error) {
//         return null;
//     }
// }
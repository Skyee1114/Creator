// "use client"
//
// import { TbWorldSearch } from "react-icons/tb";
// import { Button } from "@/components/ui/button";
// import {
//     FolderAdd,
//     Refresh
// } from "iconsax-react";
// import React, {useEffect, useState} from 'react';
// // import {
// //     fetchSaasAssetUserConnectedWalletChainArbitrumLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainAvalancheLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainBaseLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainBinanceLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainCronosLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainEthereumLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainFantomLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainGnosisLatestCheck,
// //     fetchSaasAssetUserConnectedWalletChainPolygonLatestCheck,
// //     updateUserConnectedWalletsRecordChainArbitrumLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainAvalancheLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainBaseLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainBinanceLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainCronosLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainEthereumLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainFantomLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainGnosisLatestCheckUtc,
// //     updateUserConnectedWalletsRecordChainPolygonLatestCheckUtc
// // } from "@/lib/data/data-saas-user-connected-wallet-chain-latest-checks";
// import { Token } from "@/models/type-nft-data";
// import {dataNft, dataNft1} from "@/seed/seed-nft-data";
// import {SaasAssetsNftCard} from "@/components/saas/assets/saas-assets-nft-card";
//
// type PropsType = {
//     guid_Id: string | null;
// };
//
// export const Arbitrum: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     // const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//     const [chainArbitrumDiscovery, setChainArbitrumDiscovery] = useState<Token[] | null>(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainLatestCheck(guid_Id);
//
//                 if (result && result.chain_arbitrum_latest_check_utc !== null) {
//                     const resultAsString = result.chain_arbitrum_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//
//
//                     if (Array.isArray(result.chain_arbitrum_discovery)) {
//                         setChainArbitrumDiscovery(result.chain_arbitrum_discovery);
//                     } else {
//                         setChainArbitrumDiscovery(null);
//                     }
//
//                     // setChainArbitrumDiscovery(JSON.stringify(result.chain_arbitrum_discovery, null, 2));
//                 }
//                 else  setDateTime('not checked yet');
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_arbitrum_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_arbitrum_latest_check_utc !== null) {
//
//             // TODO: fetch external NFT asset data - using dataNft1 as test dataset
//
//             const params = {
//                 chainLatestCheckUtc:  chain_arbitrum_latest_check_utc,
//                 guidId: guid_Id,
//                 dataNft: dataNft1,
//                 network_chain:  "ethereum"
//             };
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainArbitrumLatestCheckUtc(params);
//             setDateTime(chain_arbitrum_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//             setChainArbitrumDiscovery(dataNft1);
//             // setChainArbitrumDiscovery(JSON.stringify(dataNft1, null, 2));
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {chainArbitrumDiscovery !== null ? (
//                 <div className="mt-6 ml-2 flex flex-col items-start">
//                     {dateTime && (
//                         <div
//                             title="Click to refresh your NFT asset discovery data"
//                             className="flex items-center hover:text-white group cursor-pointer"
//                             onClick={updateDateTime}
//                         >
//
//                             <Refresh
//                                 className="w-4 h-4 text-gray-500 transition-transform ease-in-out duration-200 transform group-hover:rotate-180 group-hover:text-gray-300"
//                                 aria-hidden="true"
//                             />
//
//                             <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-300">
//                                 {dateTime}
//                               </span>
//                         </div>
//                     )}
//                     {/*<div className="mt-10 text-mono text-xs">*/}
//                     {/*    TEST DATA*/}
//                     {/*    <pre className="mt-2">{chainArbitrumDiscovery}</pre>*/}
//                     {/*</div>*/}
//
//                    <SaasAssetsNftCard testDataNft={chainArbitrumDiscovery}/>
//
//                 </div>
//
//             ) : (
//                 <div className="flex justify-start p-14">
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Arbitrum assets</p>
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Arbitrum assets
//                             </Button>
//                         </div>
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                             {dateTime}
//                         </span>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const AvalancheCChain: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainAvalancheLatestCheck(guid_Id);
//
//                 if (result && result.chain_avalanche_latest_check_utc !== null) {
//                     const resultAsString = result.chain_avalanche_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_avalanche_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_avalanche_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainAvalancheLatestCheckUtc(chain_avalanche_latest_check_utc, guid_Id);
//             setDateTime(chain_avalanche_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Avalanche assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Avalanche assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const Base: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainBaseLatestCheck(guid_Id);
//
//                 if (result && result.chain_base_latest_check_utc !== null) {
//                     const resultAsString = result.chain_base_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_base_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_base_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainBaseLatestCheckUtc(chain_base_latest_check_utc, guid_Id);
//             setDateTime(chain_base_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Base assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Base assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const BinanceSmartChain: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainBinanceLatestCheck(guid_Id);
//
//                 if (result && result.chain_binance_latest_check_utc !== null) {
//                     const resultAsString = result.chain_binance_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_binance_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_binance_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainBinanceLatestCheckUtc(chain_binance_latest_check_utc, guid_Id);
//             setDateTime(chain_binance_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Binance assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Binance assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const Cronos: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainCronosLatestCheck(guid_Id);
//
//                 if (result && result.chain_cronos_latest_check_utc !== null) {
//                     const resultAsString = result.chain_cronos_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_cronos_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_cronos_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainCronosLatestCheckUtc(chain_cronos_latest_check_utc, guid_Id);
//             setDateTime(chain_cronos_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Cronos assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Cronos assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const Ethereum: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = true;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainEthereumLatestCheck(guid_Id);
//
//                 if (result && result.chain_ethereum_latest_check_utc !== null) {
//                     const resultAsString = result.chain_ethereum_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_ethereum_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_ethereum_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainEthereumLatestCheckUtc(chain_ethereum_latest_check_utc, guid_Id);
//             setDateTime(chain_ethereum_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Ethereum assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Ethereum assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const Fantom: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainFantomLatestCheck(guid_Id);
//
//                 if (result && result.chain_fantom_latest_check_utc !== null) {
//                     const resultAsString = result.chain_fantom_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_fantom_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_fantom_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainFantomLatestCheckUtc(chain_fantom_latest_check_utc, guid_Id);
//             setDateTime(chain_fantom_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Fantom assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Fantom assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const Gnosis: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainGnosisLatestCheck(guid_Id);
//
//                 if (result && result.chain_gnosis_latest_check_utc !== null) {
//                     const resultAsString = result.chain_gnosis_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_gnosis_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_gnosis_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainGnosisLatestCheckUtc(chain_gnosis_latest_check_utc, guid_Id);
//             setDateTime(chain_gnosis_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Gnosis assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Gnosis assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }
//
//
// export const Polygon: React.FC<PropsType> = ({ guid_Id }) => { // using walletProp
//     const discoveredAssets = false;
//     const [dateTime, setDateTime] = useState('');
//
//     useEffect(() => {
//         const fetchData = async () => {
//             if (
//                 typeof guid_Id === 'string' &&
//                 guid_Id.trim() !== ''
//             ) {
//                 const result = await fetchSaasAssetUserConnectedWalletChainPolygonLatestCheck(guid_Id);
//
//                 if (result && result.chain_polygon_latest_check_utc !== null) {
//                     const resultAsString = result.chain_polygon_latest_check_utc.toUTCString().replace('GMT', 'UTC');
//                     setDateTime(resultAsString);
//                 }
//                 else  setDateTime('not checked yet');
//
//                 //console.log(result);
//             }
//         }
//
//         fetchData();
//     }, [guid_Id]); // We add guid_Id to dependency array to refetch when it changes
//
//     const updateDateTime = async () => {
//         const chain_polygon_latest_check_utc = new Date();
//
//         if (guid_Id !== null && chain_polygon_latest_check_utc !== null) {
//
//             const resultUpdate = await updateUserConnectedWalletsRecordChainPolygonLatestCheckUtc(chain_polygon_latest_check_utc, guid_Id);
//             setDateTime(chain_polygon_latest_check_utc.toUTCString().replace('GMT', 'UTC'));
//
//         } else {
//             // handle null guid_Id case here
//             //console.error('guid_Id is null');
//         }
//     }
//
//     return (
//         <>
//             {discoveredAssets ? (
//                 dateTime &&
//                 <div className="mt-6 ml-2 flex items-center">
//                     <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                     <span className="ml-2 text-xs text-gray-500">
//                                 {dateTime}
//                         </span>
//                 </div>
//             ) : (
//                 <div className="flex justify-start p-14">
//
//                     <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto">
//                         <FolderAdd className="w-10 h-10 text-violet-500 fill-violet-400/30" aria-hidden="true"/>
//                         <h3 className="mt-2 text-sm font-semibold text-gray-500">No assets</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding Polygon assets</p>
//
//                         <div className="mt-10">
//                             <Button type="button" onClick={updateDateTime}>
//                                 <TbWorldSearch className="-ml-2 mr-1.5 h-5 w-5" aria-hidden="true"/>
//                                 Discover your Polygon assets
//                             </Button>
//                         </div>
//
//                         { dateTime &&
//                             <div className="mt-6 flex items-center">
//                                 <Refresh className="w-4 h-4 text-gray-500" aria-hidden="true"/>
//                                 <span className="ml-2 text-xs text-gray-500">
//                                            {dateTime}
//                                         </span>
//                             </div>
//                         }
//
//                     </div>
//
//                 </div>
//             )}
//         </>
//     )
// }

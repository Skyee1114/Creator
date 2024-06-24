// import React from 'react';
// import { Token } from "@/models/type-nft-data";
// import {
//     Ethereum
// } from "iconsax-react";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { SaasAssetsNftMedaRenderer } from "@/components/saas/assets/saas-assets-nft-media-renderer";
//
// interface SaasAssetsSeedNftDataProps {
//     testDataNft: Token[];
// }
//
// export function SaasAssetsNftCard({ testDataNft } : SaasAssetsSeedNftDataProps) {
//     return (
//         <>
//             {testDataNft.map((data, index) => (
//                 <div className="card mt-10" style={{maxWidth: '1024px'}} key={index}>
//
//                     <Card className="border-gray-700 hover:border-violet-900 rounded transition-all duration-150 ease-in">
//
//                         <CardHeader>
//
//                             <div className="flex justify-between font-mono flex-col sm:flex-row">
//                                 <div className="flex items-start justify-between sm:justify-start">
//                                     <div className="mr-2 mb-2">
//                                         <Ethereum color="white" size="32"/>
//                                     </div>
//                                     <div>
//                                         <CardTitle>{data.normalisedMetaData?.name}</CardTitle>
//                                         <CardDescription className="pt-2">{data?.name}</CardDescription>
//                                     </div>
//                                 </div>
//
//                                 <div style={{display: 'flex', alignItems: 'flex-start'}} className="mt-4 sm:mt-0">
//                                     <div style={{display: 'flex', flexDirection: 'column', marginRight: '10px'}} className="text-left sm:text-right">
//                                         <div className="text-xs font-mono">
//                                             {data.tokenId}/{data.amount} {data.contractType}
//                                         </div>
//                                         <div className="text-xs font-mono">
//                                             {data.tokenAddress}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         </CardHeader>
//
//                         <CardContent className="font-mono">
//
//                             <div className="flex flex-col sm:flex-row">
//                                 <div className="sm:w-1/2">
//
//                                     <div>
//
//                                         <SaasAssetsNftMedaRenderer
//                                             animationUrl={data.normalisedMetaData?.animationUrl ?? ""}
//                                             imageUrl={data.normalisedMetaData?.imageUrl ?? ""}
//                                             externalUrl={data.normalisedMetaData?.externalUrl ?? "" }
//                                             altRef={data.normalisedMetaData?.name?? ""}  />
//
//                                         {/*<MediaRenderer*/}
//                                         {/*    width="100%"*/}
//                                         {/*    height="100%"*/}
//                                         {/*    src="ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"*/}
//                                         {/*    poster="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X"*/}
//                                         {/*    alt="A red circle"*/}
//                                         {/*/>*/}
//
//                                     </div>
//
//                                     <div className="w-auto mt-2 flex flex-wrap justify-center space-x-4 mb-8 md:mb-0">
//                                         {data.normalisedMetaData?.attributes?.map((attribute, index) => (
//                                             <p className="mt-3 width-auto " key={index}>
//                                                 <span
//                                                     className="rounded-full bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/30">
//                                                     <strong>{attribute?.traitType ?? "Unknown"}: </strong>{attribute?.value ?? "Unknown"}
//                                                 </span>
//                                             </p>
//                                         ))}
//                                     </div>
//                                 </div>
//
//                                 <div className="rounded-lg overflow-hidden sm:w-1/2">
//                                     <div className="md:pl-6 sm:pl-4">
//                                         {
//                                             data.normalisedMetaData?.description?.split('\n').map((item, i) => {
//                                                 return <React.Fragment key={i}>{item}<br/></React.Fragment>
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//
//                         </CardContent>
//
//                         {/*<Separator className="mb-5"/>*/}
//
//                         {/*<CardFooter className="flex justify-between">*/}
//                         {/*    <Button variant="outline">Cancel</Button>*/}
//                         {/*    <Button>Select</Button>*/}
//                         {/*</CardFooter>*/}
//
//                     </Card>
//
//                 </div>
//             ))}
//         </>
//     );
// }
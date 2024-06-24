// "use client"
//
// import React from 'react';
// import { MediaRenderer } from "@thirdweb-dev/react";
//
// interface SaasAssetsMftMedaRendererProps {
//     animationUrl: string;
//     imageUrl: string;
//     externalUrl: string;
//     altRef: string;
// }
//
// export function SaasAssetsNftMedaRenderer({ animationUrl , imageUrl, externalUrl , altRef } : SaasAssetsMftMedaRendererProps) {
//
//     let strippedAnimationUrl = "";
//
//     try {
//         strippedAnimationUrl = new URL(animationUrl).origin + new URL(animationUrl).pathname;
//     } catch (_) {
//         strippedAnimationUrl = animationUrl;      // maintain original value if it's not a parseable URL
//     }
//
//     let strippedImageUrl = "";
//
//     try {
//         strippedImageUrl = new URL(imageUrl).origin + new URL(imageUrl).pathname;
//     } catch (_) {
//         strippedImageUrl = imageUrl;      // maintain original value if it's not a parseable URL
//     }
//
//     const srcUrl =  strippedAnimationUrl;
//     const posterUrl = strippedImageUrl;
//
//     return (
//             <MediaRenderer
//                 controls={true}
//                 requireInteraction={true}
//                 width="100%"
//                 height="100%"
//                 src={srcUrl}
//                 poster={posterUrl}
//                 alt={altRef}
//             />
//     );
// };
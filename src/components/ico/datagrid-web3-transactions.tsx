"use client"

import React, { useState, useEffect, useCallback } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {SaasWeb3IcoTransactionsModel} from "@/models/SaasWeb3IcoTransactionsModel";
import { SaasWeb3IcoUsdtTransactionsModel } from "@/models/SaasWeb3IcoUsdtTransactionsModel";
import { getSaasWeb3WalletIcoTransactions } from "@/actions/actionGetWeb3WalletIcoTransactions";
import { getSaasWeb3WalletIcoUsdtTransactions } from "@/actions/actionGetWeb3WalletIcoUsdtTransactions";
import { useUserSessionStore } from "@/store/store-user-session";
import Image from "next/image";
import {ConvertToUTCStringWithoutGMT} from "@/components/datetime/convert-to-utc-without-gmt";
import { LoadingSpinner } from "@/app/_components/loadingspinner";

interface DataGridWeb3TransactionsProps {
    data: SaasWeb3IcoTransactionsModel[];
    data1: SaasWeb3IcoUsdtTransactionsModel[];
}

export function DataGridWeb3Transactions({data, data1}: DataGridWeb3TransactionsProps) {

    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    const [isLoading, setIsLoading] = useState(false);

    const [localData, setLocalData] = useState<any | null>(data);
    const [localData1, setLocalData1] = useState<any | null>(data1);

    const fetchData = useCallback(async () => {
        if (thirdweb_connected_wallet) {
          setIsLoading(true); // Start loading
          // Wait for 300 seconds before fetching data
          setTimeout(async () => {
            const fetchedData = await getSaasWeb3WalletIcoTransactions("", thirdweb_connected_wallet);
            const fetchedData1 = await getSaasWeb3WalletIcoUsdtTransactions("", thirdweb_connected_wallet);
            setLocalData(fetchedData);
            setLocalData1(fetchedData1);            
            setIsLoading(false); // Stop loading after data is fetched
          }, 300000);
        }
      }, [thirdweb_connected_wallet]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
   
    const usdtdata = localData1.map((res: any) => {
        let transactionHash = res.NotifyInvoiceResponse !== "null" ? (JSON.parse(res.NotifyInvoiceResponse).txid ? JSON.parse(res.NotifyInvoiceResponse).txid : JSON.parse(res.NotifyInvoiceResponse)["payment_history[0][txid]"] ? JSON.parse(res.NotifyInvoiceResponse)["payment_history[0][txid]"] : "Expired") : "Pending";
        let chain = res.NotifyInvoiceResponse !== "null" ? (JSON.parse(res.NotifyInvoiceResponse).coin_short_name ? JSON.parse(res.NotifyInvoiceResponse).coin_short_name : JSON.parse(res.NotifyInvoiceResponse).coin ? JSON.parse(res.NotifyInvoiceResponse).coin : "Expired") : "Pending";
        let usdtAmount = res.NotifyInvoiceResponse !== "null" ? (JSON.parse(res.NotifyInvoiceResponse).amount ? JSON.parse(res.NotifyInvoiceResponse).amount : JSON.parse(res.NotifyInvoiceResponse)["paid_amount[USD]"] ? JSON.parse(res.NotifyInvoiceResponse)["paid_amount[USD]"] : "Expired") : "Pending";
        let stage1Date = new Date("2024-06-12T00:00:00Z");
        const createdTimeStamp = new Date(res.CreatedTimeStampUtc);
        let tokenPrice = createdTimeStamp > stage1Date ? 0.034 : 0.017;
        console.log('time: ', createdTimeStamp);
        console.log('tokenPrice: ', tokenPrice);
        let tokenAmount = usdtAmount === "Pending" ? 0 : usdtAmount === "Expired" ? 0 : usdtAmount/tokenPrice;
        return {
            GuidId: res.GuidId,
            CreatedTimeStampUtc: res.CreatedTimeStampUtc,
            ToAddress: res.AddressReceiving,
            FromAddress: res.AddressConnectedWallet,
            TransactionHash: transactionHash,
            ChainGuidId: chain,
            TokenCurrency: "USDT",
            TokenPurchaseEthAmount: usdtAmount,
            TokenItemEthAmount: tokenPrice.toString(),
            TokenItemPurchaseNumber: tokenAmount    
        }
    });

    const dataTotalTokensPurchased = localData.reduce((acc: any, item: { TokenItemPurchaseNumber: any; }) => acc + item.TokenItemPurchaseNumber, 0) + usdtdata.reduce((acc: any, item: { TokenItemPurchaseNumber: any; }) => acc + item.TokenItemPurchaseNumber, 0); 

    const transactiondata = localData.concat(usdtdata);

    transactiondata.sort((a: { CreatedTimeStampUtc: string | number | Date; }, b: { CreatedTimeStampUtc: string | number | Date; }) => {
        let dateB = b.CreatedTimeStampUtc instanceof Date ? b.CreatedTimeStampUtc : new Date(b.CreatedTimeStampUtc);
        let dateA = a.CreatedTimeStampUtc instanceof Date ? a.CreatedTimeStampUtc : new Date(a.CreatedTimeStampUtc);
        return dateB.getTime() - dateA.getTime();
    });

    // localData.sort((a: { CreatedTimeStampUtc: string | number | Date; }, b: { CreatedTimeStampUtc: string | number | Date; }) => {
    //     let dateB = b.CreatedTimeStampUtc instanceof Date ? b.CreatedTimeStampUtc : new Date(b.CreatedTimeStampUtc);
    //     let dateA = a.CreatedTimeStampUtc instanceof Date ? a.CreatedTimeStampUtc : new Date(a.CreatedTimeStampUtc);
    //     return dateB.getTime() - dateA.getTime();
    // });

    // usdtdata.sort((a: { CreatedTimeStampUtc: string | number | Date; }, b: { CreatedTimeStampUtc: string | number | Date; }) => {
    //     let dateB = b.CreatedTimeStampUtc instanceof Date ? b.CreatedTimeStampUtc : new Date(b.CreatedTimeStampUtc);
    //     let dateA = a.CreatedTimeStampUtc instanceof Date ? a.CreatedTimeStampUtc : new Date(a.CreatedTimeStampUtc);
    //     return dateB.getTime() - dateA.getTime();
    // });

    const chainIconMap: { [key: string]: string } = {
        "a057198f-8eee-44c5-81cf-4b0c7a2f0ae4": "/images/chains/arbitrum-arb-logo-gray.svg",
        "2476bc54-b154-4807-b7e4-b2b2cf86c70c": "/images/chains/ethereum-eth-logo.svg",
        "USDTERC20": "/images/chains/usdterc20-logo.svg",
        "USDTTRC20": "/images/chains/usdttrc20-logo.svg",
    };
    return (
       <>
           {/* {dataTotalTokensPurchased > 0 ? */}
               <div className="overflow-auto">
                   <Table className="min-w-full whitespace-nowrap">
                   <TableHeader>
                       <TableRow className="mt-4 mb-4">
                           <TableHead className="text-center">Date / Time<br/>UTC</TableHead>
                           <TableHead className="text-center">Token Purchase<br/>Amount</TableHead>
                           <TableHead className="text-center">Token Item<br/>Amount</TableHead>
                           <TableHead className="text-center">Tokens<br/>Purchased</TableHead>
                           <TableHead className="text-center">Blockchain<br/>Network</TableHead>
                           <TableHead className="text-center">Wallet Address</TableHead>
                           <TableHead className="text-center">Transaction Hash</TableHead>
                           <TableHead className="text-center">Promo Code</TableHead>
                       </TableRow>
                   </TableHeader>
                   <TableBody>
                       {transactiondata.map((item: {
                           TokenCurrency: string; GuidId: React.Key | null | undefined; CreatedTimeStampUtc: string | number | Date; TokenPurchaseEthAmount: any; TokenItemEthAmount: any; TokenItemPurchaseNumber: any; ChainGuidId: string; FromAddress: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; TransactionHash: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                           <TableRow key={item.GuidId}>
                               <TableCell className="font-medium text-center">{ConvertToUTCStringWithoutGMT(new Date(item.CreatedTimeStampUtc))}</TableCell>
                               <TableCell className="text-center">
                                    <div className="flex justify-center">
                                    {item.TokenCurrency === "ETH" ? Number(item.TokenPurchaseEthAmount).toFixed(6) + " ETH" : ( item.TokenPurchaseEthAmount === "Pending" ? <LoadingSpinner /> : item.TokenPurchaseEthAmount === "Expired" ? "Expired" : Number(item.TokenPurchaseEthAmount).toFixed(6) + " USDT")}

                                    </div>
                                   {/* {Number(item.TokenPurchaseEthAmount).toFixed(6)} USDT */}
                               </TableCell>
                               <TableCell className="text-center">
                               {item.TokenCurrency === "ETH" ? Number(item.TokenItemEthAmount).toFixed(6) + " ETH" : Number(item.TokenItemEthAmount).toFixed(6) + " USDT"}
                               </TableCell>
                               <TableCell className="text-center">
                                <div className="flex justify-center">
                                {item.TokenCurrency === "ETH" ? Number(item.TokenItemPurchaseNumber).toFixed(6) : ( item.TokenPurchaseEthAmount === "Pending" ? <LoadingSpinner /> : item.TokenPurchaseEthAmount === "Expired" ? "Expired" : Number(item.TokenItemPurchaseNumber).toFixed(6))}

                                </div>
                                </TableCell>

                               <TableCell className="text-center">
                                <div className="flex justify-center">
                                { item.TokenPurchaseEthAmount === "Pending" ? <LoadingSpinner /> : item.ChainGuidId === "Expired" ? "Expired" :                              
                                <Image
                                       src={chainIconMap[item.ChainGuidId]}
                                       height={20}
                                       width={14}
                                       alt="chain icon"
                                       style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                                   />
                                }
                                </div>
                                
                                   
                               </TableCell>

                               <TableCell className="text-center">{item.FromAddress}</TableCell>

                               <TableCell className="text-center">
                                <div className="flex justify-center">
                                { item.TokenPurchaseEthAmount === "Pending" ? <LoadingSpinner /> : item.ChainGuidId === "Expired" ? "Expired" :     
                                   <a
                                       href={
                                           item.ChainGuidId === 'USDTTRC20'
                                               ? `https://tronscan.org/#/transaction/${item.TransactionHash}`
                                               : `https://etherscan.io/tx/${item.TransactionHash}`
                                       }
                                       target="_blank"
                                       rel="noopener noreferrer"
                                   >
                                       {item.TransactionHash}
                                   </a>
                                }
                                </div>
                                
                               </TableCell>
                               <TableCell className="text-center">                                
                                
                               </TableCell>

                           </TableRow>
                       ))}
                       {/* {localData.map((item: { GuidId: React.Key | null | undefined; CreatedTimeStampUtc: string | number | Date; TokenPurchaseEthAmount: any; TokenItemEthAmount: any; TokenItemPurchaseNumber: any; ChainGuidId: string; FromAddress: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; TransactionHash: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                           <TableRow key={item.GuidId}>
                               <TableCell className="font-medium text-center">{ConvertToUTCStringWithoutGMT(new Date(item.CreatedTimeStampUtc))}</TableCell>
                               <TableCell className="text-center">
                                   {Number(item.TokenPurchaseEthAmount).toFixed(6)} ETH
                               </TableCell>
                               <TableCell className="text-center">
                                   {Number(item.TokenItemEthAmount).toFixed(6)} ETH
                               </TableCell>
                               <TableCell className="text-center">{Number(item.TokenItemPurchaseNumber).toFixed(6)}</TableCell>

                               <TableCell className="text-center">
                                   <Image
                                       src={chainIconMap[item.ChainGuidId]}
                                       height={20}
                                       width={14}
                                       alt="chain icon"
                                       style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                                   />
                               </TableCell>

                               <TableCell className="text-center">{item.FromAddress}</TableCell>

                               <TableCell className="text-center">
                                   <a
                                       href={
                                           item.ChainGuidId === 'a057198f-8eee-44c5-81cf-4b0c7a2f0ae4'
                                               ? `https://arbiscan.io/tx/${item.TransactionHash}`
                                               : item.ChainGuidId === '2476bc54-b154-4807-b7e4-b2b2cf86c70c'
                                                   ? `https://etherscan.io/tx/${item.TransactionHash}`
                                                   : '#'
                                       }
                                       target="_blank"
                                       rel="noopener noreferrer"
                                   >
                                       {item.TransactionHash}
                                   </a>
                               </TableCell>

                           </TableRow>
                       ))} */}
                   </TableBody>
                   <TableFooter>
                       <TableRow>
                           <TableCell colSpan={3}>Total</TableCell>
                           <TableCell className="text-center">{dataTotalTokensPurchased}</TableCell>
                       </TableRow>
                   </TableFooter>
               </Table>
            </div>
       </>
    )
}

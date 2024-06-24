"use client"

import { useUserSessionStore } from "@/store/store-user-session";
import React, { useState, useEffect, useCallback } from 'react';
import { getSaasWeb3WalletIcoTransactions } from "@/actions/actionGetWeb3WalletIcoTransactions";
import { getSaasWeb3WalletIcoUsdtTransactions } from "@/actions/actionGetWeb3WalletIcoUsdtTransactions";
import Image from "next/image";
import {ConvertToUTCStringWithoutGMT} from "@/components/datetime/convert-to-utc-without-gmt";
import { LoadingSpinner } from "@/app/_components/loadingspinner";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TablePagination from '@mui/material/TablePagination';
import { NetworkBarChart } from "./_components/networkbarchart";
import { StatusBarChart } from "./_components/statusbarchart";
import { TotalLineChart } from "./_components/totallinechart";

const adminWallets = ["0x9948DAD58034646EC7f4D73Fbc7dBfD2F0077512", "0xd2897F7145D3BDc033Bf50c19b17Fb4D79F571f3", "0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293", "0x805B8e3C5Db9049Df85ED1D2fD70Dc71a94EF5a2", "0x140c2a0a3adc246f9fa42f8eccd144711b24ade9"];

export default function Page() {

    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    
    const [datasetSaasWeb3IcoTransactions, setDatasetSaasWeb3IcoTransactions] = useState<any>([]);
    const [datasetSaasWeb3IcoUsdtTransactions, setDatasetSaasWeb3IcoUsdtTransactions] = useState<any>([]);

    const fetchData = useCallback(async () => {
        if (thirdweb_connected_wallet) {
            const data = await getSaasWeb3WalletIcoTransactions("", thirdweb_connected_wallet);            
            const data1 = await getSaasWeb3WalletIcoUsdtTransactions("", thirdweb_connected_wallet);            
            setDatasetSaasWeb3IcoTransactions(data);
            setDatasetSaasWeb3IcoUsdtTransactions(data1);
        }
    }, [thirdweb_connected_wallet]);

    useEffect(() => {
        fetchData();
    }, [thirdweb_connected_wallet]);

    console.log("data: ", datasetSaasWeb3IcoTransactions)
    console.log("data1: ", datasetSaasWeb3IcoUsdtTransactions)

    const usdtdata = datasetSaasWeb3IcoUsdtTransactions.map((res: any) => {
        let transactionHash = res.NotifyInvoiceResponse !== "null" ? (JSON.parse(res.NotifyInvoiceResponse).txid ? JSON.parse(res.NotifyInvoiceResponse).txid : JSON.parse(res.NotifyInvoiceResponse)["payment_history[0][txid]"] ? JSON.parse(res.NotifyInvoiceResponse)["payment_history[0][txid]"] : "Expired") : "Pending";
        let chain = res.NotifyInvoiceResponse !== "null" ? (JSON.parse(res.NotifyInvoiceResponse).coin_short_name ? JSON.parse(res.NotifyInvoiceResponse).coin_short_name : JSON.parse(res.NotifyInvoiceResponse).coin ? JSON.parse(res.NotifyInvoiceResponse).coin : "Expired") : "Pending";
        let usdtAmount = res.NotifyInvoiceResponse !== "null" ? (JSON.parse(res.NotifyInvoiceResponse).amount ? JSON.parse(res.NotifyInvoiceResponse).amount : JSON.parse(res.NotifyInvoiceResponse)["paid_amount[USD]"] ? JSON.parse(res.NotifyInvoiceResponse)["paid_amount[USD]"] : "Expired") : "Pending";
        let tokenAmount = usdtAmount === "Pending" ? 0 : usdtAmount === "Expired" ? 0 : usdtAmount/0.017;
        return {
            GuidId: res.GuidId,
            CreatedTimeStampUtc: res.CreatedTimeStampUtc,
            ToAddress: res.AddressReceiving,
            FromAddress: res.AddressConnectedWallet,
            TransactionHash: transactionHash,
            ChainGuidId: chain,
            TokenCurrency: "USDT",
            TokenPurchaseEthAmount: usdtAmount,
            TokenItemEthAmount: "0.017",
            TokenItemPurchaseNumber: tokenAmount    
        }
    });

    const dataTotalTokensPurchased = datasetSaasWeb3IcoTransactions.reduce((acc: any, item: { TokenItemPurchaseNumber: any; }) => acc + item.TokenItemPurchaseNumber, 0) + usdtdata.reduce((acc: any, item: { TokenItemPurchaseNumber: any; }) => acc + item.TokenItemPurchaseNumber, 0); 

    const transactiondata = datasetSaasWeb3IcoTransactions.concat(usdtdata);

    transactiondata.sort((a: { CreatedTimeStampUtc: string | number | Date; }, b: { CreatedTimeStampUtc: string | number | Date; }) => {
        let dateB = b.CreatedTimeStampUtc instanceof Date ? b.CreatedTimeStampUtc : new Date(b.CreatedTimeStampUtc);
        let dateA = a.CreatedTimeStampUtc instanceof Date ? a.CreatedTimeStampUtc : new Date(a.CreatedTimeStampUtc);
        return dateB.getTime() - dateA.getTime();
    });

    const chainIconMap: { [key: string]: string } = {
        "a057198f-8eee-44c5-81cf-4b0c7a2f0ae4": "/images/chains/arbitrum-arb-logo-gray.svg",
        "2476bc54-b154-4807-b7e4-b2b2cf86c70c": "/images/chains/ethereum-eth-logo.svg",
        "USDTERC20": "/images/chains/usdterc20-logo.svg",
        "USDTTRC20": "/images/chains/usdttrc20-logo.svg",
    };

    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (

        <>
            {(thirdweb_connected_wallet && adminWallets.includes(thirdweb_connected_wallet) && datasetSaasWeb3IcoTransactions || thirdweb_connected_wallet && adminWallets.includes(thirdweb_connected_wallet) && datasetSaasWeb3IcoUsdtTransactions) && (
                <div className="mt-4">
                    <div className="m-4">
                        <p className="font-bold text-lg">User Purchase History</p>    
                    </div>    
                    <div className="m-4">
                        <div className="flex gap-8 mt-8">
                            <div className="flex gap-4 items-center w-1/4">
                                <p className="text-sm">History:</p>
                                <select 
                                    value="All"         
                                    className="bg-transparent outline-none border border-white"                           
                                >
                                    <option value="all" style={{backgroundColor: "black"}}>All</option>
                                    <option value="oneday" style={{backgroundColor: "black"}}>1D</option>
                                    <option value="oneweek" style={{backgroundColor: "black"}}>7D</option>
                                    <option value="onemonth" style={{backgroundColor: "black"}}>1M</option>       
                                    <option value="oneyear" style={{backgroundColor: "black"}}>1Y</option>  
                                </select> 
                            </div>
                            <div className="flex gap-4 items-center justify-center w-2/4">
                                <p className="">Total token purchased amount:</p>
                                <p className="">{dataTotalTokensPurchased}</p>
                            </div>
                        </div>                        
                        <TotalLineChart period={7}/>
                    </div>                
                    <div className="m-4">
                        <div className="flex gap-4 items-center mt-8">
                            <p className="text-sm">History:</p>
                            <select 
                                value="All"         
                                className="bg-transparent outline-none border border-white"                           
                            >
                                <option value="all" style={{backgroundColor: "black"}}>All</option>
                                <option value="oneday" style={{backgroundColor: "black"}}>1D</option>
                                <option value="oneweek" style={{backgroundColor: "black"}}>7D</option>
                                <option value="onemonth" style={{backgroundColor: "black"}}>1M</option>       
                                <option value="oneyear" style={{backgroundColor: "black"}}>1Y</option>  
                            </select> 
                        </div>
                        <div className="flex items-end">
                            <NetworkBarChart period={7}/>
                            <StatusBarChart period={7}/>
                        </div>                        
                    </div>    
                    <div className="m-4">
                        <div className="mt-8 px-2 flex gap-16">
                            {/* <div className="flex gap-4">
                                <p className="text-md">Token purchased history:</p>
                                <select 
                                    value="All"         
                                    className="bg-transparent outline-none border border-white"                           
                                >
                                    <option value="all" style={{backgroundColor: "black"}}>All</option>
                                    <option value="oneday" style={{backgroundColor: "black"}}>1D</option>
                                    <option value="oneweek" style={{backgroundColor: "black"}}>7D</option>
                                    <option value="onemonth" style={{backgroundColor: "black"}}>1M</option>       
                                    <option value="oneyear" style={{backgroundColor: "black"}}>1Y</option>  
                                </select> 
                            </div> */}
                            <div className="flex gap-4 items-center">
                                <p className="text-sm">Wallet Address:</p>
                                <input
                                    type="text"
                                    className="bg-transparent outline-none border border-white px-1"
                                /> 
                                <button className="border border-white px-2 hover:bg-gray-500">Search</button>
                            </div>
                            <TablePagination
                                component="div"
                                count={100}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}        
                                sx={{
                                    '.MuiTablePagination-toolbar': {
                                      borderColor: 'white',
                                      color: 'white',
                                    },
                                    '.MuiTablePagination-selectLabel, .MuiTablePagination-select, .MuiTablePagination-selectIcon': {
                                      color: 'white',
                                    },
                                    '.MuiTablePagination-displayedRows': {
                                      color: 'white',
                                    },
                                    '.Mui-disabled': {
                                        color: 'grey', 
                                    },
                                  }}           
                            />
                            
                            
                        </div>               
                        <div className="mt-8 mb-20">
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
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={3}>Total</TableCell>
                                            <TableCell className="text-center">{dataTotalTokensPurchased}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </div>    
                    </div>
                                        
                </div>
            )}                  
        </>
    )
}

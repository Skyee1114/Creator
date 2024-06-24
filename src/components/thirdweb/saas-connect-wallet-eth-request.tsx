"use client"

import { Wallet2 } from "iconsax-react";
import { useUserSessionStore } from "@/store/store-user-session";
import React, { useState, useEffect, useCallback } from 'react';
import { getSaasWeb3WalletIcoTransactions } from "@/actions/actionGetWeb3WalletIcoTransactions";
import { getSaasWeb3WalletIcoUsdtTransactions } from "@/actions/actionGetWeb3WalletIcoUsdtTransactions";
import { DataGridWeb3Transactions } from "@/components/ico/datagrid-web3-transactions";
import HowToSecureYourTokens from "@/components/ico/how-to-secure-your-tokens";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface SaasConnectedWalletEthRequestProps {
    authEmailAddress?: string;
}

export default function SaasConnectedWalletEthRequest({authEmailAddress}: SaasConnectedWalletEthRequestProps) {

    const [receiptMessage, setReceiptMessage] = useState('');
    
    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    
    const [datasetSaasWeb3IcoTransactions, setDatasetSaasWeb3IcoTransactions] = useState<any | null>(null);
    const [datasetSaasWeb3IcoUsdtTransactions, setDatasetSaasWeb3IcoUsdtTransactions] = useState<any | null>(null);

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
    }, [fetchData]);
   
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="ml-2 mt-4 mb-8 mr-4 text-sm text-gray-300 flex-1">
                    <p className="font-bold text-lg">
                        Token Purchase/Wallet
                    </p>
                    <p className="font-bold text-md mt-3 mb-5">
                        Welcome to the exclusive opportunity to purchase $CRET tokens at the ground level
                        during our BETA stage, offering an impressive 85% discount off the listing price.
                    </p>

                    <div className="flex items-center sm:justify-start justify-start ml-1.5 mt-4 mr-6">
                    {
                        // thirdweb_connected_wallet && clerk_connected_wallet === 1
                        thirdweb_connected_wallet
                            ? <Wallet2 className="w-5 h-5 text-green-500 fill-green-400/30" aria-hidden="true"/>
                            : thirdweb_connected_wallet
                                ? <Wallet2 className="w-5 h-5 text-yellow-500 fill-yellow-400/30" aria-hidden="true"/>
                                : <Wallet2 className="w-5 h-5 text-red-500 fill-red-400/30" aria-hidden="true"/>
                    }
                    <span className="text-xs ml-2">
                            {thirdweb_connected_wallet || 'Not Connected'}
                    </span>
                    </div>
                </div>
            </div>

            {receiptMessage &&
                <div className="text-gray-400 text-sm mt-20 mb-6 m-4">
                    <Card className="max-w-screen-md">
                        <CardHeader>
                            <CardTitle>Transaction Confirmation</CardTitle>
                            <CardDescription>
                                {receiptMessage.split('\n').map((item, key) => {
                                    return <span key={key}>{item}<br/></span>
                                })}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            }

            {(thirdweb_connected_wallet && datasetSaasWeb3IcoTransactions || thirdweb_connected_wallet && datasetSaasWeb3IcoUsdtTransactions)&& (
                <>
                    {(datasetSaasWeb3IcoTransactions.length > 0 || datasetSaasWeb3IcoUsdtTransactions.length > 0) && (
                        <>
                            <div className="mt-10 m-4 font-semibold text-lg">
                                Transaction History
                            </div>
                            <div className="mt-6 mb-20 m-4">
                                <DataGridWeb3Transactions data={datasetSaasWeb3IcoTransactions} data1={datasetSaasWeb3IcoUsdtTransactions}/>
                            </div>
                        </>
                    )}
                </>
            )}            

        </>
    )
}
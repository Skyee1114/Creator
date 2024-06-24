"use server";

import { SaasWeb3IcoTransactionsModel } from "@/models/SaasWeb3IcoTransactionsModel";

export async function getSaasWeb3WalletIcoTransactions(authUser: string, walletAddress?: string, evmChain?: string): Promise<SaasWeb3IcoTransactionsModel> {
    const baseUrl = process.env.ICO_CREATOR_SAAS_URL;
    const apiKey = process.env.ICO_CREATOR_SAAS_KEY;
    //const apiUrl = `${baseUrl}SaasWeb3IcoTransactions?auth_user=${authUser}&wallet_address=${walletAddress}&evm_chain=${evmChain}`;

    let apiUrl = `${baseUrl}SaasWeb3WalletIcoTransactions?wallet_address=0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293`;

    // if(evmChain) {
    //     apiUrl += `&evm_chain=${evmChain}`;
    // }

    if (!apiKey || !baseUrl) {
        throw new Error('Missing CN_SAAS_API_KEY or API_CN_SAAS_URL environment variable');
    }

    return fetch(
        apiUrl,
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-functions-key": apiKey,
            },
            method: "GET",
            cache: "no-store",
        },
    )
        .then((response) => {
            if (!response.ok) {
                //console.error("Network error");
            }

            return response.json();
        })
        .catch((error) => {
            if (error instanceof TypeError && error.message.includes("API key")) {
                //console.error("Invalid API key:", error);
            } else {
                //console.error("There was a problem with the Fetch operation:", error);
            }
        });
}

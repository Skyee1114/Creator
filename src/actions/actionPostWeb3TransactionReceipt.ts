"use server";

function convertTxResult({transactionHash, toAddress, fromAddress, walletAddress, clerkUserId, chainGuidId, tokenCurrency, tokenItemPurchaseNumber, tokenPurchaseEthAmount, tokenItemEthAmount, promoCode}: { transactionHash: string, toAddress: string, fromAddress: string, walletAddress: string, clerkUserId: string, chainGuidId: string, tokenCurrency: string,  tokenItemPurchaseNumber: number, tokenPurchaseEthAmount: number, tokenItemEthAmount: number, promoCode: string}) {
    return {
        transactionHash,
        toAddress,
        fromAddress,
        walletAddress,
        clerkUserId,
        chainGuidId,
        tokenCurrency,
        tokenItemPurchaseNumber,
        tokenPurchaseEthAmount,
        tokenItemEthAmount,
        promoCode
    };
};

export async function postWeb3TransactionReceipt(
    transactionHash: string | undefined,
    toAddress: string | undefined,
    fromAddress: string | undefined,
    walletAddress: string | undefined,
    clerkUserId: string | undefined,
    chainGuidId: string | undefined,
    tokenCurrency: string | undefined,
    tokenItemPurchaseNumber: number | undefined,
    tokenPurchaseEthAmount: number | undefined,
    tokenItemEthAmount: number | undefined,
    promoCode: string | '',
): Promise<any> {
    const baseUrl = process.env.ICO_CREATOR_SAAS_URL;
    const apiKey = process.env.ICO_CREATOR_SAAS_KEY;
    const apiUrl = `${baseUrl}Web3TransactionReceipt`;

    if (!apiKey || !baseUrl) {
        throw new Error('Missing ICO_CREATOR_SAAS_URL environment variable');
    }

    if (!transactionHash || !fromAddress || !toAddress || !walletAddress || !clerkUserId || !chainGuidId || !tokenCurrency || !tokenItemPurchaseNumber  || !tokenPurchaseEthAmount || !tokenItemEthAmount) {
        //console.error('One or more parameters are undefined');
        return;
    }

    const postData = convertTxResult({transactionHash, toAddress, fromAddress, walletAddress, clerkUserId, chainGuidId, tokenCurrency, tokenItemPurchaseNumber, tokenPurchaseEthAmount, tokenItemEthAmount, promoCode});

    return fetch(
        apiUrl,
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-functions-key": apiKey,
            },
            method: "POST",
            body: JSON.stringify(postData),
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
               // console.error("Invalid API key:", error);
            } else {
                //console.error("There was a problem with the Fetch operation:", error);
            }
        });
}

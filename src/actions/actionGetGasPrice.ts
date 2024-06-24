"use server";

import {GasPriceModel} from "@/models/GasPriceModel";

export async function getGasPrices(): Promise<GasPriceModel> {

    const baseUrl = process.env.ETH_GAS_PRICE_URL;
    const apiKey = process.env.ETH_GAS_PRICE_KEY;

    let apiUrl = `${baseUrl}GasPricesChainStack`;

    if (!apiKey || !baseUrl) {
        throw new Error('Missing ETH_GAS_PRICE_KEY or ETH_GAS_PRICE_URL environment variable');
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

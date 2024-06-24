"use server";

import { SaasIcoProgressModel } from "@/models/SaasIcoProgressModel";

export async function getGetSaasIcoProgress(): Promise<SaasIcoProgressModel> {

    const baseUrl = process.env.ICO_CREATOR_SAAS_URL;
    const apiKey = process.env.ICO_CREATOR_SAAS_KEY;

    let apiUrl = `${baseUrl}SaasIcoProgress`;

    if (!apiKey || !baseUrl) {
        throw new Error('Missing ICO_CREATOR_SAAS_KEY or ICO_CREATOR_SAAS_URL environment variable');
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

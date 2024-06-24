"use server";

export async function getIsUserConnectedWallet(
    walletAddress: string | undefined = undefined,
    authUser: string | null | undefined = undefined
   ): Promise<Boolean> {

    const baseUrl = process.env.API_CREATOR_SAAS_URL;
    const apiKey = process.env.API_CREATOR_SAAS_KEY;

    let apiUrl = `${baseUrl}SaasIsUserConnectedWallet?`;

    if(walletAddress)
        apiUrl += `wallet_address=${walletAddress}`;
    if(authUser)
        apiUrl += `&clerk_user_id=${authUser}`;

    if (!apiKey || !baseUrl) {
        throw new Error('Missing API_CREATOR_SAAS_KEY or API_CREATOR_SAAS_URL environment variable');
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

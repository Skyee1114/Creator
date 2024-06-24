"use server";

export async function postNewUserConnectedWallet(
    walletAddress: string | undefined = undefined,
    authUser: string | null | undefined = undefined
): Promise<number | undefined> {
    const baseUrl = process.env.API_CREATOR_SAAS_URL;
    const apiKey = process.env.API_CREATOR_SAAS_KEY;

    let apiUrl = `${baseUrl}SaasUserConnectedWalletInsert?wallet_address=${walletAddress}&clerk_user_id=${authUser}`;

    if (!apiKey || !baseUrl) {
        throw new Error('Missing API_CREATOR_SAAS_KEY or API_CREATOR_SAAS_URL environment variable');
    }

    let response;
    try {
        response = await fetch(
            apiUrl,
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "x-functions-key": apiKey,
                },
                method: "POST",
                cache: "no-store",
            }
        );
        // Check if request was successful
        if (!response.ok) {
            //throw new Error(`HTTP error! status: ${response.status}`);
        }

        // In successful cases, return the status code directly
        return response.status;
    } catch (error) {
        // Log your error logic here
       // throw error;
    }
}
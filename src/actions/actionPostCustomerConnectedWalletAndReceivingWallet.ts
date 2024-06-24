"use server";

export async function postCustomerConnectedWalletAndReceivingWallet(
    customerWalletAddress: string | undefined,
    receivingWalletAddress: string | undefined,
    promoCode: string | ''
): Promise<number | undefined> {
    const baseUrl = process.env.ICO_CREATOR_SAAS_URL;
    const apiKey = process.env.ICO_CREATOR_SAAS_KEY;

    let apiUrl = `${baseUrl}CoinRemitterTransaction?connectedWallet=${customerWalletAddress}&receivingAddress=${receivingWalletAddress}&promoCode=${promoCode}`;

    if (!apiKey || !baseUrl) {
        throw new Error('Missing ICO_CREATOR_SAAS_KEY or ICO_CREATOR_SAAS_URL environment variable');
    }

    if (!customerWalletAddress || !receivingWalletAddress ) {
        //console.error('One or more parameters are undefined');
        return;
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
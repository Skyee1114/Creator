"use server";

export async function postCreateInvoice(
    type: string | undefined,
    key: string | undefined,
    password: string | undefined,
    usdt: string | undefined,
    expire_time: number | undefined,
    notify_url: string | undefined,
    success_url: string | undefined,
): Promise<any | undefined> {

    let apiUrl = `https://coinremitter.com/api/v3/USDT${type}/create-invoice?api_key=${key}&password=${password}&amount=${usdt}&expire_time=${expire_time}&notify_url=${notify_url}&success_url=${success_url}`;

    let response;
    try {
        response = await fetch(
            apiUrl,
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
            }
        );
        // Check if request was successful
        if (!response.ok) {
            //throw new Error(`HTTP error! status: ${response.status}`);
        }

        // In successful cases, return the status code directly

        const data = await response.json();
        return data;
        
        // return receivingWallet;
    } catch (error) {
        // Log your error logic here
       // throw error;
    }
}
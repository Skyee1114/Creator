import SaasConnectedWalletEthRequest from "@/components/thirdweb/saas-connect-wallet-eth-request";
// import { currentUser } from "@clerk/nextjs";

export default async function Page() {
    // const user = await currentUser();
    // const authEmailAddress = user?.emailAddresses[0]?.emailAddress;

    // if (typeof authEmailAddress !== 'string') {
    //     // handle case when authEmailAddress is not a string
    //     return <>Email address not found!</>;  // Return a fallback message
    // }
    return (
        <>
            {/*<SaasConnectedWalletEthRequest authEmailAddress={authEmailAddress} />*/}
            <SaasConnectedWalletEthRequest authEmailAddress={''} />
        </>
    )
}
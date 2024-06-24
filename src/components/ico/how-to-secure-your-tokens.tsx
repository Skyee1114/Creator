import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function HowToSecureYourTokens() {
    return (
        <Accordion type="single" defaultValue="item-1" collapsible className="max-w-screen-xl">
            <AccordionItem value="item-1">
                <AccordionTrigger>How to secure your tokens ?</AccordionTrigger>
                <AccordionContent>
                    <ol className="space-y-2">
                        <li className="flex">
                            <div className="w-6">1.</div>
                            <div className="flex-1"><b>Connect</b> your preferred DeFi wallet via the <b>&apos;Connect Wallet&apos;</b> button.</div>
                        </li>
                        <li className="flex">
                            <div className="w-6">2.</div>
                            <div className="flex-1">Go to your <b>Wallet</b> and <b>‘Approve’</b> the connection prompt which will be shown.</div>
                        </li>
                        <li className="flex">
                            <div className="w-6">3.</div>
                            <div className="flex-1">Congratulations, you have now <i>connected</i> your wallet to <b>Creat&apos;or platform</b>.</div>
                        </li>
                        {/*<li className="flex">*/}
                        {/*    <div className="w-6">4.</div>*/}
                        {/*    <div className="flex-1">Now <b>link</b> your wallet address to the account.</div>*/}
                        {/*</li>*/}
                        <li className="flex">
                            <div className="w-6">4.</div>
                            <div className="flex-1">Choose <b>how many tokens</b> you want <b>to purchase</b>. You will see amount of ETH required to buy the number of tokens requested.  Please bear in mind that <b>relevant GAS fees</b> applies to the respective network chosen.</div>
                        </li>
                        <li className="flex">
                            <div className="w-6">5.</div>
                            <div className="flex-1">Click <b>&apos;Purchase Now&apos;</b> and <b>approve</b> the transaction in your wallet.  Please note that if you do not have enough funds in your wallet for the token purchase plus GAS fees, a prompt will come up stating: <i>There are insufficient funds for gas and claim price, you will need to go to your Wallet to look at available funds.</i></div>
                        </li>
                        <li className="flex">
                            <div className="w-6">6.</div>
                            <div className="flex-1">If the transaction is approved, then you will <b>see your purchased tokens</b> appear on your account.</div>
                        </li>
                        {/*<li className="flex">*/}
                        {/*    <div className="w-6">7.</div>*/}
                        {/*    <div className="flex-1">You will also receive an <b>email confirmation</b> of purchase.</div>*/}
                        {/*</li>*/}
                        <li className="flex">
                            <div className="w-6">7.</div>
                            <div className="flex-1">If you have <b>any issues</b> in purchasing, then please email us at <a
                                className="hover:underline"
                                href="mailto:info@creat-or.io"
                            >
                                <b>info@creat-or.io</b>
                            </a></div>
                        </li>
                    </ol>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>Shall I purchase from Ethereum Mainnet or Arbitrum One ?</AccordionTrigger>
                <AccordionContent>
                    <ol className="space-y-2">

                        <p>Before finalizing your purchase of CRET tokens in the ICO, we highly recommend considering the use of the Arbitrum One chain to significantly reduce your gas fees. This simple step ensures a more cost-effective transaction, enhancing your overall purchasing experience.</p>

                        <li className="flex">
                            <div className="w-6">1.</div>
                            <div className="flex-1">Ensure your DeFi wallet is linked to your <b>CREAT&apos;OR</b> account.</div>
                        </li>
                        <li className="flex">
                            <div className="w-6">2.</div>
                            <div className="flex-1">You have three methods to toggle between the Ethereum Mainnet and the Arbitrum One networks:</div>
                        </li>
                        <ol className="space-y-2 pl-6">
                            <li className="flex">
                                <div className="w-6">a.</div>
                                <div className="flex-1">Directly modify the network within your DeFi wallet; the CREAT&apos;OR platform will sync with this change automatically.</div>
                            </li>
                            <li className="flex">
                                <div className="w-6">b.</div>
                                <div className="flex-1">Utilize the &apos;Switch to Ethereum&apos; or &apos;Switch to Arbitrum&apos; buttons/links provided on the purchase panel.</div>
                            </li>
                            <li className="flex">
                                <div className="w-6">c.</div>
                                <div className="flex-1">Access the &apos;Connected Wallet&apos; option located at the top right corner, select your currently active network (Ethereum Mainnet or Arbitrum One), and then choose the network you wish to switch to.</div>
                            </li>
                        </ol>
                        <li className="flex">
                            <div className="w-6">3.</div>
                            <div className="flex-1">A prompt will appear in your DeFi wallet requesting approval for the network change. You must confirm this to proceed.</div>
                        </li>
                        <li className="flex">
                            <div className="w-6">4.</div>
                            <div className="flex-1">Congratulations, you have successfully switched networks.</div>
                        </li>

                    </ol>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}

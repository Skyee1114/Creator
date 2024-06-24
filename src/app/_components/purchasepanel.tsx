'use client'

import React, { useEffect, useState, useCallback } from 'react';
import { Arbitrum, Ethereum } from "@thirdweb-dev/chains";
import { useSDK, useSwitchChain } from "@thirdweb-dev/react";
import { useAddress, useChain } from "@thirdweb-dev/react";
import { useUserSessionStore } from "@/store/store-user-session";
import { getGetSaasIcoProgress } from "@/actions/actionGetSaasIcoProgress";
import { getSaasWeb3WalletIcoTransactions } from "@/actions/actionGetWeb3WalletIcoTransactions";
import { getGasPrices } from "@/actions/actionGetGasPrice";
import { postCreateInvoice } from '@/actions/actionPostCreateInvoice';
import { postCustomerConnectedWalletAndReceivingWallet } from "@/actions/actionPostCustomerConnectedWalletAndReceivingWallet"
import { postWeb3TransactionReceipt } from "@/actions/actionPostWeb3TransactionReceipt";
import { resendEmailWeb3TransactionReceipt } from "@/actions/actionSendEmailWeb3TransactionReceipt.client";
import { ThirdWebConnectWallet } from '@/components/thirdweb/thirdweb-connect-wallet';
import { sendGTMEvent } from '@next/third-parties/google'
import { toast } from "sonner";
import { BsShieldCheck } from "react-icons/bs";
import { CountdownTimer } from "./countdowntimer";
import { PaymentOption } from "./paymentoption";
import { LoadingSpinner } from './loadingspinner';
import { MetamaskConnectButton } from './metamaskconnectbutton';
import { isIOS } from '@/lib/utils';

interface TransactionError {
    code: string;
    message: string;
}

export default function PurchasePanel() {

    const sdk = useSDK();
    const switchChain = useSwitchChain();

    const ICOBetaDateUTC = new Date('2024-07-12T00:00:00Z');
    const isoCretTokenItemUSD = 0.034;
    const [TotalSoldAmountRate, setTotalSoldAmountRate] = useState(0);
    const isoCretTokenPurchaseMinUSD = 10;
    const [CretTokenCalculatedValueUsd, setCretTokenCalculatedValueUsd] = useState(0);
    const [CretTokenCalculatedValueEth, setCretTokenCalculatedValueEth] = useState(0);

    const [walletMessage, setWalletMessage] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [receiptMessage, setReceiptMessage] = useState('');
    const icoPaymentWalletAddress = "0xB1730c39367F48D7039DfA12a95C0aBD4a897555";

    const [loading, setLoading] = useState(false);     
    const [isIOSDevice, setIsIOSDevice] = useState(false);

    const address = useAddress();
    const evmChain = useChain();
    const { setThirdwebConnectedWallet, setThirdwebConnectedChain } = useUserSessionStore();

    const [selectedPayment, setSelectedPayment] = useState<string>('ETH');    
    const handlePaymentOptionChange = (newPayment: string) => {
        setSelectedPayment(newPayment);
    }

    useEffect(() => {
        setIsIOSDevice(isIOS());
        console.log("isIphone: ", isIOS());
      }, []);

    useEffect(() => {
        if(setThirdwebConnectedWallet)
        {
            setThirdwebConnectedWallet(address || null);

            if (address !== null || true)
            {
                try {
                    // send event to GTAG
                    sendGTMEvent({
                        event: "wallet-registered",
                        value: address
                    })

                    // console.log("Pushed event to GTAG: wallet-registered", address);
                } catch (error) {
                    // console.log('Error occurred while sending event to GTAG: ', error);
                }
            }
        }
    }, [address, setThirdwebConnectedWallet]);

    useEffect(() => {
        if(setThirdwebConnectedChain) {
            setThirdwebConnectedChain(evmChain?.chainId || null);
        }
    }, [evmChain, setThirdwebConnectedChain]);

    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    const thirdweb_connected_chain = useUserSessionStore((state) => state.thirdweb_connected_chain);

    const [tokensToPurchaseAmount, setTokensToPurchaseAmount] = useState<number | null>(0);
    const [tokenPromoCode, setTokenPromoCode] = useState('');

    const [ethGasEstimate, setEthGasEstimate] = useState<number>(0);
    const [ethGasPrice, setEthGasPrice] = useState<string>("");
    const [arbGasEstimate, setArbGasEstimate] = useState<number>(0);
    const [arbGasPrice, setArbGasPrice] = useState<string>("");
    const [ethGasEstimateTimeStampUtc, setEthGasEstimateTimeStampUtc] = useState<Date>(new Date());
    const [ethGasPriceTimeStampUtc, setEthGasPriceTimeStampUtc] = useState<Date>(new Date());
    const [arbGasEstimateTimeStampUtc, setArbGasEstimateTimeStampUtc] = useState<Date>(new Date());
    const [arbGasPriceTimeStampUtc, setArbGasPriceTimeStampUtc] = useState<Date>(new Date());

    const [transactionCostEtherEthereum, setTransactionCostEtherEthereum] = useState(0);
    const [transactionCostEtherArbitrum, setTransactionCostEtherArbitrum] = useState(0);
    const [transactionTotalCostEtherEthereum, setTransactionTotalCostEtherEthereum] = useState(0);
    const [transactionTotalCostEtherArbitrum, setTransactionTotalCostEtherArbitrum] = useState(0);

    const [transactionCostEtherEthereumUsd, setTransactionCostEtherEthereumUsd] = useState(0);
    const [transactionCostEtherArbitrumUsd, setTransactionCostEtherArbitrumUsd] = useState(0);
    const [transactionTotalCostEtherEthereumUsd, setTransactionTotalCostEtherEthereumUsd] = useState(0);
    const [transactionTotalCostEtherArbitrumUsd, setTransactionTotalCostEtherArbitrumUsd] = useState(0);
    const [transactionSwitchChainSavingsUsd, setTransactionSwitchChainSavingsUsd] = useState(0);

    interface TransactionReceiptDetails {
        authUserName?: string;
        authEmailAddress?: string;
        toAddress?: string;
        fromAddress?: string;
        chainGuidName?: string;
        tokenPurchaseEthAmount?: string;
        tokenItemPurchaseNumber?: string;
        transactionHash?: string;
        promoCode?: string;
    }

    const handleTokenPromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Regex for alphanumeric characters
        const regex = /^[a-zA-Z0-9]*$/;
        if (regex.test(event.target.value)) {
            setTokenPromoCode(event.target.value);
        }
    };

    const deployTransfer = async () => {

        if (CretTokenCalculatedValueUsd === 0 || CretTokenCalculatedValueUsd <  isoCretTokenPurchaseMinUSD) {
            toast.error("Purchase Now", {
                description: `Minimum purchase is USD ${isoCretTokenPurchaseMinUSD} ETH equivalent`,
            })
            return;
        }

        if(selectedPayment === 'USDT-ERC20' || selectedPayment === 'USDT-TRC20') {
            let type;
            let key;
            let password;
            const usdt = CretTokenCalculatedValueUsd.toFixed(3);
            const expire_time = 30;
            const notify_url = 'https://ico-creator-saas.azurewebsites.net/api/CoinRemitterTransactionReceipt';
            const success_url = 'http://95.217.98.118:3000/saas/ico';
            if (selectedPayment === 'USDT-ERC20') {
                type = 'ERC20';
            } else {
                type = 'TRC20';
            }            
            if(type === 'ERC20') {
                key = process.env.NEXT_PUBLIC_USDTERC20CRET_KEY;
                password = process.env.NEXT_PUBLIC_USDTERC20CRET_PWD;
            } else {
                key = process.env.NEXT_PUBLIC_USDTTRC20CRET_KEY;
                password = process.env.NEXT_PUBLIC_USDTTRC20CRET_PWD;
            }

            try {
                const data = await postCreateInvoice(
                    type,
                    key,
                    password,
                    usdt,
                    expire_time,
                    notify_url,
                    success_url
                );

                const invoiceLink = data.data.url;
                console.log("invoiceLink: ", data.data.url);
                const receivingWallet = data.data.address;  
                
                window.location.href = invoiceLink;
                
                if (typeof thirdweb_connected_wallet !== 'string' && thirdweb_connected_wallet !== undefined) {
                    //console.error('thirdweb_connected_wallet must be a string or undefined');
                    return;
                }
                
                await postCustomerConnectedWalletAndReceivingWallet(
                    thirdweb_connected_wallet,
                    receivingWallet,
                    tokenPromoCode
                    );
               
            } catch (error: any) {
              // Handle any errors
                toast.error("Error", {
                    description: error.message,
                })
            }


            return;
        }

        let myError: TransactionError;
        setReceiptMessage('');

        try {

            let chainGuidId;
            if (thirdweb_connected_chain === Ethereum.chainId) {
                chainGuidId = "2476bc54-b154-4807-b7e4-b2b2cf86c70c";
            } else if (
                thirdweb_connected_chain === Arbitrum.chainId) {
                chainGuidId = "a057198f-8eee-44c5-81cf-4b0c7a2f0ae4";
            }

            const tokenCurrency = "ETH";
            const tokenItemPurchaseNumber = tokensToPurchaseAmount || 0;

            try {
                const txResult = await sdk?.wallet.transfer(icoPaymentWalletAddress, CretTokenCalculatedValueEth);

                const receipt = txResult?.receipt ?? null;
                if (receipt != null) {
                    if (typeof thirdweb_connected_wallet !== 'string' && thirdweb_connected_wallet !== undefined) {
                        //console.error('thirdweb_connected_wallet must be a string or undefined');
                        return;
                    }

                    setValidationMessage(``);

                    console.log("receipt: ", receipt);

                    const response = await postWeb3TransactionReceipt(
                        receipt.transactionHash,
                        receipt.to,
                        receipt.from,
                        thirdweb_connected_wallet,
                        'na',
                        chainGuidId,
                        tokenCurrency,
                        tokenItemPurchaseNumber,
                        CretTokenCalculatedValueEth,
                        icoProgressDataSet.ConversionUsdEth,
                        tokenPromoCode);

                    await fetchData();

                    const chainGuidName = thirdweb_connected_chain === 1 ? "Ethereum MainNet" : "Arbitrum One";
                    const {to: toAddress, from: fromAddress} = receipt;
                    
                    toast.success("Purchase Complete", {
                        description: `Go to your Dashboard to view transaction details.`,
                    })

                    setReceiptMessage(`
                            from (your connected wallet)\n${fromAddress}\n\nto (Creat'or)\n${toAddress}\n
                            transferred (via ${chainGuidName})\n${CretTokenCalculatedValueEth} ETH for ${tokenItemPurchaseNumber} CRET tokens\n
                            blockchain transaction ref:\n${receipt.transactionHash}\n
                            You have successfully purchased your CRET tokens\n
                            Thank you for supporting this ICO`);

                    try {
                        let tokenPurchaseEthAmount = CretTokenCalculatedValueEth.toString();
                        let tokenItemPurchaseString = tokenItemPurchaseNumber.toString();
                        let details: TransactionReceiptDetails = {
                            authUserName: '',
                            authEmailAddress: '',
                            toAddress: toAddress,
                            fromAddress: fromAddress,
                            chainGuidName: chainGuidName,
                            tokenPurchaseEthAmount: tokenPurchaseEthAmount,
                            tokenItemPurchaseNumber: tokenItemPurchaseString,
                            transactionHash: receipt.transactionHash,
                            promoCode: tokenPromoCode,
                        };
                        await resendEmailWeb3TransactionReceipt(details);
                        //console.log(resultMailSend);
                    } catch (error) {
                        //console.error('Error occurred while sending email: ', error);
                    }


                    try {
                            // send event to GTAG
                            sendGTMEvent({
                                    event: "ico-token-purchase",
                                    value: CretTokenCalculatedValueEth,
                                    currency: "ETH"
                                 })

                            //console.log('Pushed event to GTAG: purchase');
                        } catch (error) {
                            //console.log('Error occurred while sending event to GTAG: ', error);
                    }
                }

                //console.log(response);
            } catch (error) {
                console.log("error: ", error);
                myError = error as TransactionError;
                //console.log('myError.code', myError.code);

                if (myError.code === "ACTION_REJECTED") {
                    toast.error("Purchase Now", {
                        description: `Purchase action was rejected by user`,
                    })
                }

                if (String(myError.code) === "INSUFFICIENT_FUNDS" || String(myError.code) === "-32603") {
                    toast.error("Purchase Now", {
                        description: `Insufficient funds to cover the transaction and gas fees`,
                    })
                }                
            }

        } catch (error) {
            //
        }
    }

    const [datasetSaasWeb3IcoTransactions, setDatasetSaasWeb3IcoTransactions] = useState<any | null>(null);
    const fetchData = useCallback(async () => {

        // if (clerk_user_Id) {
        if (thirdweb_connected_wallet) {
            const data = await getSaasWeb3WalletIcoTransactions("", thirdweb_connected_wallet);
            setDatasetSaasWeb3IcoTransactions(data);
           //console.log(JSON.stringify(data, null, 2));
        }
    }, [thirdweb_connected_wallet]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const [icoProgressDataSet, setIcoProgressDataSet] = useState({
        TokensSoldAmount: 0,
        TokensSoldTimeStampUtc: new Date(),
        ConversionUsdEth: 0,
        ConversionUsdEthTimeStampUtc: new Date(),
        SingleTokenEthAmount: 0,
        TokensAvailableAmount: 0,
        TokenIcoPhaseTotalAmount: 0,
    });

    useEffect(() => {
        const fetchIcoProgress = async () => {
            try {
                const resultIcoProgress = await getGetSaasIcoProgress();

                if(resultIcoProgress && Array.isArray(resultIcoProgress)) {
                    const firstResult = resultIcoProgress[0];

                    const {
                        TokensSoldAmount,
                        TokensSoldTimeStampUtc,
                        ConversionUsdEth,
                        ConversionUsdEthTimeStampUtc,
                        SingleTokenEthAmount,
                        TokensAvailableAmount,
                        TokenIcoPhaseTotalAmount
                    } = firstResult;

                    setIcoProgressDataSet({
                        TokensSoldAmount: TokensSoldAmount,
                        TokensSoldTimeStampUtc: new Date(TokensSoldTimeStampUtc),
                        ConversionUsdEth: ConversionUsdEth,
                        ConversionUsdEthTimeStampUtc: new Date(ConversionUsdEthTimeStampUtc),
                        SingleTokenEthAmount: SingleTokenEthAmount,
                        TokensAvailableAmount: TokensAvailableAmount,
                        TokenIcoPhaseTotalAmount: TokenIcoPhaseTotalAmount,
                    });

                    let rate = ((TokensSoldAmount + 2000000)/TokenIcoPhaseTotalAmount)*100 + 35;
                    if (rate >= 100) rate = 100;                    
                    setTotalSoldAmountRate(rate);
                }
            } catch(error) {
                //console.error("Failed to get Ico Progress:", error);
            }
        };

        fetchIcoProgress(); // call immediately once
        const interval = setInterval(fetchIcoProgress, 120000); // call every 2 mins
        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    useEffect(() => {
        const fetchGasPrices = async () => {
            try {
                const result = await getGasPrices();

                if (result != null)
                {
                   // console.log('Gas Prices:', result);

                    setEthGasEstimate(result.EthGasEstimate);
                    setEthGasEstimateTimeStampUtc(result.EthGasEstimateTimeStampUtc);
                    setEthGasPrice(result.EthGasPrice);
                    setEthGasPriceTimeStampUtc(result.EthGasPriceTimeStampUtc);
                    setArbGasEstimate(result.ArbGasEstimate);
                    setArbGasEstimateTimeStampUtc(result.ArbGasEstimateTimeStampUtc);
                    setArbGasPrice(result.ArbGasPrice);
                    setArbGasPriceTimeStampUtc(result.ArbGasPriceTimeStampUtc);
                }
            } catch(error) {
                //console.error("Failed to get Gas Prices:", error);
            }
        };

        fetchGasPrices ();   // call immediately once
        const interval = setInterval(fetchGasPrices , 60000);   // call every 1 minute

        return () => clearInterval(interval);   // Clear the interval when the component unmounts
    }, []);


    useEffect(() => {
        const ethGasPriceWeiEthereum = BigInt(ethGasPrice);
        const gasPriceEtherEthereum = Number(ethGasPriceWeiEthereum) / 1e18;
        const gasEstimateUnitsEthereum = Number(ethGasEstimate);
        const transactionCostEtherEthereum = gasPriceEtherEthereum * gasEstimateUnitsEthereum;

        setTransactionCostEtherEthereum (transactionCostEtherEthereum);
        //console.log('transactionCostEther - Ethereum:', transactionCostEtherEthereum);

        const ethGasPriceWeiArbitrum = BigInt(arbGasPrice);
        const gasPriceEtherArbitrum = Number(ethGasPriceWeiArbitrum) / 1e18;
        const gasEstimateUnitsArbitrum = Number(arbGasEstimate);
        const transactionCostEtherArbitrum = gasPriceEtherArbitrum * gasEstimateUnitsArbitrum;

        setTransactionCostEtherArbitrum (transactionCostEtherArbitrum);
        //console.log('transactionCostEther - Arbitrum:', transactionCostEtherArbitrum);

    }, [CretTokenCalculatedValueEth, icoProgressDataSet]);

    useEffect(() => {
        setTransactionTotalCostEtherEthereumUsd(transactionTotalCostEtherEthereum / icoProgressDataSet.ConversionUsdEth);
        setTransactionTotalCostEtherArbitrumUsd(transactionTotalCostEtherArbitrum / icoProgressDataSet.ConversionUsdEth);
    }, [transactionTotalCostEtherEthereum, transactionTotalCostEtherArbitrum]); // dependency

    useEffect(() => {
        setTransactionTotalCostEtherEthereum (transactionCostEtherEthereum + CretTokenCalculatedValueEth);
        //setTransactionTotalCostEtherEthereumUsd(transactionTotalCostEtherEthereum *  icoProgressDataSet.ConversionUsdEth);

        setTransactionTotalCostEtherArbitrum (transactionCostEtherArbitrum + CretTokenCalculatedValueEth);
        //setTransactionTotalCostEtherArbitrumUsd(transactionTotalCostEtherArbitrum *   icoProgressDataSet.ConversionUsdEth);

        setTransactionCostEtherEthereumUsd(transactionCostEtherEthereum / icoProgressDataSet.ConversionUsdEth);
        setTransactionCostEtherArbitrumUsd(transactionCostEtherArbitrum / icoProgressDataSet.ConversionUsdEth);

    }, [CretTokenCalculatedValueEth, icoProgressDataSet, transactionCostEtherEthereum, transactionCostEtherArbitrum]); // dependency

    useEffect(() => {
        // Compute new calculated value
        const newCalculatedValueEth = Number(tokensToPurchaseAmount) * icoProgressDataSet.SingleTokenEthAmount;
        setCretTokenCalculatedValueEth(newCalculatedValueEth);
        const newCalculatedValueUsd = isoCretTokenItemUSD * Number(tokensToPurchaseAmount);
        setCretTokenCalculatedValueUsd(newCalculatedValueUsd);
    }, [icoProgressDataSet]); // dependency

    useEffect(() => {
        setValidationMessage(``);
    }, [thirdweb_connected_wallet, thirdweb_connected_chain]); // dependency

    useEffect(() => {
        const transactionCostDifference = thirdweb_connected_chain === Arbitrum.chainId
            ?  transactionTotalCostEtherArbitrumUsd - transactionTotalCostEtherEthereumUsd
            :  transactionTotalCostEtherEthereumUsd - transactionTotalCostEtherArbitrumUsd;
        setTransactionSwitchChainSavingsUsd(transactionCostDifference);
    }, [thirdweb_connected_chain, transactionTotalCostEtherEthereumUsd, transactionTotalCostEtherArbitrumUsd]); // dependency

    // console.log("wallet: ", thirdweb_connected_wallet)
    
    return (        
        <div 
            className="bg-[#174034] px-2 py-4 md:px-24 md:py-8 xl:px-6 xl:py-6  text-center rounded-lg sm:rounded-xl w-full xl:w-[460px]"
            style={{
                boxShadow: '0px 0px 8px 8px rgba(82, 242, 168, 0.8)',
            }}    
        >
            <div className="flex flex-col gap-4">
                <p className="text-xl sm:text-2xl">CRET ICO: Stage 1</p>                            
                <CountdownTimer ICOBetaDateUTC={ICOBetaDateUTC} />     
                <div className="flex items-center justify-between">
                    <div className="w-1/6 sm:w-1/4 xl:w-1/5 py-px bg-[#52F2A8]"></div>
                    <p className="text-sm">Total Stage 1 Supply: 26,666,667</p>
                    <div className="w-1/6 sm:w-1/4 xl:w-1/5 py-px bg-[#52F2A8]"></div>
                </div>
                <div className="w-full bg-[#13231C] rounded-full">
                    <div 
                        className="h-3 bg-[#52F2A8] rounded-full" style={{ width: `${TotalSoldAmountRate}%`}}
                    ></div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-1/4 sm:w-1/3 py-px bg-[#52F2A8]"></div>
                    <p className="text-sm">1 CRET = ${isoCretTokenItemUSD}</p>
                    <div className="w-1/4 sm:w-1/3 py-px bg-[#52F2A8]"></div>
                </div>
                <div className="flex flex-col items-start border-2 border-[#52F2A8] p-2 rounded-sm">
                    <p className="text-sm text-[#919191]">Amount In CRET you receive</p>
                    <input 
                        type="number" 
                        placeholder="0"
                        value={tokensToPurchaseAmount ? tokensToPurchaseAmount : '' }
                        className="bg-transparent outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        onChange={event => {
                            let newValue = event.target.value;
                            if (!newValue.match(/^\d*$/)) { // If the new value isn't all digits, ignore it.
                                return;
                            }

                            let numericValue = parseInt(newValue, 10) || 0; // Default to 0 if NaN

                            if (numericValue > 100000000) {
                                // Ignore input if over 10000000
                                return;
                            }

                            // Update the state
                            setTokensToPurchaseAmount(numericValue);

                            // Compute new calculated value
                            const newCalculatedValueEth = Number(newValue) * icoProgressDataSet.SingleTokenEthAmount;
                            setCretTokenCalculatedValueEth(newCalculatedValueEth);
                            const newCalculatedValueUsd = isoCretTokenItemUSD * Number(newValue);
                            setCretTokenCalculatedValueUsd(newCalculatedValueUsd);
                        }}
                    />                    
                </div>  
                {/* <TabOption 
                    eth={!isNaN(CretTokenCalculatedValueEth) ? CretTokenCalculatedValueEth.toFixed(8) : '0.00000'} 
                    usd={!isNaN(CretTokenCalculatedValueUsd) ? CretTokenCalculatedValueUsd.toFixed(2) : '0.00'}
                    wallet={thirdweb_connected_wallet ? true : false}
                />                     */}
                <PaymentOption 
                    onPaymentChange={handlePaymentOptionChange}
                    eth={!isNaN(CretTokenCalculatedValueEth) ? CretTokenCalculatedValueEth.toFixed(8) : '0.00000'} 
                    usd={!isNaN(CretTokenCalculatedValueUsd) ? CretTokenCalculatedValueUsd.toFixed(3) : '0.000'}
                    wallet={thirdweb_connected_wallet ? true : false}
                />    
           
           {(selectedPayment === 'USDT-ERC20' || selectedPayment === 'USDT-TRC20') ? null 
           :
           <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <div className="w-1/4 sm:w-1/3 py-px bg-[#52F2A8]"></div>
                        <p className='text-sm'>Est. Gas Price</p>
                        <div className="w-1/4 sm:w-1/3 py-px bg-[#52F2A8]"></div>
                    </div>     
                    <div className="flex justify-between gap-4">
                        <p className="w-1/2 text-sm">
                            {
                                thirdweb_connected_chain === Arbitrum.chainId
                                    ? !isNaN(transactionCostEtherArbitrum) ? transactionCostEtherArbitrum.toFixed(8) : '0.00000'
                                    : !isNaN(transactionCostEtherEthereum) ? transactionCostEtherEthereum.toFixed(8) : '0.00000'
                            } ETH
                        </p>
                        <p className="w-1/2 text-sm">
                            {
                                thirdweb_connected_chain === Arbitrum.chainId
                                    ? !isNaN(transactionCostEtherArbitrumUsd) ? transactionCostEtherArbitrumUsd.toFixed(3) : '0.00000'
                                    : !isNaN(transactionCostEtherEthereumUsd) ? transactionCostEtherEthereumUsd.toFixed(3) : '0.00000'
                            } USD
                        </p>
                    </div> 
                </div>
           }
                
                <div className='flex flex-col gap-4'>
                    <div className="h-[60px] flex flex-col justify-center items-start border-2 px-2 border-[#52F2A8] rounded-sm">
                        <p className="text-sm text-[#919191]">Promo Code (if applicable)</p>
                        <input 
                            type="text" 
                            maxLength={12}
                            value={tokenPromoCode}
                            onChange={handleTokenPromoCodeChange}
                            className="text-white bg-transparent outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                    </div> 
                    {isIOSDevice && <MetamaskConnectButton />}
                    <ThirdWebConnectWallet type='2' />                             
                    <button 
                        onClick={async () => {
                            if (thirdweb_connected_wallet ) {
                                setLoading(true);
                                await deployTransfer();
                                setLoading(false); 
                            }
                            else {
                                toast.error("Purchase Now", {
                                    description: `Please connect your wallet`,
                                })
                            }
                        }}
                        // disabled={!isValid}
                        className={`h-[60px] flex items-center justify-center text-sm sm:text-base border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] rounded-sm`}
                    >
                         {loading ? <LoadingSpinner /> : <><BsShieldCheck className="mr-2 h-4 sm:h-5 w-4 sm:w-5"/>PURCHASE NOW</>}
                    </button> 
                </div>  
            </div>                  
        </div>     
    );
}

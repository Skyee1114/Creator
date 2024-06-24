"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { getGetSaasIcoProgress } from "@/actions/actionGetSaasIcoProgress";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    cretTokenPurchaseNumber: z.string().refine(value => /^\d+$/.test(value), {
        message: "Please provide a valid number of CRET tokens to purchase value",
    }),
});

function Page() {
    // const [isValid, setIsValid] = useState(false);

    const convertToUTCStringWithoutGMT = (date: Date) => {
        let isoString = date.toISOString();
        let datePart = isoString.slice(0, 10);  // gets the date part in format yyyy-mm-dd
        let timePart = isoString.slice(11, 19); // gets the time part in format hh:mm:ss
        // Reformat the date part into format similar to what toUTCString provides ('dd Mon yyyy')
        let [year, month, day] = datePart.split('-');
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        datePart = `${day}-${months[Number(month)-1]}-${year}`;
        return `${datePart} ${timePart}`;
        // return `${datePart} ${timePart} UTC`;
    }

    useEffect(() => {
        const frameHeight = document.body.offsetHeight;
        window.parent.postMessage({ frameHeight }, "*");
    }, []);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const targetDate = new Date('April 23, 2024');

    useEffect(() => {
        tick(); // calling tick immediately

        const timerID = setInterval(tick, 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        const now = new Date();
        const diffInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

        setDays(Math.floor(diffInSeconds / 86400));
        setHours(Math.floor((diffInSeconds % 86400) / 3600));
        setMinutes(Math.floor((diffInSeconds % 3600) / 60));
        setSeconds(diffInSeconds % 60);
    }

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
                //console.log('Returned data:', resultIcoProgress);

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
                }
            } catch(error) {
                //console.error("Failed to get Ico Progress:", error);
            }
        };

        fetchIcoProgress(); // call immediately once
        const interval = setInterval(fetchIcoProgress, 300000); // call every 5 mins

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    const isoCretTokenItemUSD = 0.017;
    const isoCretTokenPurchaseMinUSD = 50;
    const [ CretTokenCalculatedValueUsd, setCretTokenCalculatedValueUsd] = useState(0);
    const [ CretTokenCalculatedValueEth, setCretTokenCalculatedValueEth] = useState(0);

    const [ validationMessage, setValidationMessage] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cretTokenPurchaseNumber: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        //console.log(values)
    }

    useEffect(() => {
        // should correctly convert to a number or result in NaN (handled later)
        const parsedInput = Number(0);
        // only calculate when input and rate are legitimate numbers
        if (!isNaN(parsedInput) && !isNaN(icoProgressDataSet.ConversionUsdEth))
        {
            const valueEth = parsedInput * icoProgressDataSet.SingleTokenEthAmount;
            setCretTokenCalculatedValueEth(valueEth);
            const valueUsd = parsedInput *  isoCretTokenItemUSD;
            setCretTokenCalculatedValueUsd(valueUsd);
        }
        else {
            setCretTokenCalculatedValueEth(0);
            setCretTokenCalculatedValueUsd(0);
        }
    }, [form]);

    const [isValid, setIsValid] = React.useState(true);
    useEffect(() => {

        const isValidInput = CretTokenCalculatedValueUsd >= isoCretTokenPurchaseMinUSD;
        setIsValid(isValidInput);

        if (CretTokenCalculatedValueUsd <  isoCretTokenPurchaseMinUSD) {
            setValidationMessage(`Minimum purchase is USD ${isoCretTokenPurchaseMinUSD} ETH equivalent`);
        } else {
            setValidationMessage('');
        }
    }, [CretTokenCalculatedValueUsd]);

    const [value, setValue] = useState<number | null>(0);

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="max-w-screen-lg mx-auto text-center">
                    <Card style={{backgroundColor: '#83F0AF', border: '3px solid #000000'}}
                          className="max-100%  ml-2 mr-2 ">
                        <CardHeader>
                            <CardContent className="text-black">
                                <p className="font-bold text-lg">
                                    Invest in the ICO today and secure your $CRET tokens at exclusive early-bird rates
                                </p>
                                <br/>
                                <p>
                                    Embrace the opportunity to shape the future of crowdfunding, enjoying unparalleled
                                    benefits and rewards, and be part of a community that is committed dedicated to the
                                    demoratization of investment.
                                </p>
                                <br/>
                                <p className="font-bold text-lg">
                                    CRET ICO - BETA STAGE
                                </p>

                                <p className="mt-3 font-bold text-md">
                                    <div className="font-mono whitespace-nowrap">
                                        {days}d : {hours}h : {minutes}m : {seconds}s
                                    </div>
                                </p>

                                <div
                                    className="mt-3 text-sm flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4">
                                    <div className="mb-3 sm:mb-0">Tokens
                                        Sold: <b>{icoProgressDataSet.TokensSoldAmount ? icoProgressDataSet.TokensSoldAmount.toLocaleString() : 0}</b>
                                    </div>
                                    <div>Tokens
                                        Available: <b>{icoProgressDataSet.TokenIcoPhaseTotalAmount ? icoProgressDataSet.TokenIcoPhaseTotalAmount.toLocaleString() : 0}</b>
                                    </div>
                                </div>

                                <div className="pl-5 mt-10 flex items-center justify-center">
                                    <div className="justify-center sm:justify-start ml-1.5 mr-8">
                                        <Image
                                            src="/images/brand/svg/cret-ico-logo-white-block.svg"
                                            alt="CRET ICO"
                                            width={56.25}
                                            height={11.5625}
                                            priority
                                        />
                                    </div>

                                </div>

                                <div className="mt-4 font-bold text-sm flex items-center justify-center">
                                    1 CRET = USD 0.017
                                </div>

                                <div className="pl-6 mt-4 flex items-center justify-center">
                                    <div className="justify-center sm:justify-start ml-1.5 mr-8">
                                        <Image
                                            src="/images/chains/ethereum-eth-logo-full-horizontal-black.svg"
                                            alt="Ethereum"
                                            width={112.5}
                                            height={23.125}
                                            priority
                                        />
                                    </div>

                                    <div className="justify-center sm:justify-start ml-1.5 mr-8">
                                        <Image
                                            src="/images/chains/arbitrum-arb-logo-full.svg"
                                            alt="Arbitrum"
                                            width={112.5}
                                            height={23.125}
                                            priority
                                        />
                                    </div>
                                </div>

                                <p className="mt-3 text-xs flex items-center justify-center">
                                    You can purchase using&nbsp;<b>Ethereum</b>&nbsp;or&nbsp;
                                    <b>Arbitrum</b>&nbsp;networks
                                </p>

                            </CardContent>
                        </CardHeader>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Page;
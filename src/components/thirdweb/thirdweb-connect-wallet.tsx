'use client'

import React, { useRef, useState, useEffect } from "react";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Image from "next/image";
import { NavBarIconWallet } from "@/assets/image";
import { isIOS } from "@/lib/utils";

export function ThirdWebConnectWallet({type}: {type: string}) {

    const divRef = useRef(null)    

    const handleClick = () => {
        const div = divRef.current! as HTMLElement
        const buttonElement = div.querySelector('button');    
        if (buttonElement) {
            buttonElement.click();
        }
    }    

    const [connectButtonTitle, setConnectButtonTitle] = useState("Connect Wallet");

    useEffect(() => {
        if(isIOS()){
            setConnectButtonTitle("Connect Other Wallet");
        }
      }, []);

    return (
        <>
            <style>
                {`
                    .connect-container svg circle {
                        stroke: white;
                    }
                `}
            </style>
            {
                type === '1' ?
                <div className="flex justify-between items-center gap-4 border-[3px] border-white rounded-2xl py-3 px-4 w-64 cursor-pointer" onClick={handleClick} ref={divRef}>                    
                    <ConnectWallet
                        className="connect-container !text-white !bg-transparent !contents"
                        theme={darkTheme({
                            colors: {
                                accentText: "#6ABD8B",
                                accentButtonBg: "#6ABD8B",
                            },
                        })}
                        modalSize="wide"
                        showThirdwebBranding={false}
                        hideSwitchToPersonalWallet={false}
                        hideTestnetFaucet={true}
                        switchToActiveChain={true}
                        btnTitle="Connect Wallet"
                        modalTitleIconUrl={"../images/brand/svg/creator_logo_bug_white_green_accent.svg"}
                        modalTitle="Connect"
                        termsOfServiceUrl="https://creat-or.io"
                        privacyPolicyUrl="https://creat-or.io"
                        welcomeScreen={{
                            title: "Creat'or",
                            subtitle: "Crowdfunding on the Blockchain",
                            img: {
                                src: "../images/brand/svg/creator_logo_white_green_accent_white_text_full.svg",
                                width: 300,
                                height: 200,
                            },
                        }}
                    />
                    <Image src={NavBarIconWallet} alt="wallet"/>
                </div>
                : 
                <div>
                    <ConnectWallet
                        style={{border: "2px solid #52F2A8"}}
                        className="!w-full !h-[60px] connect-container !flex !items-center !justify-center !text-sm sm:!text-base !transition-colors !duration-300 !ease-in-out !bg-[#174034] !text-white hover:!text-[#174034] hover:!bg-[#52F2A8] !rounded-sm !uppercase"
                        theme={darkTheme({
                            colors: {
                                accentText: "#6ABD8B",
                                accentButtonBg: "#6ABD8B",
                            },
                        })}
                        modalSize="wide"
                        showThirdwebBranding={false}
                        hideSwitchToPersonalWallet={false}
                        hideTestnetFaucet={true}
                        switchToActiveChain={true}
                        btnTitle={connectButtonTitle}
                        modalTitleIconUrl={"../images/brand/svg/creator_logo_bug_white_green_accent.svg"}
                        modalTitle="Connect"
                        termsOfServiceUrl="https://creat-or.io"
                        privacyPolicyUrl="https://creat-or.io"
                        welcomeScreen={{
                            title: "Creat'or",
                            subtitle: "Crowdfunding on the Blockchain",
                            img: {
                                src: "../images/brand/svg/creator_logo_white_green_accent_white_text_full.svg",
                                width: 300,
                                height: 200,
                            },
                        }}
                    />
                </div>                
            }
        </>        
    )
}

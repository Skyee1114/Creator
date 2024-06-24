"use client";

import { useState,useEffect } from "react";
import {
    ThirdwebProvider,
    metamaskWallet,
    phantomWallet,    
    coinbaseWallet,
    walletConnect,
    trustWallet,
    rainbowWallet,
    zerionWallet,
  } from "@thirdweb-dev/react";
  import {
    Arbitrum,
    Ethereum
} from "@thirdweb-dev/chains";
import { isIOS } from "@/lib/utils";

export function ThirdwebCustomeProvider({
    children,
  }: {
    children: React.ReactNode
  }){

    const [isIOSDevice, setIsIOSDevice] = useState(false);

    useEffect(() => {
      setIsIOSDevice(isIOS());
    }, []);

    return(
      <ThirdwebProvider      
        supportedWallets={isIOSDevice ? [
          phantomWallet(),
          coinbaseWallet(),
          walletConnect(),
          trustWallet(),
          rainbowWallet(),
          zerionWallet()
        ] : [
          metamaskWallet(),
          phantomWallet(),
          coinbaseWallet(),
          walletConnect(),
          trustWallet(),
          rainbowWallet(),
          zerionWallet()
        ]}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}            
        // activeChain={activeChain}
        autoConnect={true}
        supportedChains={[ Arbitrum, Ethereum ]}
        dAppMeta={{
            name: "Creat'or | SaaS",
            description: "Creat'or | SaaS",
            logoUrl: "https://creatorsaas.blob.core.windows.net/c-saas/images/creator-logo-bug.png",
            url: "https://creat-or.io",
            isDarkMode: true,
        }}
      >
        {children}
    </ThirdwebProvider>
    )
  } 

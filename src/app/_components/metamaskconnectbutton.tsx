import { useState, useEffect } from "react";
import { metamaskWallet, useConnect, useDisconnect, useAddress, useConnectionStatus } from "@thirdweb-dev/react";
import { LoadingSpinner } from "./loadingspinner";

export function MetamaskConnectButton() {
  
    const metamaskConfig = metamaskWallet();
    const connect = useConnect();
    const disconnect = useDisconnect();
    const address = useAddress();
    const connectionStatus = useConnectionStatus();
    
    const connectMetaMask = async () => {        
        window.location.href = 'dapp://creat-or.io';            
    };

    return (
        <>
            {(connectionStatus === "connected") && (
                <button 
                    className="h-[60px] text-sm sm:text-base border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] rounded-sm uppercase"
                    onClick={disconnect}
                > 
                    Disconnect 
                </button>
            )}
            {(connectionStatus === "unknown") && (
                <button
                    className="h-[60px] flex justify-center items-center text-sm sm:text-base border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] rounded-sm uppercase"
                >
                    <LoadingSpinner />                
                </button>
            )}     
            {(connectionStatus === "disconnected") && (
                <button
                    className="h-[60px] text-sm sm:text-base border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] rounded-sm uppercase"
                    onClick={
                        connectMetaMask
                    }
                >
                    Connect MetaMask Wallet                
                </button>
            )}            
        </>
    );
}

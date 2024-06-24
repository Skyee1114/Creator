"use client"
import { useState } from 'react';
import { useSwitchChain } from '@thirdweb-dev/react';
import { Arbitrum, Ethereum } from "@thirdweb-dev/chains";
import Image, {StaticImageData} from 'next/image';
import { EthTab } from './ethtab';
import { ArbTab } from './arbtab';
import { UsdtErc20Tab } from './usdterc20tab';
import { UsdtTrc20Tab } from './usdttrc20tab';
import { CardTab } from './cardtab';
import { CardModal } from './cardmodal';
import { EthereumLogo, ArbitrumLogo, USDTERC20Logo, USDTTRC20Logo, Card } from '@/assets/image';

interface IProps {
    onPaymentChange: (newPayment: string) => void,
    eth: string,
    usd: string,
    wallet: boolean
}

export function PaymentOption({onPaymentChange, eth, usd, wallet }: IProps) {

    const switchChain = useSwitchChain();

    const [selectedTabTitle, setSelectedTabTitle] = useState<string>('ETH');
    const [selectedTabIcon, setSelectedTabIcon] = useState<StaticImageData>(EthereumLogo);
    const [clickedTab, setClickedTab] = useState<boolean>(false);

    const handleTabSelect = (icon: StaticImageData, title: string) => {
        setSelectedTabIcon(icon);
        setSelectedTabTitle(title);  
        onPaymentChange(title);
        if(wallet && title === 'ETH') switchChain(Ethereum.chainId);
        if(wallet && title === 'ARB') switchChain(Arbitrum.chainId);            
        setClickedTab(!clickedTab);
    };

    const handleTabClick = () => {
        setClickedTab(!clickedTab);
    };

    const tabs = [
        { id: 1, title: 'ETH', option: 'Ethereum (ERC20)', icon: EthereumLogo, content: <EthTab eth={eth}/> },
        { id: 2, title: 'ARB', option: 'Ethereum (ARB20)', icon: ArbitrumLogo, content: <ArbTab eth={eth}/> },
        { id: 3, title: 'USDT-ERC20', option: 'Tether (ERC20)', icon: USDTERC20Logo, content: <UsdtErc20Tab usd={usd}/> },
        { id: 4, title: 'USDT-TRC20', option: 'Tether (TRC20)', icon: USDTTRC20Logo, content: <UsdtTrc20Tab usd={usd}/> },
        { id: 5, title: 'CARD', option: 'Card (MetaMask)', icon: Card, content: <CardTab usd={usd}/> },
    ];

    return (      
        <div className="flex flex-col items-start ">
            <div className="w-full flex justify-between">                
                <div className="flex items-center justify-center gap-2 w-full py-2 transition duration-300 ease-in-out border-l-2 border-t-2 border-b-2 border-[#52F2A8] rounded-tl-sm bg-[#174034] text-white">
                    <Image src={selectedTabIcon} alt="" className="w-4 sm:w-6"/>
                    <p className='text-sm sm:text-base'>{selectedTabTitle}</p>
                </div>
                <div className='w-full relative'>
                    <div 
                        className="h-full min-w-[170px] w-full xl:w-[240px] px-2 sm:px-4 lg:px-8 xl:px-4 flex justify-between items-center transition-colors duration-300 ease-in-out bg-[#174034] hover:bg-[#52F2A8] text-white hover:text-[#174034] border-2 border-[#52F2A8] rounded-tr-sm cursor-pointer"
                        onClick={handleTabClick}
                    >
                        <p className='text-sm sm:text-base hidden xs:block'>Other Payment Options</p>
                        <p className='text-sm sm:text-base block xs:hidden'>Other Payments</p>
                        <svg
                            className="w-3 sm:w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                            className="stroke-current"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="m1 1 4 4 4-4"
                            />
                        </svg>                     
                    </div>
                    <div className={`min-w-[170px] w-full xl:w-[240px] absolute ${clickedTab ? "block" : "hidden"}`}>
                        {tabs.map(tab => (
                            <div 
                                key={tab.id} 
                                className={`${tab.id === 1 ? "" : "border-t border-[#212222]"} transition-colors duration-300 ease-in-out text-white hover:text-[#52f2a8] flex gap-2 xs:gap-4 px-2 sm:px-4 lg:px-8 xl:px-4 py-2 bg-[#313232] cursor-pointer`}
                                onClick={() => handleTabSelect(tab.icon, tab.title)}
                            >
                                <Image src={tab.icon} className='w-4 sm:w-6' alt=''/>
                                <p className='text-sm sm:text-base'>
                                    {tab.option}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>                
            </div>
            <div className="w-full flex">
                {tabs.map((tab) => (
                <div key={tab.id} className={`w-full transition duration-300 ease-in-out ${selectedTabTitle === tab.title ? 'block' : 'hidden'}`}>
                    {tab.content}
                </div>
                ))}
            </div>
            {selectedTabTitle === 'CARD' && (
                <CardModal onClose={() => {
                    setSelectedTabTitle('ETH');
                    setSelectedTabIcon(EthereumLogo);
                }} />
            )}            
        </div>
    );
}

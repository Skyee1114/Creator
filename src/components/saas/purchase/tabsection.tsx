"use client"
import { useState } from 'react';
import Image from 'next/image';
import { EthTab } from './ethtab';
import { ArbTab } from './arbtab';
import { CardTab } from './cardtab';
import ETHIcon from '../../../../public/images/chains/ethereum-eth-logo1.svg'
import ARBIcon from '../../../../public/images/chains/arbitrum-arb-logo.svg';
import CARDIcon from '../../../../public/images/card.svg';

export function TabSection() {
  
    const [selectedTab, setSelectedTab] = useState(1);

    const tabs = [
      { id: 1, title: 'ETH', icon: ETHIcon, content: <EthTab /> },
      { id: 2, title: 'ARB', icon: ARBIcon, content: <ArbTab /> },
      { id: 3, title: 'CARD', icon: CARDIcon, content: <CardTab /> },
    ];
  
    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };

    return (      
        <div className="flex flex-col items-start ">
            <div className="w-full flex justify-between">
                {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`flex items-center justify-center gap-2 cursor-pointer w-full py-3 transition duration-300 ease-in-out font-medium text-lg border border-[#52F2A8] ${selectedTab === tab.id ? 'bg-[#52F2A8] text-[#174034]' : 'bg-[#174034] text-white'}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    <Image src={tab.icon} alt="" className="w-6"/>
                    {tab.title}
                </div>
                ))}
            </div>
            <div className="w-full flex">
                {tabs.map((tab) => (
                <div key={tab.id} className={`w-full transition duration-300 ease-in-out ${selectedTab === tab.id ? 'block' : 'hidden'}`}>
                    {tab.content}
                </div>
                ))}
            </div>
        </div>
    );
}

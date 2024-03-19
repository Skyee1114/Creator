"use client"
import { useState } from 'react';
import { StoryTab } from './storytab';
import { UpdatesTab } from './updatestab';
import { BackerlistTab } from './backerlisttab';
import { PitchDeckTab } from './pitchdecktab';

export function TabSection() {
  
    const [selectedTab, setSelectedTab] = useState(1);

    const tabs = [
      { id: 1, title: 'Story', content: <StoryTab /> },
      { id: 2, title: 'Updates', content: <UpdatesTab /> },
      { id: 3, title: 'Backer List', content: <BackerlistTab /> },
      { id: 4, title: 'Pitch Deck', content: <PitchDeckTab /> },
    ];
  
    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };

    return (      
        <div className='bg-white'>
            <div className="flex flex-col items-start m-auto container max-w-[1300px]">
                <div className="flex space-x-4 -mt-8">
                    {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`cursor-pointer px-16 py-5 transition duration-300 ease-in-out font-medium text-xl ${selectedTab === tab.id ? 'bg-white text-[#1b1f2e]' : 'bg-[#52F2A8] text-white'}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.title}
                    </div>
                    ))}
                </div>
                <div className="flex mt-8">
                    {tabs.map((tab) => (
                    <div key={tab.id} className={`transition duration-300 ease-in-out ${selectedTab === tab.id ? 'block' : 'hidden'}`}>
                        {tab.content}
                    </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}

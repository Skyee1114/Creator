import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JamesGaller, TerryMarkham, DanielMillyard, Share } from '../../assets/img';

const TeamMember = ({name, role}) => {

    const memberImages = {
        'James Galler': JamesGaller,
        'Terry Markham': TerryMarkham,
        'Daniel Millyard': DanielMillyard,
    };

    return (        
        <div className={`flex flex-col text-xl relative`}>
            <div className="relative">
                <div
                    className={`absolute inset-0 bg-[#52F2A8] transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-20`}
                ></div>
                <img src={memberImages[name]} alt="name" /> 
                <div className='flex justify-end left-0 bottom-0 absolute'>
                    <Link to="https://whitepaper.creat-or.io/meet-the-team"  target="_blank">
                        <div className='p-4 transition-colors duration-300 ease-in-out bg-[#674df0] hover:bg-[#52F2A8]'>
                            <img src={Share} alt="love" className='w-5 h-5 z-10' />
                        </div>      
                    </Link>                                     
                </div>
            </div>
            <div className="bg-[#f7f7f9] py-5 border-l border-r border-b border-inherit">
                <div className='flex flex-col items-center gap-2'>
                    <p className='font-bold text-2xl text-[#1b1f2e]'>{name}</p>
                    <p className='text-xl text-[#838694]'>{role}</p>
                </div>
            </div>                 
        </div>
    );
};


TeamMember.displayName = 'TeamMember'

export default TeamMember

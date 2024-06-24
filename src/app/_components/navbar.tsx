'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { ThirdWebConnectWallet } from '@/components/thirdweb/thirdweb-connect-wallet';
import { LuMenuSquare } from "react-icons/lu";
import { CreatorLogoFull } from '@/assets/image';


export function NavBar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return ( 
        <nav className="sticky bg-[#174034] top-0 z-[999] shadow-md">
            <div className="flex justify-between items-center container m-auto 2xl:max-w-[1440px] px-4 py-3 lg:py-6 ">
                <Link href="/">
                    <Image src={CreatorLogoFull} alt="logo" className="w-[120px] lg:w-[220px]" draggable="false"/>
                </Link>                      
                <div className="hidden xl:block">
                    <ul className="flex items-center text-base 2xl:text-lg gap-8 2xl:gap-10">
                        <li>
                            <Link href="https://whitepaper.creat-or.io/" target="_blank">Whitepaper</Link>
                        </li>
                        <li>
                            <Link href="/#benefits">Benefits</Link>
                        </li>
                        <li>
                            <Link href="/#tokenomics">Tokenomics</Link>
                        </li>
                        <li>
                            <Link href="/#roadmap">Roadmap</Link>
                        </li>
                        <li>
                            <Link href="/#founders">Founders</Link>
                        </li>
                        <li>
                            <Link href="/#faqs">FAQs</Link>
                        </li>
                        <li>
                            <Link href="/saas/ico">Dashboard</Link>
                        </li>            
                        <li>
                            <ThirdWebConnectWallet type='1'/>
                        </li>         
                    </ul>
                </div>
                <div className="block xl:hidden">
                    <LuMenuSquare className="text-3xl lg:text-5xl cursor-pointer" onClick={toggleMobileMenu}/>
                </div>                
            </div>
            {isMobileMenuOpen && (
                <div className="bg-[#174034] w-full absolute xl:hidden border-t shadow-md">
                    <div className='flex justify-start container m-auto 2xl:max-w-[1300px] px-4 py-3'>
                        <div className='w-fit flex flex-col items-start gap-4'>
                            <Link href="https://whitepaper.creat-or.io/" target="_blank">
                                <p className=''>Whitepaper</p>
                            </Link>
                            <Link href="/#benefits">
                                <p className=''>Benefits</p>
                            </Link>
                            <Link href="/#tokenomics">
                                <p className=''>Tokenomics</p>
                            </Link>
                            <Link href="/#roadmap">
                                <p className=''>Roadmap</p>
                            </Link>
                            <Link href="/#founders">
                                <p className=''>Founders</p>
                            </Link>
                            <Link href="/#faqs">
                                <p className=''>FAQs</p>
                            </Link>
                            <Link href="/saas/dashboard">
                                <p className=''>Dashboard</p>
                            </Link>                     
                            <ThirdWebConnectWallet type='1'/>
                        </div>                        
                    </div>
                </div>
            )}
        </nav>
    );
}

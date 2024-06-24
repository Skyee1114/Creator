"use client"

import { useUserSessionStore } from "@/store/store-user-session";
// import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    ArrangeHorizontal,
    Buildings2,
    Category,
    Coffee,
    Crown,
    EthereumClassic,
    Home,
    HomeHashtag,
    I24Support,
    Judge, MedalStar,
    Notepad2,
    StatusUp, 
    Verify
} from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
// import { ClerkUser } from "@/components/clerk/clerk-user";
import { ThirdWebConnectWallet } from "@/components/thirdweb/thirdweb-connect-wallet";
import { usePathname } from "next/navigation";
import { useAddress, useChain } from "@thirdweb-dev/react";

import clsx from 'clsx';
import {getIsUserConnectedWallet} from "@/actions/actionGetIsUserConnectedWallet";
import { CreatorLogo, CreatorLogoFull } from "@/assets/image";

const adminWallets = ["0x9948DAD58034646EC7f4D73Fbc7dBfD2F0077512", "0xd2897F7145D3BDc033Bf50c19b17Fb4D79F571f3", "0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293", "0x805B8e3C5Db9049Df85ED1D2fD70Dc71a94EF5a2", "0x140c2a0a3adc246f9fa42f8eccd144711b24ade9"];

export function NavBarNew() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [products, setProducts] = useState([
        { name: 'Home', href: '/', icon: Home, current: false },
        { name: 'Dashboard', href: '/saas/dashboard', icon: Category },
        { name: 'Token Purchase / Wallet', href: '/saas/ico', icon: Notepad2 },
    ]);

    const pathname = usePathname();

    const address = useAddress();
    const evmChain = useChain();

    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    // const thirdweb_connected_wallet = "0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293";

    useEffect(() => {
        if (thirdweb_connected_wallet && adminWallets.includes(thirdweb_connected_wallet)) {
            setProducts([
                { name: 'Home', href: '/', icon: Home, current: false },
                { name: 'Dashboard', href: '/saas/dashboard', icon: Category },
                { name: 'Token Purchase / Wallet', href: '/saas/ico', icon: Notepad2 },
                { name: 'Admin', href: '/saas/admin', icon: StatusUp }        
            ]);
        }
    }, [thirdweb_connected_wallet])
  
    const { setThirdwebConnectedWallet, setThirdwebConnectedChain } = useUserSessionStore();

    useEffect(() => {
        if(setThirdwebConnectedWallet) {
            setThirdwebConnectedWallet(address || null);
        }
    }, [address, setThirdwebConnectedWallet]);

    useEffect(() => {
        if(setThirdwebConnectedChain) {
            setThirdwebConnectedChain(evmChain?.chainId || null);
        }
    }, [evmChain, setThirdwebConnectedChain]);

   
    return (
        <header>

            <nav className="flex items-center justify-between pt-2 pb-2 pl-2 pr-4 lg:px-8"
                 aria-label="Global">

                <div className="flex">
                    <Link href="/" className="md:m-2 lg:-m-4 md:p-0 sm:p-1.5">
                        <span className="sr-only">Creat&apos;or | SaaS</span>
                        <Image
                            className="h-8 pointer-events-none"
                            src={CreatorLogoFull}
                            alt="Creat'or | SaaS"
                            width={100}
                            height={40}
                        />
                    </Link>
                </div>

                <div className="hidden md:flex md:justify-end md:items-center">                    
                    <ThirdWebConnectWallet type="1" />                   
                </div>

                <div className="flex xl:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="ml-6 h-6 w-6 lg:-mr-5" aria-hidden="true"/>
                    </button>
                </div>
            </nav>

            <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10"/>
                <Dialog.Panel
                    className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="p-6" onClick={() => setMobileMenuOpen(false)}>
                        <div className="flex items-center justify-between">
                            <Link href="/saas/dashboard" className="-m-1.5 p-1.5">
                                <span className="sr-only">Creator | SaaS</span>
                                <Image
                                    className="h-8 -ml-1.5 pointer-events-none"
                                    src={CreatorLogo}
                                    alt="Collateral Network"
                                    width={50}
                                    height={30}
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="-mt-2 h-6 w-6 text-gray-100" aria-hidden="true"/>
                            </button>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {products.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={clsx(
                                                'group -mx-3 flex items-center gap-x-6 rounded-lg pl-2 text-base font-semibold leading-7',
                                                {
                                                    'bg-gray-800 text-white': pathname === item.href,
                                                    'text-gray-400 hover:text-white hover:bg-gray-800': pathname !== item.href,
                                                }
                                            )}
                                        >
                                            <div
                                                className={clsx(
                                                    'flex h-11 w-11 flex-none items-center justify-center rounded-lg',
                                                    {
                                                        'bg-gray-800 text-white': pathname === item.href,
                                                        'text-gray-400 hover:text-white hover:bg-gray-800': pathname !== item.href,
                                                    }
                                                )}>
                                                <item.icon
                                                    className={clsx(
                                                        'h-6 w-6 text ',
                                                        {
                                                            'bg-gray-800 text-white': pathname === item.href,
                                                            'text-gray-400 hover:text-white hover:bg-gray-800': pathname !== item.href,
                                                        }
                                                    )}
                                                    aria-hidden="true"/>
                                            </div>
                                            {item.name}
                                        </Link>
                                    ))}

                                    <div className="pt-3 pb-2" onClick={(event) => event.stopPropagation()}>
                                        <ThirdWebConnectWallet type="1"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

"use client"

import React, {useState, useEffect} from 'react';
import {
    ArrangeHorizontal,
    Buildings2,
    Category,
    Coffee,
    Crown,
    Home,
    HomeHashtag,
    I24Support,
    Judge, 
    MedalStar,
    Notepad2,
    StatusUp,
    Verify
} from "iconsax-react";
import Link from "next/link";
import { usePathname, notFound } from 'next/navigation';
import { useUserSessionStore } from "@/store/store-user-session";
import clsx from 'clsx';
import {Separator} from "@/components/ui/separator";

const smartwallets = [
    { id: 1, name: 'CN-Main', href: '/saas/smart-wallets', initial: '1', current: false },
    { id: 2, name: 'CN-Dev', href: '/saas/smart-wallets', initial: '2', current: false },
]

const adminWallets = ["0x9948DAD58034646EC7f4D73Fbc7dBfD2F0077512", "0xd2897F7145D3BDc033Bf50c19b17Fb4D79F571f3", "0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293", "0x805B8e3C5Db9049Df85ED1D2fD70Dc71a94EF5a2", "0x140c2a0a3adc246f9fa42f8eccd144711b24ade9"];

export  function NavSideSaaS() {
    const pathname = usePathname();    

    const [navigation, setNavigations] = useState([
        { name: 'Home', href: '/', icon: Home, current: false },
        { name: 'Dashboard', href: '/saas/dashboard', icon: Category },
        { name: 'Token Purchase / Wallet', href: '/saas/ico', icon: Notepad2 },      
    ]);

    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    // const thirdweb_connected_wallet = "0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293";

    useEffect(() => {
        if (thirdweb_connected_wallet && adminWallets.includes(thirdweb_connected_wallet)) {
            setNavigations([
                { name: 'Home', href: '/', icon: Home, current: false },
                { name: 'Dashboard', href: '/saas/dashboard', icon: Category },
                { name: 'Token Purchase / Wallet', href: '/saas/ico', icon: Notepad2 },
                { name: 'Admin', href: '/saas/admin', icon: StatusUp }        
            ]);
        }
    }, [thirdweb_connected_wallet])
    
    return (
        <>
            <div>
                <div className="hidden xl:flex xl:w-64 h-full xl:flex-col ">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6">

                        <nav className="flex flex-1 flex-col h-full">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7 h-full">

                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (                                            
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className={clsx(
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                        {
                                                            'bg-gray-800 text-white': pathname === item.href,
                                                            'text-gray-400 hover:text-white hover:bg-gray-800': pathname !== item.href,
                                                        }
                                                    )}
                                                >
                                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true"/>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>          
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

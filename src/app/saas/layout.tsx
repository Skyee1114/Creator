"use client"

import { NavBarNew } from "@/components/navbars/navbar-new";
import { NavSideSaaS} from "@/components/navside/navside-saas";
import { usePathname, useRouter, notFound } from 'next/navigation';
import { useUserSessionStore } from "@/store/store-user-session";
import { useEffect } from "react";
// import {auth, currentUser} from "@clerk/nextjs";

const adminWallets = ["0x9948DAD58034646EC7f4D73Fbc7dBfD2F0077512", "0xd2897F7145D3BDc033Bf50c19b17Fb4D79F571f3", "0x0ECEE76BF2e99C18f2d77aA35a93fC3235aac293", "0x805B8e3C5Db9049Df85ED1D2fD70Dc71a94EF5a2", "0x140c2a0a3adc246f9fa42f8eccd144711b24ade9"];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const thirdweb_connected_wallet = useUserSessionStore((state) => state.thirdweb_connected_wallet);
    const pathname = usePathname();
    const router = useRouter();

    console.log("pathname: ", pathname, thirdweb_connected_wallet);

    useEffect(() => {
        if (pathname === "/saas/admin" && thirdweb_connected_wallet && !adminWallets.includes(thirdweb_connected_wallet)) {
            router.push('/');
        }
    }, [thirdweb_connected_wallet])   

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="mx-auto w-full sticky top-0 z-1 bg-black">
                    <NavBarNew/>
                </div>

                <div className="flex flex-row flex-grow overflow-hidden ">
                    <div className="sticky top-0 bg-black">
                        <NavSideSaaS/>
                    </div>
                    <section className="flex-1 overflow-auto bg-black">
                        {children}
                    </section>
                </div>
            </div>
        </>
    );
}

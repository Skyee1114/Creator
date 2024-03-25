import Link from "next/link";
import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";
import { Logo, LogoIcon } from '@/assets/img';

export function StickyNavbar() {
  
    const navList = (
        <ul className="flex gap-2 text-sm text-[#174034] font-semibold">
            <li>
                <Link href="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Home</Link>
            </li>
            <li>
                <Link href="/marketsectors" className="border border-[#52F2A8] rounded-full px-6 py-1">Market Sectors</Link>
            </li>
            <li>
                <Link href="/preregister" className="border border-[#52F2A8] rounded-full px-6 py-1">Pre Register</Link>
            </li>
            <li>
                <Link href="/investoradvantage" className="border border-[#52F2A8] rounded-full px-6 py-1">Investor Advantages</Link>
            </li>
            <li>
                <Link href="/businessadvantage" className="border border-[#52F2A8] rounded-full px-6 py-1">Advantages for Business</Link>
            </li>      
            <li>
                <Link href="/news" className="border border-[#52F2A8] rounded-full px-6 py-1">News</Link>
            </li> 
            <li>
                <Link href="/contact" className="border border-[#52F2A8] rounded-full px-6 py-1">Contact</Link>
            </li> 
        </ul>
    )
    return (        
        <nav className="sticky top-0 bg-white z-[999] shadow-md">
            <div className="flex justify-between items-center container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-2 md:py-3">
                <Link href="/">
                    <Image src={Logo} alt="logo" className="w-[252px] hidden xl:block" />
                    <Image src={LogoIcon} alt="" className="w-[40px] md:w-[60px] block xl:hidden"/>
                </Link>                      
                <div className="hidden lg:block">{navList}</div>
                <div className="block lg:hidden">
                    <RiMenuLine className="text-2xl md:text-4xl"/>
                </div>
            </div>
        </nav>
    )
}

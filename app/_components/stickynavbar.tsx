import Link from "next/link";
import Image from "next/image";
import { Logo } from '@/assets/img';

export function StickyNavbar() {
  
    const navList = (
        <ul className="flex gap-4 font-medium text-[#174034]">
            <li>
                <Link href="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Home</Link>
            </li>
            <li>
                <Link href="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Explore</Link>
            </li>
            <li>
                <Link href="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Pages</Link>
            </li>
            <li>
                <Link href="/investoradvantage" className="border border-[#52F2A8] rounded-full px-6 py-1">Investor Advantages</Link>
            </li>
            <li>
                <Link href="/businessadvantage" className="border border-[#52F2A8] rounded-full px-6 py-1">Advantages for Business</Link>
            </li>      
            <li>
                <Link href="/" className="border border-[#52F2A8] rounded-full px-6 py-1">News</Link>
            </li> 
            <li>
                <Link href="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Contact</Link>
            </li> 
        </ul>
    )
    return (        
        <nav className="sticky top-0 px-6 sm:px-0 bg-white z-[999] shadow-md">
            <div className="flex justify-between m-auto items-center container max-w-[1300px] py-3">
                <Link href="/">
                    <Image src={Logo} alt="logo" className="w-[252px]" />
                </Link>                      
                <div className="hidden lg:block">{navList}</div>
            </div>
        </nav>
    )
}

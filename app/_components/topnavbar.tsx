import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

export function TopNavbar() {
  
    const navList1 = (
        <ul className="text-white flex">
            <li>
                <Link href="/" className='flex justify-between gap-4 items-center'>
                    <IoIosMail className='text-[#52F2A8] text-2xl' />
                    <p>info@creat-or.io</p>    
                </Link>
            </li>
        </ul>
    )

    const navList2 = (
        <ul className="text-white flex gap-3 xs:gap-4 sm:gap-10">
            <li>
                <Link href="/preregister" className='flex justify-between gap-1 xs:gap-2 sm:gap-4 items-center'>
                    <FaRegUserCircle className='text-[#52F2A8] text-2xl'/>
                    <p>Pre-register</p>
                </Link>
            </li>
            <li>
                <Link href="https://www.creat-or.io/"  className='flex justify-between gap-1 xs:gap-2 sm:gap-4 items-center'>
                    <FiPlus className='text-[#52F2A8] text-2xl'/>
                    <p>Join Our ICO</p>
                </Link>
            </li>      
            <li className="hidden sm:block">
                <IoSearchOutline className='text-[#52F2A8] text-2xl'/>
            </li>      
        </ul>
    )

    return (
        <nav className="bg-[#174034]">
            <div className="flex justify-end sm:justify-between container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-2 md:py-3">  
                <div className="hidden sm:block">{navList1}</div>
                <div className="">{navList2}</div>
            </div>
        </nav>
    )
}


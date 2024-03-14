import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const TopNavbar = () => {
  
    const navList1 = (
        <ul className="text-white flex">
            <li>
                <Link to="/" className='flex justify-between gap-4 items-center'>
                    <IoIosMail className='text-[#52F2A8] text-2xl' />
                    <p>info@creat-or.io</p>    
                </Link>
            </li>
        </ul>
    )

    const navList2 = (
        <ul className="text-white flex gap-10">
            <li>
                <Link to="/" className='flex justify-between gap-4 items-center'>
                    <FaRegUserCircle className='text-[#52F2A8] text-2xl'/>
                    <p>Sign in or Register</p>
                </Link>
            </li>
            <li>
                <Link to="/"  className='flex justify-between gap-4 items-center'>
                    <FiPlus className='text-[#52F2A8] text-2xl'/>
                    <p>Add Project</p>
                </Link>
            </li>      
            <li>
                <IoSearchOutline className='text-[#52F2A8] text-2xl'/>
            </li>      
        </ul>
    )

    return (
        <nav className="top-0 px-6 sm:px-0 bg-[#174034] z-[999]">
            <div className="flex justify-between m-auto items-center container max-w-[1300px] py-3.5">                   
                <div className="hidden lg:block">{navList1}</div>
                <div className="hidden lg:block">{navList2}</div>
            </div>
        </nav>
    )
}

TopNavbar.displayName = 'TopNavbar'

export default TopNavbar

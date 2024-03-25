import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { LogoWhite } from '@/assets/img';

export function Footer() {

    return (
        <div className="bg-[#1b1f2e]">
            <div className="bg-[url('./../assets/img/bgfooter.png')]">
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 pt-28'> 
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-12'>
                        <div className='flex flex-col justify-between gap-4'>
                            <Image src={LogoWhite} alt="" className='w-40'/>
                            <div className='flex flex-col gap-8'>
                                <p className='text-lg leading-8 text-[#8d91a2]'>If you have any questions about Creat-or please feel free to contact us.</p>
                                <div className='flex gap-3'>
                                    <Link href="https://twitter.com/Creator_CRET" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>                                        
                                            <FaTwitter />
                                        </div>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/creator-cret" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>
                                            <FaLinkedin />
                                        </div>
                                    </Link>
                                    <Link href="https://discord.gg/jdUeq3Se3k" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>
                                            <FaDiscord />
                                        </div>
                                    </Link>
                                    <Link href="https://t.me/creator_community" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>
                                            <FaTelegram />
                                        </div>
                                    </Link>                   
                                </div>
                            </div>                            
                        </div>
                        <div className='flex flex-col justify-between gap-8'>
                            <p className='font-bold text-2xl text-white'>Pages</p>
                            <div className='flex flex-col gap-2'>
                                <Link href="/marketsectors">
                                    <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Market sectors</p>
                                </Link>
                                <Link href="/preregister">
                                    <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Pre register</p>
                                </Link>
                                <Link href="/investoradvantage">
                                    <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Investor advantages</p>
                                </Link>
                                <Link href="/businessadvantage">
                                    <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Advantages for business</p>
                                </Link>
                                <Link href="/news">
                                    <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>News</p>
                                </Link>
                                <Link href="/contact">
                                    <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Contact us</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-8'>
                            <p className='font-bold text-2xl text-white'>Market Sectors</p>
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Technology</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Games</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Science</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Social Causes</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Environmental</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-8'>
                            <p className='font-bold text-2xl text-white'>Contact</p>
                            <div className='flex flex-col gap-2'>                                
                                <div className='flex items-center gap-4'>
                                    <HiOutlineMailOpen className="text-2xl text-[#52F2A8]"/>
                                    <p className='text-lg leading-8 text-[#8d91a2]'>info@creat-or.io</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IoLocationSharp className="text-4xl text-[#52F2A8]"/>
                                    <p className='text-lg leading-8 text-[#8d91a2]'>306 Victoria House, Victoria, Mahe, Seychelles</p>
                                </div>     
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full h-[68px] bg-transparent border border-[#323643] px-4 outline-none text-white"
                                        placeholder="Enter E-Mail Address"
                                    />
                                    <div className="p-5 bg-[#52F2A8] cursor-pointer absolute top-1 right-1">
                                        <IoMailSharp className="text-xl text-white"/>
                                    </div>
                                </div>
                                                                                       
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pt-32'>
                        <div className='w-full border-t border-[#323643]'></div>
                        <p className='text-lg text-center text-[#8d91a2] py-8'>Creator Network Limited. © 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

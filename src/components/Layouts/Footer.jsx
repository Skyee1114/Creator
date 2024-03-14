import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { LogoWhite } from '../../assets/img';

const Footer = () => {

    return (
        <div className="bg-[#1b1f2e]">
            <div className="bg-[url('./assets/img/bg-footer.png')]">
                <div className='m-auto container max-w-[1300px] pt-28'> 
                    <div className='grid grid-cols-4 gap-12'>
                        <div className='flex flex-col justify-between gap-4'>
                            <img src={LogoWhite} alt="" className='w-40'/>
                            <div className='flex flex-col gap-8'>
                                <p className='text-lg leading-8 text-[#8d91a2]'>If you have any questions about Creat-or please feel free to contact us.</p>
                                <div className='flex gap-3'>
                                    <Link to="https://twitter.com/Creator_CRET" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>                                        
                                            <FaTwitter />
                                        </div>
                                    </Link>
                                    <Link to="https://www.linkedin.com/company/creator-cret" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>
                                            <FaLinkedin />
                                        </div>
                                    </Link>
                                    <Link to="https://discord.gg/jdUeq3Se3k" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>
                                            <FaDiscord />
                                        </div>
                                    </Link>
                                    <Link to="https://t.me/creator_community" target="_blank">
                                        <div className='p-4 transition-colors duration-300 ease-in-out bg-white hover:bg-[#52F2A8] cursor-pointer'>
                                            <FaTelegram />
                                        </div>
                                    </Link>                   
                                </div>
                            </div>                            
                        </div>
                        <div className='flex flex-col justify-between gap-8'>
                            <p className='font-bold text-2xl text-white'>Company</p>
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>About us</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Latest events</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>How It Works</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>News & articles</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Contact us</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-8'>
                            <p className='font-bold text-2xl text-white'>Fundraising</p>
                            <div className='flex flex-col gap-2'>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Education</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Design</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Film & Video</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Technology</p>
                                <p className='text-lg leading-8 transition-colors duration-300 ease-in-out text-[#8d91a2] hover:text-white cursor-pointer'>Games</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-8'>
                            <p className='font-bold text-2xl text-white'>Contact</p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-4'>
                                    <FiPhoneCall className="text-2xl text-[#52F2A8]"/>
                                    <p className='text-lg leading-8 text-[#8d91a2]'>666 888 0000</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <HiOutlineMailOpen className="text-2xl text-[#52F2A8]"/>
                                    <p className='text-lg leading-8 text-[#8d91a2]'>info@creat-or.io</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IoLocationSharp className="text-4xl text-[#52F2A8]"/>
                                    <p className='text-lg leading-8 text-[#8d91a2]'>306 Victoria House, Victoria, Mahe, Seychelles</p>
                                </div>     
                                <input
                                    type="email"
                                    className="w-full h-[70px] bg-transparent border border-[#323643] px-4 outline-none text-white"
                                    placeholder="Enter E-Mail Address"
                                />                                                       
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

Footer.displayName = 'Footer'

export default Footer

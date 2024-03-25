import Link from "next/link";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { LogoIcon } from "@/assets/img";
import { TabSection } from "./_components/tabsection";
import { SimilarProjectItem } from "./_components/similarprojectitem";
import { Slider1 } from "../_components/slider1";
import { IntroHeader } from "../_components/introheader";

export default function FeatureProject() {
  return (
    <div>
        <IntroHeader title="Revolutionizing Equity Crowdfunding in the Crypto Space" content=""/>

        <div className="bg-[#f7f7f9]">
            <div className="container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32 flex gap-16">
                <div className="flex flex-col gap-8">
                    <div className="bg-white">
                        <Image src={LogoIcon} alt="" className="w-[660px] h-[570px]"/>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="font-bold text-4xl text-[#174034]">Short Story</p>
                        <p className="text-lg text-[#838694]">Welcome to the Creator Platform, where the dynamic worlds of cryptocurrency investment and business fundraising converge. We are not just another crowdfunding platform; we are a meeting ground, connecting visionary businesses with eager investors from the global crypto community.</p>
                        <div className="flex items-center gap-4">
                            <p className="text-lg text-[#838694]">Share:</p>
                            <div className="flex gap-2">
                                <Link href="https://twitter.com/Creator_CRET" target="_blank">
                                    <div className="bg-[#00acee] p-1.5">
                                        <FaTwitter className="text-white"/>
                                    </div>
                                </Link>
                                <Link href="https://www.linkedin.com/company/creator-cret" target="_blank">
                                    <div className="bg-[#0077b5] p-1.5">
                                        <FaLinkedinIn className="text-white"/>
                                    </div>
                                </Link>
                                <Link href="https://discord.gg/jdUeq3Se3k" target="_blank">
                                    <div className="bg-[#7289da] p-1.5">
                                        <FaDiscord className="text-white"/>
                                    </div>
                                </Link>
                                <Link href="https://t.me/creator_community" target="_blank">
                                    <div className="bg-[#0088cc] p-1.5">
                                        <FaTelegram className="text-white"/>
                                    </div>  
                                </Link>                   
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                        <button className="bg-[#52F2A8] px-4 py-1.5 text-xs text-white uppercase">Techonology</button>
                        <div className="flex items-center">
                            <IoLocationSharp className="text-[#737373]"/>
                            <p className="text-[#737373]">306 Victoria House, Victoria, Mahe, Seychelles</p>
                        </div>                        
                    </div>
                    <p className="font-bold text-4xl text-[#174034]">Creat’or Equity Crowdfunding</p>
                    <div className="flex justify-between gap-8">
                        <div className="bg-white flex flex-col items-center gap-2 py-12 w-[160px]">
                            <p className="font-medium text-2xl text-[#674df0]">$5,000</p>
                            <p className="font-medium text-base text-[#838694]">Pledged</p>
                        </div>
                        <div className="bg-white flex flex-col items-center gap-2 py-12 w-[160px]">
                            <p className="font-medium text-2xl text-[#674df0]">3</p>
                            <p className="font-medium text-base text-[#838694]">Backers</p>
                        </div>
                        <div className="bg-white flex flex-col items-center gap-2 py-12 w-[160px]">
                            <p className="font-medium text-2xl text-[#674df0]">60</p>
                            <p className="font-medium text-base text-[#838694]">Days Left</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between pb-1'>
                            <p className="text-[#838694] font-medium text-base">Raised: $4,134</p>
                            <p className="text-[#838694] font-medium text-base">18.00%</p>
                        </div>
                        <div className="w-full bg-[#838694]">
                            <div className='w-1/4 h-2.5 bg-[#52F2A8]'></div>
                        </div>
                        <p className='font-bold text-base text-[#674df0] pt-2'><span className='text-[#174034]'>Goal:</span> $350,000</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <p className="text-lg text-[#838694]">$</p>
                            <input type="number" min="0" className="py-3 px-2 border border-solid border-gray-300  outline-none " style={{width: "80px"}}/>                            
                        </div>
                        <div className="h-full relative">
                            <button className="transition-colors duration-300 bg-[#674df0] hover:bg-[#52F2A8] font-medium text-sm text-white px-6 h-full uppercase">invest now</button>
                            <div className="absolute bg-[#1b1f2e] w-3 h-3 top-0 right-0"></div>
                        </div>
                    </div>
                    <Link href="https://www.creat-or.io/" target="_blank" className="flex items-center gap-4 w-fit">           
                        <div className="bg-white rounded-full p-1">
                            <Image src={LogoIcon} alt="" className="w-12"/>
                        </div>        
                        <p className="font-medium text-xl text-[#1b1f2e] border-b border-[#1b1f2e]">Visit website</p>
                    </Link>
                </div>
            </div>            
        </div>

        <div className="bg-white">
            <div className="container m-auto 2xl:max-w-[1300px] px-4 xs:px-0">
                <TabSection />
            </div>
        </div>       

        <div className='bg-[#f7f7f9] py-32'>
            <div className='flex flex-col container m-auto 2xl:max-w-[1300px] px-4 xs:px-0'>
                <p className='font-bold text-6xl text-[#174034] text-center pb-20'>Similar Projects</p>
                <Slider1
                    projectList={[
                        { project: <SimilarProjectItem featureTitle="Technology" /> },
                        { project: <SimilarProjectItem featureTitle="Film & Video" /> },
                        { project: <SimilarProjectItem featureTitle="Fashion" /> },
                        { project: <SimilarProjectItem featureTitle="Design"/> },
                        { project: <SimilarProjectItem featureTitle="Game"/> },
                        { project: <SimilarProjectItem featureTitle="Human"/> },
                    ]}
                />
            </div>    
        </div>
    </div>
  );
}

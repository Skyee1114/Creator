import Image from 'next/image';
import { BusinessAdvantageList } from "@/assets/img";

export default function BusinessAdvantage() {
    return(
        <div className='bg-white'>
            <div className="container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-24">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p className="font-bold text-4xl text-[#174034]">Advantages for Business:</p>
                    <p className="font-bold text-6xl text-[#174034] text-center">Empowering Your Business Journey on a Global Platform</p>
                    <p className="w-3/4 py-8">
                        CREAT’OR is more than just a crowdfunding platform; it’s a dynamic
                        ecosystem designed to support and elevate businesses through every stage of their growth. Listing on CREAT’OR
                        opens a gateway to unparalleled opportunities, connecting you with a global community of investors and
                        providing a suite of tools and services tailored to fuel your success
                    </p>
                    <Image 
                        src={BusinessAdvantageList} 
                        alt="" 
                        className="transition-all duration-1000 w-auto hover:scale-110"
                        style={{ transformOrigin: 'center' }}
                    />
                </div>                
            </div>
        </div>
       
    )
}
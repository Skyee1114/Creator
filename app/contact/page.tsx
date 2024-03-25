import Link from 'next/link';
import Image from 'next/image';
import { LogoIcon, LogoIconWhite1, LogoIconWhite2 } from '@/assets/img';
import { SendMessageButton } from './_components/sendmessagebutton';
import { IntroHeader } from '../_components/introheader';

export default function Contact() {
    return (
        <div>            
            <IntroHeader title="Connect with Creat'or" content=""/>            

            <div className='bg-white'>
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                    <div className='flex gap-8'>
                        <div className='flex flex-col w-1/3'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                                <p className='font-medium text-xl text-[#674df0]'>Get in touch</p>
                            </div>
                            <p className='font-bold text-6xl text-[#174034] pt-4'>Write Us a Message</p>
                            <p className="text-lg leading-[30px] text-[#838694] pt-16">We at Creat'or are always excited to hear from you! Whether you have feedback, ideas, or just want to say hello, your thoughts are invaluable to us. Our commitment is to create an environment where your voice is heard and appreciated. Please don't hesitate to reach out via our contact form, email, or social media channels. Let's make something amazing together. Welcome to our community, where your insights help us grow and innovate.</p>
                        </div>
                        <div className='flex flex-col items-start w-2/3 gap-8'>
                            <div className='flex gap-4 w-full'>
                                <input
                                    type="text"
                                    className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-1/2"
                                    placeholder="Your Name *"
                                />
                                <input
                                    type="email"
                                    className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-1/2"
                                    placeholder="Your Email *"
                                />
                            </div>
                            <input
                                type="text"
                                className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                placeholder="Your Subject"
                            />
                            <textarea 
                                rows={4}
                                className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                placeholder="Your message"
                            />
                            <SendMessageButton />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex h-80'>
                <div className='flex w-1/3 bg-[#674df0]'>
                    <div className='flex pt-20 gap-4 items-start px-16'>
                        <Image src={LogoIcon} alt='' className='w-24'/>
                        <div className='flex flex-col gap-8'>
                            <p className='font-bold text-4xl text-white'>About Creator</p>
                            <p className='text-xl leading-[30px] text-white'>Revolusionising Blockchain P2P Crowdfunding</p>
                        </div>
                    </div>                    
                </div>
                <div className='flex w-1/3 bg-[#174034]'>
                    <div className='flex pt-20 gap-4 items-start px-16'>
                        <Image src={LogoIconWhite2} alt='' className='w-24'/>
                        <div className='flex flex-col gap-8'>
                            <p className='font-bold text-4xl text-white'>Our Address</p>
                            <p className='text-xl leading-[30px] text-white'>306 Victoria House, Victoria, Mahe, Seychelles</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-1/3 bg-[#52F2A8]'>
                    <div className='flex pt-20 gap-4 items-start px-16'>
                        <Image src={LogoIconWhite1} alt='' className='w-24'/>
                        <div className='flex flex-col gap-8'>
                            <p className='font-bold text-4xl text-white'>Email</p>
                            <p className='text-xl leading-[30px] text-white'>info@creat-or.io</p>
                        </div>
                    </div>
                </div>
            </div>                      
        </div>
    );
}

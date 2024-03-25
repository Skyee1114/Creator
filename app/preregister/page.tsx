// "use client"
import Link from 'next/link';
import { useState } from 'react';
import { PreRegisterButton } from './_components/preregisterbutton';
import { IntroHeader } from '../_components/introheader';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

export default function PreRegister() {
    // const [value, setValue] = useState<string | undefined>()
    return (
        <div>           
            <IntroHeader title="Welcome to the Future of Business Innovation with Creat'or" content=""/> 

            <div className='bg-white'>
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                    <div className='flex gap-12'>
                        <div className='flex flex-col gap-8 w-1/2'>
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>Discover the Platform That Amplifies Your Vision</p>
                                <p className="text-lg text-[#838694]">At Creat'or, we're not just building a platform; we're fostering a community where innovation thrives, connections are made, and businesses soar. As we gear up for our exciting launch, we're inviting visionary entrepreneurs and businesses to be among the first to illuminate their brands on Creat'or. This is your opportunity to place your venture on the map from day one and to be part of a community that values growth, innovation, and collaboration.</p>
                            </div>        
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>Why Pre-Register?</p>
                                <p className="text-lg text-[#838694]"><span className='font-bold'>• Priority Access:</span> Secure your spot at the forefront of our platform's launch. Be among the first to showcase your business to a vibrant and growing audience.</p>
                                <p className="text-lg text-[#838694]"><span className='font-bold'>• Exclusive Opportunities:</span> Pre-registered entrepreneurs and businesses should take the opportunity to participate in our Initial Coin Offering (ICO). Token holders will not only support the foundation of Creat'or but also enjoy priority listing, ensuring your business stands out.</p>
                                <p className="text-lg text-[#838694]"><span className='font-bold'>• Shape the Future:</span> Your feedback as early users will directly influence the evolution of Creat'or, creating a platform that truly resonates with your business needs and aspirations.</p>
                            </div>                     
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>Be a Pioneer. Join Our ICO</p>
                                <p className="text-lg text-[#838694]">Embrace the opportunity to be more than just a user—become a partner in innovation. As a token holder, you secure your place at the forefront of the Creat'or journey, with benefits and insights offered exclusively to our early supporters. This is your chance to invest in your business's future and to be a part of something groundbreaking. (https://www.creat-or.io/)</p>
                            </div>  
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>A Call to Action for Visionaries</p>
                                <p className="text-lg text-[#838694]">Don't miss the chance to be at the forefront of a platform that celebrates and elevates businesses. Pre-register today to secure your priority spot and explore the benefits of becoming an early token holder. Together, let's create a world where every business has the opportunity to shine and grow.</p>
                            </div>  
                        </div>
                        <div className='flex flex-col items-start w-1/2 gap-8'>
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>Let's Get to Know Each Other</p>
                                <p className='text-lg text-[#838694]'>Your vision is unique, and we can't wait to hear about it. <br />To get started, please share with us:</p>
                            </div>
                            <div className='flex flex-col gap-4 w-full'>
                                <p className='text-base text-[#838694]'><span className='font-bold text-lg text-[#1b1f2e]'>Name and Contact Information:</span><br/>So, we can reach out and welcome you personally.</p>
                                <div>
                                    <p className='text-base text-[#1b1f2e]'>Name *</p>
                                    <input
                                        type="text"
                                        className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <p className='text-base text-[#1b1f2e]'>Email *</p>
                                    <input
                                        type="email"
                                        className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <p className='text-base text-[#1b1f2e]'>Mobile number * (optional)</p>     
                                    {/* <PhoneInput
                                        value={value}
                                        onChange={setValue}
                                        className='bg-[#f7f7f9] border-none outline-none px-4 py-5 w-full'
                                    />                                */}
                                    <input
                                        type="text"
                                        className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                        placeholder="Your Mobile"
                                    />
                                </div>  
                            </div>                            
                            <div className='flex flex-col gap-4 w-full'>
                                <p className='text-base text-[#838694]'><span className='font-bold text-lg text-[#1b1f2e]'>Business Name and Location:</span><br/>To understand where your journey began.</p>
                                <input
                                    type="text"
                                    className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                    placeholder="Your Location"
                                />
                            </div>
                            <div className='flex flex-col gap-4 w-full'>
                                <p className='text-base text-[#838694]'><span className='font-bold text-lg text-[#1b1f2e]'>Type of Business:</span><br/>Let's highlight what makes your business stand out.</p>
                                <textarea 
                                    rows={4}
                                    className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                    placeholder=""
                                />
                            </div>
                            <div className='flex flex-col gap-4 w-full'>
                                <div>
                                    <p className='text-base text-[#838694]'><span className='font-bold text-lg text-[#1b1f2e]'>A Brief Description of Your Business Idea or Current Business:</span><br/>Share your passion, your mission, and what you envision for your future with Creat'or.</p>
                                    <textarea 
                                        rows={4}
                                        className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <p className='text-base text-[#1b1f2e]'> How much are you looking to raise ($)</p>
                                    <input
                                        type="number"
                                        className="bg-[#f7f7f9] border-none px-4 py-5 outline-none w-full"
                                        placeholder="$"
                                    />
                                </div>
                            </div>
                            <PreRegisterButton />
                        </div>
                    </div>
                </div>
            </div>              
        </div>
    );
}

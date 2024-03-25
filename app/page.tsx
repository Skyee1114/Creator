import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { PiMedal } from "react-icons/pi";
import { Logo, LogoIcon, LogoWhite, LinesCircle, LinesTransparent, Whitepaper } from "@/assets/img";
import { IntroButton } from "./_components/introbutton";
import { JoinButton } from "./_components/joinbutton";
import { FoundButton } from "./_components/foundbutton";
import { CreativityButton } from "./_components/creativitybutton";
import { SubscribeButton } from "./_components/subscribebutton";
import { CategoryItem } from "./_components/categoryitem";
import { FeaturedProjectItem } from "./_components/featuredprojectitem";
import { ExploreProjectItem } from "./_components/exploreprojectitem";
import { TestimonialItem } from "./_components/testimonialitem";
import { Slider1 } from "./_components/slider1";
import { Slider2 } from "./_components/slider2";
import { TeamMember } from "./_components/teammember";
import { NewsItem } from "./_components/newsitem";
import { newsdate_1, newsdate_2, newsdate_3, newsdate_4, newsdate_5, newsdate_6 } from './_utils/newsdata'

export default function Home() {
    return (
        <div>
            <div className="bg-[url('./../assets/img/bgintro.png')] bg-white bg-cover bg-no-repeat">
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col items-start gap-12'>
                            <div className='flex items-end gap-2 border-b-2 border-[#52F2A8]'>
                                <Image src={Logo} alt="" className='w-[140px]'/>
                                <p className='text-3xl text-[#174034] pb-0.5 '>The Future of Web 3</p>
                            </div>                        
                            <p className='font-bold text-8xl text-[#174034]'>Blockchain P2P Crowdfunding</p>
                            <Link href="/preregister">
                                <IntroButton />
                            </Link>                            
                        </div>
                        <Image src={LogoIcon} alt="" />
                    </div>
                </div>        
            </div>  

            <div className="flex items-center justify-center bg-[#174034] relative">
                <Image src={LinesCircle} alt="" className=''/>
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 absolute'> 
                    <div className='flex flex-row justify-between gap-20 '>
                        <div className='flex flex-col w-[500px]'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                                <p className='text-xl text-white'>Explore the next big thing</p>
                            </div>
                            <p className='font-bold text-6xl text-white pt-3'>Top Categories</p>
                            <p className='text-base text-white leading-[38px] pt-12'>
                                Explore our top categories and discover exciting opportunities that align with your investment profile. Delve into a curated selection of innovative projects across diverse sectors, each offering unique prospects for growth and impact. Whether you're passionate about technology, sustainability, or creative endeavour’s, find your next investment venture with us.
                            </p>
                        </div>
                        <div className='grid grid-cols-3 gap-1'>
                            <CategoryItem itemTitle="Technology"/>
                            <CategoryItem itemTitle="Games"/>
                            <CategoryItem itemTitle="Science"/>
                            <CategoryItem itemTitle="SocialCauses"/>
                            <CategoryItem itemTitle="Environmental"/>
                            <CategoryItem itemTitle="Design"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#1b1f2e] relative'>
                <div className="relative bg-cover bg-no-repeat">
                    <div className="flex items-center container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 relative z-10">
                        <div className='flex flex-col items-center gap-8 py-32 text-white'>
                            <p className="font-bold text-6xl ">Maximize Your Impact:</p>
                            <div className="flex gap-3">
                                <p className="font-bold text-5xl">Exclusive Benefits for $CRET Token Holders on</p>
                                <Image src={LogoWhite} alt="" className="w-40"/>
                            </div>
                            <p className="text-2xl leading-[40px]">Holding $CRET tokens offers distinct advantages on the Creat-or P2P crowdfunding site, enhancing both the investment experience and potential returns. $CRET token holders enjoy privileged access to exclusive project previews, ensuring early investment opportunities. Additionally, they benefit from reduced transaction fees, increasing the efficiency and cost-effectiveness of investments. Moreover, token holders are eligible for rewards and incentives, further enriching the investment landscape on Creat-or, making it a more attractive and engaging platform for those committed to exploring the frontiers of blockchain and innovative funding.</p>
                            <Link href="https://www.creat-or.io/" className="pt-8">
                                <JoinButton />
                            </Link>                        
                        </div>                    
                    </div>      
                </div>          
            </div>

            <div className='bg-white'>
                <div className="flex items-center justify-center container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 bg-[#52F2A8] py-24 relative">
                    {/* <Image src={LinesTransparent} alt="" className=''/> */}
                    <div className="bg-[url('./../assets/img/bglinestransparent.png')]"> 
                        <div className='flex flex-col items-center gap-12'>
                            <div className='flex flex-col items-center gap-4 px-16'>
                                <p className='font-bold text-4xl text-[#174034]'>Revolutionize Your Equity Crowdfunding with Creat'or:</p>
                                <p className='font-normal text-xl text-[#174034]'>Never Lock Up Your Investments Again. Welcome to Creat'or, where the future of investment freedom is now. Forget the old days of equity crowdfunding, where your funds could be tied up for years awaiting a business's exit or sale. Creat'or introduces a groundbreaking approach with blockchain smart contracts, giving you the agility to sell your equity stake whenever you choose. Our platform ensures you're no longer waiting on the sidelines for liquidity events; instead, you have the control to offer your shareholding for sale on the Creat'or market at any time. Dive into an investment experience that marries immediate liquidity with unmatched flexibility and security. Join the Creat'or community, where your investment potential is unleashed, and you hold the power to cash out on your terms. Transform your investment strategy today. Click to see how Creat'or is changing the game for investors everywhere.</p>
                            </div>
                            <Link href="/preregister">
                                <FoundButton />
                            </Link>  
                        </div> 
                    </div>          
                </div>
            </div>   

            <div className='bg-white'>                
                <div className='flex flex-col container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 pt-32'>
                    <div className="bg-[#174034]">
                        <div className="flex flex-col items-center py-12">
                            <div className="flex items-center gap-4 pb-4">
                                <PiMedal className="text-4xl text-[#52F2A8]"/>
                                <p className='font-bold text-2xl text-white text-center'>TOP FEATURED PROJECT</p>
                            </div>
                            <Image src={LogoWhite} alt="" className="w-40"/>
                        </div>
                    </div>
                    <p className='font-bold text-6xl text-[#174034] text-center pt-20 pb-20'>Featured Projects</p>
                    <Slider1
                        projectList={[
                            { project: <FeaturedProjectItem featureTitle="Technology" /> },
                            { project: <FeaturedProjectItem featureTitle="Film & Video" /> },
                            { project: <FeaturedProjectItem featureTitle="Fashion" /> },
                            { project: <FeaturedProjectItem featureTitle="Design"/> },
                        ]}
                    />                    
                </div>                
            </div>    
            
            <div className='bg-white'>
                <div className='flex justify-between gap-24 container m-auto 2xl:max-w-[1300px] px-4 xs:px-0  pt-40'>
                    <Image src={Whitepaper} alt="" />
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                            <p className='font-medium text-xl text-[#674df0]'>Business You Can Back</p>
                        </div>
                        <div className='flex items-end gap-4 pt-4'>
                            <p className='font-bold text-6xl text-[#174034] pb-2'>Why Choose</p>
                            <Image src={Logo} alt="" className='w-[240px]'/>
                        </div>                    
                        <p className='font-bold text-6xl text-[#174034] pt-2'>for your Investments</p> 
                        <div className='flex flex-col gap-8 pt-12'>
                            <div className='flex justify-between gap-8'>
                                <div>
                                    <FiCheckCircle className="text-5xl"/>
                                </div>                            
                                <div className='flex flex-col'>
                                    <p className='font-bold text-2xl text-[#1b1f2e]'>Direct Access to Innovative Projects</p>
                                    <p className='text-xl text-[#838694] pt-4'>Engage with a wide array of groundbreaking ventures across various sectors, ensuring diverse investment opportunities.</p>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8'>
                                <div>
                                    <FiCheckCircle className="text-5xl"/>
                                </div> 
                                <div className='flex flex-col'>
                                    <p className='font-bold text-2xl text-[#1b1f2e]'>Enhanced Security and Compliance</p>
                                    <p className='text-xl text-[#838694] pt-4'>Benefit from blockchain's inherent security, ensuring your investments are protected through transparent and regulated processes.</p>
                                </div>
                            </div>
                            <div className='flex justify-between gap-8'>
                                <div>
                                    <FiCheckCircle className="text-5xl"/>
                                </div> 
                                <div className='flex flex-col'>
                                    <p className='font-bold text-2xl text-[#1b1f2e]'>Community and Rewards</p>
                                    <p className='text-xl text-[#838694] pt-4'>Join a vibrant community of investors and enjoy exclusive rewards, including reduced fees and early access to potential high-growth investments.</p>
                                </div>
                            </div>
                        </div>              

                    </div>
                </div>
            </div>

            <div className='bg-white py-32'>
                <div className='flex flex-col container m-auto 2xl:max-w-[1300px] px-4 xs:px-0'>
                    <p className='font-bold text-6xl text-[#174034] text-center pb-20'>Explore Projects</p>
                    <Slider1
                        projectList={[
                            { project: <ExploreProjectItem featureTitle="Technology" /> },
                            { project: <ExploreProjectItem featureTitle="Film & Video" /> },
                            { project: <ExploreProjectItem featureTitle="Fashion" /> },
                            { project: <ExploreProjectItem featureTitle="Design"/> },
                            { project: <ExploreProjectItem featureTitle="Game"/> },
                            { project: <ExploreProjectItem featureTitle="Human"/> },
                        ]}
                    />
                </div>    
            </div>
           
            <div className=" bg-[#1b1f2e] w-full h-full bg-fixed bg-cover bg-no-repeat">  
                <div className="container m-auto 2xl:max-w-[1300px] px-4 xs:px-0">
                    <div className='flex flex-col items-center py-24'>
                        <p className='w-[1000px] font-bold text-6xl leading-[80px] text-white text-center pt-4 pb-12'>Together We can Bring More Creativity into the World</p>
                        <Link href="/preregister">
                            <CreativityButton />
                        </Link>                        
                    </div>                
                </div>    
            </div>    
            
            <div className='bg-white'>
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 pt-32'> 
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                                <p className='text-xl text-[#674df0]'>Our Testimonials</p>
                            </div>
                            <p className='font-bold text-6xl text-[#174034] text-center'>What They Say</p>
                        </div>
                        <div>
                            <p className='text-xl text-[#838694] w-[560px] leading-8'>Here from some excited businesses awaiting the launch of the Creat-or platform, want to be part of the journey then contact us now.</p>
                        </div>
                    </div>
                    <div className='pt-20'>
                        <Slider2
                            testimonialList={[
                                { 
                                    project: 
                                    <TestimonialItem 
                                        title="Anticipating a New Chapter with Creat-or"
                                        name="Alex Johnson"
                                        content="As an entrepreneur at the forefront of sustainable technology, finding the right platform to connect with like-minded investors has always been a challenge. The upcoming launch of Creat-or is a beacon of hope for startups like mine. The prospect of joining a platform dedicated to bridging the gap between innovative projects and crypto market investors is incredibly exciting. Creat-or promises not just to be a funding platform but a community where sustainability meets innovation and growth. The anticipation of being part of this new ecosystem has energized our team, and we're looking forward to growing alongside other visionary businesses."
                                    />
                                },
                                { 
                                    project: 
                                    <TestimonialItem 
                                        title="Pioneering Together with Creat-or"
                                        name="Sophia Martinez"
                                        content="Stepping into the tech startup scene, the biggest obstacle is often securing the investment necessary to bring your vision to life. The anticipation of Creat-or's launch has brought a new wave of excitement to our team. It represents more than just a platform; it's a promise of a community that values innovation and is eager to support the next wave of technological advancements through crypto investments. The idea of being among the first to join and benefit from such a forward-thinking ecosystem is thrilling. We're not just waiting for the launch; we're preparing to be at the heart of a revolution."
                                    /> 
                                },
                                { 
                                    project: 
                                    <TestimonialItem 
                                        title="On the Cusp of Something Great with Creat-or"
                                        name="Michael Huang"
                                        content="The journey of turning a groundbreaking idea into a thriving business is filled with uncertainties, especially in the digital art space. However, the upcoming launch of Creat-or has infused my project with a newfound sense of optimism. This platform is poised to change the game by connecting creative ventures with crypto investors who are passionate about fueling innovation. The anticipation of being part of Creat-or from the start is exhilarating. It's not just about funding; it's about joining a movement that believes in the transformative power of creativity combined with innovative financing solutions. We're on the cusp of something great, and I can't wait to see where this journey takes us."
                                    /> 
                                },
                            ]}
                        />
                    </div>                
                </div>
            </div>   

            <div className='bg-white py-32'>
                <div className="bg-[url('./../assets/img/bgteam.jpg')] bg-no-repeat">
                    <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 pt-28'>
                        <div className='flex flex-col items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                                <p className='text-xl text-white'>Meet some of our Team Members</p>
                            </div>
                            <p className='font-bold text-6xl text-white pt-4 pb-20'>Experienced People</p>
                        </div>
                        <div className="flex justify-between gap-8">
                            <TeamMember name="James Galler" role="Managing Director" />
                            <TeamMember name="Terry Markham" role="Director" />
                            <TeamMember name="Daniel Millyard" role="Developer" />
                        </div>   
                    </div>
                </div>       
            </div>  

            <div className="bg-[#174034] bg-cover bg-no-repeat"> 
                <div className="container m-auto 2xl:max-w-[1300px] px-4 xs:px-0">
                    <div className='flex flex-col gap-12 items-center py-24'>
                        <div className='flex items-end gap-4'>
                            <Image src={LogoWhite} alt="" className='w-[140px]'/>
                            <p className='font-bold text-4xl text-white pb-1'>is changing the way people invest and Companies raise funds.</p>
                        </div>
                        <video className="h-full w-full rounded-lg" controls autoPlay muted loop>
                            <source src="http://91.194.11.8:3000//video/Creator_V5.mp4" type="video/mp4" />
                        </video>    
                    </div>                
                </div>    
            </div> 

            <div className='bg-white py-32'>
                <div className='flex flex-col container m-auto 2xl:max-w-[1300px] px-4 xs:px-0'>
                    <div className='flex flex-col items-center'>                    
                        <p className='font-bold text-6xl text-[#174034] text-center pt-4 pb-20'>Latest Updates</p>
                    </div>                
                    <Slider1
                        projectList={[
                            { 
                                project: <NewsItem 
                                date={newsdate_1}
                                title="India's Strategic Fintech Boost with the ADB..."
                                /> 
                            },
                            { 
                                project: <NewsItem 
                                date={newsdate_2}
                                title="Crowdfunding Market's Explosive Growth Forecast"
                                /> 
                            },
                            { 
                                project: <NewsItem 
                                date={newsdate_3}
                                title="Bitcoin Halving's Impact on the Crypto Market"
                                /> 
                            },
                            { 
                                project: <NewsItem 
                                date={newsdate_4}
                                title="Redefining Crowdfunding: Creat'or's Revolutionary..."
                                /> 
                            },
                            { 
                                project: <NewsItem 
                                date={newsdate_5}
                                title="Bridging Dreams and Reality: How Creat'or Revolutionize..."
                                /> 
                            },
                            { 
                                project: <NewsItem 
                                date={newsdate_6}
                                title="Empowering Startups: The Unmatched Flexibility of..."
                                /> 
                            },
                        ]}
                    />
                </div>    
            </div>

            <div className='bg-white relative'>
                <div className="bg-[url('./../assets/img/bgsubscribe.jpg')] bg-fixed"> 
                    <div className="container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-24">
                        <p className='font-bold text-6xl leading-[80px] text-[#174034] text-center pb-16'>Pre-register now and be the first to get access to our Platform upon launch</p>            
                        <div className='flex justify-center gap-5'>
                            <input
                                type="email"
                                className="w-[400px] bg-white border-none px-4 outline-none"
                                placeholder="Enter E-Mail Address"
                            />
                            <SubscribeButton />
                        </div>
                    </div>    
                </div>                     
            </div>  
        </div>
    );
}

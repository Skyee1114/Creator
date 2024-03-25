import Image from 'next/image';
import { IntroHeader } from '../_components/introheader';
import { CategoryItem } from '../_components/categoryitem';
import { Slider3 } from '../_components/slider3';
import { Technology, Games, Science, SocialCauses, Environmental, Design } from '@/assets/img';

export default function Explore() {
    return (
        <div>  
            <IntroHeader title="Market Sectors" content="" />

            <div className='bg-[#f7f7f9]'>
                <div className='flex flex-col gap-12 container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                    <div className='flex flex-col items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                            <p className='font-medium text-xl text-[#674df0]'>Explore the next big thing</p>
                        </div>
                        <p className='font-bold text-6xl text-[#174034] pt-3'>Top Categories</p>
                        <p className='text-xl text-[#838694] leading-[38px] text-center pt-12'>
                            Explore our top categories and discover exciting opportunities that align with your investment profile. Delve into a curated selection of innovative projects across diverse sectors, each offering unique prospects for growth and impact. Whether you're passionate about technology, sustainability, or creative endeavour’s, find your next investment venture with us.
                        </p>              
                    </div> 
                    <Slider3
                        projectList={[
                            { project: <CategoryItem itemTitle="Technology"/> },
                            { project: <CategoryItem itemTitle="Games"/> },
                            { project: <CategoryItem itemTitle="Science"/> },
                            { project: <CategoryItem itemTitle="SocialCauses"/> },
                            { project: <CategoryItem itemTitle="Environmental"/> },
                            { project: <CategoryItem itemTitle="Design"/> },
                        ]}
                    />                                       
                </div>     
            </div>        

            <div className='bg-white'>
                <div className='flex flex-col gap-8 container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                    <div className='flex flex-col items-start gap-4'>
                        <p className='font-bold text-4xl text-[#174034] py-4'>Welcome to the Future of Business Investment and Innovation</p>
                        <p className='text-lg leading-[30px] text-[#838694]'>As we stand on the brink of launching the Creat'or platform, an exciting new horizon unfolds for entrepreneurs and businesses across the globe. Creat'or is not just a platform; it's a revolution in how businesses connect with potential investors, driving growth and innovation across various sectors. Our mission is to create a vibrant ecosystem where groundbreaking ideas meet the capital they deserve, fostering progress and prosperity.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4' id='Technology'>
                        <div className='flex gap-8'>
                            <Image src={Technology} alt='' className='w-16'/>
                            <p className='font-bold text-4xl text-[#174034] py-4'>Technology</p>                            
                        </div>
                        <p className='text-lg leading-[30px] text-[#838694]'>In the Technology sector, investors will find a dynamic range of startups and established companies driving innovation in software, hardware, AI, fintech, and more. From cutting-edge apps that solve everyday problems to revolutionary platforms that could redefine industries, this sector is where the future is built. Whether you're interested in the next big thing in tech or solutions that promise to make the digital world more secure and accessible, your investment could help shape the technology landscape of tomorrow.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4' id='Games'>
                        <div className='flex gap-8'>
                            <Image src={Games} alt='' className='w-16'/>
                            <p className='font-bold text-4xl text-[#174034] py-4'>Games</p>
                        </div>                        
                        <p className='text-lg leading-[30px] text-[#838694]'>The Games sector presents a unique blend of creativity, technology, and entertainment, offering investment opportunities in video game development, eSports, mobile gaming, and VR/AR experiences. This sector is perfect for those who believe in the power of play, whether it's through engaging narratives, competitive arenas, or innovative gaming technologies. By investing in games, you're supporting a world of endless possibilities and the talented teams dedicated to bringing joy and excitement to players around the globe.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4' id='Science'>
                        <div className='flex gap-8'>
                            <Image src={Science} alt='' className='w-16'/>
                            <p className='font-bold text-4xl text-[#174034] py-4'>Science</p>
                        </div>                        
                        <p className='text-lg leading-[30px] text-[#838694]'>Science is the backbone of innovation, and in this sector, investors can support groundbreaking research and development across biotech, healthcare, pharmaceuticals, and sustainable technologies. From startups working on life-saving treatments to companies focused on combating climate change through scientific advancements, your investment could contribute to significant breakthroughs that benefit humanity and the planet.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4' id='SocialCauses'>
                        <div className='flex gap-8'>
                            <Image src={SocialCauses} alt='' className='w-16' />
                            <p className='font-bold text-4xl text-[#174034] py-4'>Social Causes</p>
                        </div>                        
                        <p className='text-lg leading-[30px] text-[#838694]'>For those who are passionate about making a difference, the Social Causes sector offers opportunities to invest in businesses and organizations committed to social change. This includes education, healthcare, equality, and poverty alleviation. Investments in this sector not only promise financial returns but also the chance to be part of solutions that address critical social issues, improving lives and communities around the world.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4' id='Environmental'>
                        <div className='flex gap-8'>
                            <Image src={Environmental} alt='' className='w-16'/>
                            <p className='font-bold text-4xl text-[#174034] py-4'>Environmental</p>
                        </div>                        
                        <p className='text-lg leading-[30px] text-[#838694]'>The Environmental sector is where green innovation thrives, focusing on renewable energy, sustainable agriculture, conservation, and eco-friendly products. As the demand for sustainable solutions grows, your investment can support the development of businesses that prioritize the planet, from technologies that reduce carbon footprints to initiatives that protect natural habitats and biodiversity.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4' id='Design'>
                        <div className='flex gap-8'>
                            <Image src={Design} alt='' className='w-16'/>
                            <p className='font-bold text-4xl text-[#174034] py-4'>Design</p>
                        </div>                        
                        <p className='text-lg leading-[30px] text-[#838694]'>Investing in the Design sector means supporting creativity and innovation in product design, architecture, fashion, and digital media. This sector is all about aesthetics, functionality, and pushing the boundaries of what's possible. Whether it's through sustainable fashion, transformative spaces, or digital experiences that captivate, your investment could bring visionary ideas to life and redefine how we see and interact with the world around us.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                        <p className='font-bold text-4xl text-[#174034] py-4'>Why Pre-Register?</p>
                        <p className='text-lg leading-[30px] text-[#838694]'>Pre-registering your business with Creat'or offers an unparalleled opportunity to be at the forefront of this transformative journey. It's your chance to showcase your business to a community of eager investors and to be part of an exclusive group that believes in the power of innovation and entrepreneurship. As we prepare to launch, we're inviting visionaries, pioneers, and change-makers to join us. Whether you're just starting out or looking to scale, Creat'or is the platform where your business can soar.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                        <p className='font-bold text-4xl text-[#174034] py-4'>Token Holders Take the Lead</p>
                        <p className='text-lg leading-[30px] text-[#838694]'>In recognition of our early supporters, token holders will be given priority in the listing process. This is our way of saying thank you and ensuring that those who share our vision and commitment to innovation are the first to benefit from the platform's capabilities. If you're interested in becoming one of the inaugural entrepreneurs or businesses to be featured on Creat'or, consider participating in our ICO and secure your place at the forefront of this exciting venture.</p>   
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                        <p className='font-bold text-4xl text-[#174034] py-4'>What We're Looking For</p>
                        <p className='text-lg leading-[30px] text-[#838694]'>We are keen to discover and nurture businesses across a wide range of sectors, including Technology, Games, Science, Social Causes, Environmental initiatives, and Design. Creat'or is about bringing together the brightest minds and the most innovative solutions to address challenges, create value, and inspire change. Below, you'll find details on the types of businesses and industries that will be available for investment when the platform launches. We also outline the information you'll need to provide to pre-register your interest. This is your moment to shine, to share your vision, and to start on a path that could redefine what's possible for your business.
                        </p>   
                    </div>                 
                </div>
            </div>          
        </div>
    );
}

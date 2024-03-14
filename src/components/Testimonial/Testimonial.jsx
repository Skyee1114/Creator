import { Link } from 'react-router-dom';
import TestimonialItem from './TestimonialItem';
import { TestimonialSlider } from '../ImageSlider';

const Testimonial = () => {

    return (
        <div className='bg-white'>
            <div className='m-auto container max-w-[1300px] pt-32'> 
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
                    <TestimonialSlider
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
    )
}

Testimonial.displayName = 'Testimonial'

export default Testimonial

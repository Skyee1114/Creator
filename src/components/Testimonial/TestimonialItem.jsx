import { AlexJohnson, SophiaMartinez, MichaelHuang, Play } from '../../assets/img';

const TestimonialItem = ({title, name, content}) => {

    const testimoniaImages = {
        'Alex Johnson': AlexJohnson,
        'Sophia Martinez': SophiaMartinez,
        'Michael Huang': MichaelHuang,
    };

    return (        
        <div className="flex relative pt-8">
            <div className='w-1 bg-[#52F2A8]'></div>
            <div className='flex flex-col gap-4 w-full h-[700px] pt-16 pl-16 bg-[#f7f7f9]'>
                <p className='font-bold text-4xl text-[#174034]'>{title}</p>
                <p className='font-bold text-2xl text-[#674df0]'>{name}</p>
                <p className='w-[600px] text-xl leading-10 text-[#838694]'>{content}</p>

            </div>
            <div className='absolute -top-8 right-8'>
                <img src={testimoniaImages[name]} alt="" className='w-[400px]'/>
                <div className='transition-all duration-300 ease-in-out p-5 hover:p-4 bg-[#52F2A8] absolute right-0 top-8 cursor-pointer'>
                    <img src={Play} alt="play" className='w-4 h-4' />
                </div>
            </div>
        </div>
    );
};

TestimonialItem.displayName = 'TestimonialItem'

export default TestimonialItem

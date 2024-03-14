import { Link } from 'react-router-dom';
import { LogoWhite, PlayButton } from '../../assets/img';

const Video = () => {

    return (
        <div className='relative'>
            <div className="bg-[#174034] bg-cover bg-no-repeat"> 
                <div className="m-auto container max-w-[1300px]">
                    <div className='flex flex-col gap-12 items-center py-24'>
                        <div className='flex items-end gap-4'>
                            <img src={LogoWhite} alt="" className='h-14'/>
                            <p className='font-bold text-4xl text-white pb-1'>is changing the way people invest and Companies raise funds.</p>
                        </div>
                        <video className="h-full w-full rounded-lg" controls>
                            <source src="http://localhost:3000/video/Creator_V5.mp4" type="video/mp4" />
                        </video>    
                    </div>                
                </div>    
            </div>                     
        </div>        
    )
}

Video.displayName = 'Video'

export default Video

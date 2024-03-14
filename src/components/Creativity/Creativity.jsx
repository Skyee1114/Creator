import { Link } from 'react-router-dom';
import { Button } from '../Button';

const Creativity = () => {

    return (
        <div className='relative'>
            <div className=" bg-[#1b1f2e] w-full h-full bg-fixed bg-cover bg-no-repeat">  
                <div className="m-auto container max-w-[1300px]">
                    <div className='flex flex-col items-center py-24'>
                        <p className='w-[1000px] font-bold text-6xl leading-[80px] text-white text-center pt-4 pb-12'>Together We can Bring More Creativity into the World</p>
                        <Button buttonColor="#52F2A8" buttonhoverColor="#1b1f2e" titleColor="#174034" titlehoverColor="#ffffff" title="start project"/>
                    </div>                
                </div>    
            </div>                  
        </div>        
    )
}

Creativity.displayName = 'Creativity'

export default Creativity

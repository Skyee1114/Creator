import { Link } from 'react-router-dom';
import { LogoIcon, Intro1, Intro2 } from "../../assets/img";
import { Button } from '../Button';

const IntroItem = ({introTitle}) => {

    const introImages = {
        '1': Intro1,
        '2': Intro2,
    };

    return (        
        <div className={`flex flex-col relative`} >           
            <div  className="absolute inset-0 bg-black opacity-80"></div>
            <img src={introImages[introTitle]} alt="introduce"/>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col items-center gap-8 absolute top-12 z-10'>
                    <img src={LogoIcon} alt="" className='w-20'/>
                    <p className='text-2xl text-white border-b'>Creat-or the Future Web 3</p>
                    <p className='font-bold text-6xl leading-[70px] text-center text-white w-[520px]'>BLOCKCHAIN P2P CROWDFUNDING</p>
                    <Button buttonColor="#1b1f2e" buttonhoverColor="#ffffff" titleColor="#ffffff" titlehoverColor="#1b1f2e" title="start project"/>
                </div>
            </div>
            
            
        </div>
    );
};

IntroItem.displayName = 'IntroItem'

export default IntroItem

import { Link } from 'react-router-dom';
import { Logo, LogoIcon } from '../../assets/img';
import { Button } from '../Button';
// import IntroItem from './IntroItem';
// import { IntroSlider } from '../ImageSlider';

const IntroHome = () => {

    return (            
        <div className="bg-[url('./assets/img/bg-intro.png')] bg-cover bg-no-repeat">
            <div className='m-auto container max-w-[1300px] py-32'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col items-start gap-12'>
                        <div className='flex items-end gap-2 border-b-4 border-[#52F2A8]'>
                            <img src={Logo} alt="" className='h-12'/>
                            <p className='font-bold text-4xl text-[#174034] pb-0.5 '>the Future Web 3</p>
                        </div>                        
                        <p className='font-bold text-8xl text-[#174034]'>Blockchain P2P Crowdfunding</p>
                        <Button buttonColor="#52F2A8" buttonhoverColor="#1b1f2e" titleColor="#174034" titlehoverColor="#ffffff" title="start project"/>
                    </div>
                    <img src={LogoIcon} alt="" />
                </div>
            </div>
            
            {/* <IntroSlider
                introList={[
                    { intro: <IntroItem introTitle="1"/> },
                    { intro: <IntroItem introTitle="2"/> },
                ]}
            /> */}
        </div>  
    )
}

IntroHome.displayName = 'IntroHome'

export default IntroHome

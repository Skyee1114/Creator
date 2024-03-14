import { Link } from 'react-router-dom';
import { LinesTransparent } from '../../assets/img';
import { Button } from '../Button';

const RaiseFound = () => {

    return (
        <div className='bg-white'>
            <div className="flex items-center justify-center m-auto container max-w-[1300px] bg-[#52F2A8] relative">
                <img src={LinesTransparent} alt="" className=''/>
                <div className='absolute'> 
                    <div className='flex flex-row justify-between items-center gap-12 '>
                        <div className='flex flex-col gap-12 w-[600px]'>
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>Empower Your Dream:</p>
                                <p className='font-normal text-xl text-[#174034]'> Fundraising for Innovators and Entrepreneurs</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='font-bold text-4xl text-[#174034]'>Unleash Your Venture's Potential:</p>
                                <p className='font-normal text-xl text-[#174034]'>Join our platform to connect with a global network of investors eager to support groundbreaking projects. Turn your vision into reality and elevate your business to new heights.</p>
                            </div>         
                        </div>
                        <Button buttonColor="#1b1f2e" buttonhoverColor="#ffffff" titleColor="#ffffff" titlehoverColor="#1b1f2e" title="Start your fundraising journey with us today!"/>
                    </div>
                </div>          
            </div>
        </div>        
    )
}

RaiseFound.displayName = 'RaiseFound'

export default RaiseFound

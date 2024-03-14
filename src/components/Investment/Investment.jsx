import { Link } from 'react-router-dom';
import { FiCheckCircle } from "react-icons/fi";
import { Logo, Whitepaper } from '../../assets/img';

const Investment = () => {

    return (        
        <div className='bg-white'>
            <div className='flex justify-between gap-24 m-auto container max-w-[1300px] pt-40'>
                <img src={Whitepaper} alt="" />
                <div className='flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                        <p className='font-medium text-xl text-[#674df0]'>Business You Can Back</p>
                    </div>
                    <div className='flex items-end gap-4 pt-4'>
                        <p className='font-bold text-6xl text-[#174034] pb-2'>Why Choose</p>
                        <img src={Logo} alt="" className='h-20'/>
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
        
    )
}

Investment.displayName = 'Investment'

export default Investment

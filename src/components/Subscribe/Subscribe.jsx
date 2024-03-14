import { Link } from 'react-router-dom';
import { Button } from '../Button';

const Subscribe = () => {

    return (
        <div className='bg-white relative'>
            <div className="bg-[url('./assets/img/bg-subscribe.jpg')] bg-fixed"> 
                <div className="m-auto container max-w-[1300px] py-24">
                    <p className='font-bold text-6xl leading-[80px] text-[#174034] text-center pb-16'>Pre-register now and be the first to get access to our Platform upon launch</p>            
                    <div className='flex justify-center gap-5'>
                        <input
                            type="email"
                            className="w-[400px] bg-white border-none px-4 outline-none"
                            placeholder="Enter E-Mail Address"
                        />
                        <Button buttonColor="#1b1f2e" buttonhoverColor="#ffffff" titleColor="#ffffff" titlehoverColor="#1b1f2e" title="subscribe"/>
                    </div>
                </div>    
            </div>                     
        </div>        
    )
}

Subscribe.displayName = 'Subscribe'

export default Subscribe

import { Link } from "react-router-dom"
import { LogoWhite } from "../../assets/img"
import Button from "../Button/Button"

const Benifit = () => {

    return (
        <div className='bg-[#1b1f2e] relative'>
            <div className="relative bg-cover bg-no-repeat">
                {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                <div className="flex items-center m-auto container max-w-[1300px] relative z-10">
                    <div className='flex flex-col items-center gap-8 py-32 text-white'>
                        <p className="font-bold text-6xl ">Maximize Your Impact:</p>
                        <div className="flex gap-3">
                            <p className="font-bold text-5xl pt-2">Exclusive Benefits for $CRET Token Holders on</p>
                            <img src={LogoWhite} alt="" className="h-16"/>
                        </div>
                        <p className="text-2xl leading-[40px]">Holding $CRET tokens offers distinct advantages on the Creat-or P2P crowdfunding site, enhancing both the investment experience and potential returns. $CRET token holders enjoy privileged access to exclusive project previews, ensuring early investment opportunities. Additionally, they benefit from reduced transaction fees, increasing the efficiency and cost-effectiveness of investments. Moreover, token holders are eligible for rewards and incentives, further enriching the investment landscape on Creat-or, making it a more attractive and engaging platform for those committed to exploring the frontiers of blockchain and innovative funding.</p>
                        <Link >
                            <Button buttonColor="#52F2A8" buttonhoverColor="#1b1f2e" titleColor="#174034" titlehoverColor="#ffffff" title="JOIN OUR ICO NOW"/>
                        </Link>                        
                    </div>                    
                </div>      
            </div>          
        </div>
  
    )
}

Benifit.displayName = 'Benifit'

export default Benifit

import Image from 'next/image';
import { InvestorAdvantageList, InvestorBenifitList } from "@/assets/img";

export default function InvestorAdvantage() {
    return (
        <div className='bg-white'>
            <div className="m-auto container max-w-[1300px] py-24">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p className="font-bold text-4xl text-[#174034]">Empowering the Crypto Community:</p>
                    <p className="font-bold text-6xl text-[#174034]">A Revolutionary Crowdfunding Platform</p>
                    <p className="w-3/4 py-8">
                        CREAT'OR stands at the forefront of a financial revolution,
                        championing a blockchain-powered transformation in crowdfunding. Our platform is a testament to the power of
                        decentralization, offering a more equitable, transparent, and efficient pathway for securing funds and making
                        investments. CREAT’OR is not just evolving the mechanisms through which businesses access Capital, we are
                        fundamentally reshaping the landscape of decentralized finance (DeFi) to empower the crypto community,
                        investors, and businesses alike.
                    </p>
                    <p className="font-bold text-4xl text-[#174034]">Investor Advantages </p>
                    <Image 
                        src={InvestorAdvantageList} 
                        alt="" 
                        className="transition-all duration-1000 w-auto hover:scale-110"
                        style={{ transformOrigin: 'center' }}
                    />
                </div>                
            </div>

            <div className="m-auto container max-w-[1300px] py-24">
                <Image 
                    src={InvestorBenifitList} 
                    alt="" 
                    className="transition-all duration-1000 w-auto hover:scale-110"
                    style={{ transformOrigin: 'center' }}
                />        
            </div>  
        </div>
    );
}

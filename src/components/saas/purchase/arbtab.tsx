import Image from "next/image";
import ARBIcon from '../../../../public/images/chains/arbitrum-arb-logo.svg';

export function ArbTab() {
  
    return (      
        <div className="flex items-center justify-between border border-[#52F2A8] p-4 rounded-b-2xl">
            <div className="flex flex-col items-start gap-2">
                <p className="text-lg">Amount in <span className="font-bold">ARB</span> you pay</p>
                <input 
                    type="number" 
                    placeholder="0"
                    className="bg-transparent outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
            </div>
            <Image src={ARBIcon} alt="" className="w-14"/>
        </div>
        
    );
}

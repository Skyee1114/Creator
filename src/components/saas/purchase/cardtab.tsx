import Image from "next/image";
import CARDIcon from '../../../../public/images/card.svg';

export function CardTab() {
  
    return (      
        <div className="flex items-center justify-between border border-[#52F2A8] p-4 rounded-b-2xl">
            <div className="flex flex-col items-start gap-2">
                <p className="text-lg">Amount in <span className="font-bold">USD</span> you pay</p>
                <input 
                    type="number" 
                    placeholder="0"
                    className="bg-transparent outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
            </div>
            <Image src={CARDIcon} alt="" className="w-14"/>
        </div>
        
    );
}

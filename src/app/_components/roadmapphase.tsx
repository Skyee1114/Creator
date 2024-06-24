import Image from "next/image";
import { CheckWithoutCircle } from "@/assets/image"

interface IProps {
    order?: string,
    title?: string,
    content1?: string,
    content2?: string,
    content3?: string,
}

export function RoadMapPhase({order, title, content1, content2, content3}: IProps) {

    return (      
        <div 
            className="w-full h-auto md:h-[240px] lg:h-[220px] flex flex-col border-2 border-[#52F2A8] rounded-xl p-2 xs:p-4"
            style={{
            background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
            }}
        >
            <div className="flex flex-col gap-2">
                <p className="text-base sm:text-lg xl:text-xl text-center">Phase {order}</p>
                <p className="text-base sm:text-lg xl:text-xl text-center">{title}</p>
            </div>            
            <div className="flex flex-col justify-center items-center gap-2 md:gap-4 h-full">
                <div className="flex items-center gap-2">
                    <Image src={CheckWithoutCircle} alt="" className={`w-4 ${ (order === '9' || order === '10' || order === '11') ? 'hidden' : 'block'}`}/>
                    <p className="text-xs sm:text-sm xl:text-base">{content1}</p>
                </div>     
                <div className="flex items-center gap-2">
                    <Image src={CheckWithoutCircle} alt="" className={`w-4 ${ (order === '9' || order === '10' || order === '11') ? 'hidden' : 'block'}`}/>
                    <p className="text-xs sm:text-sm xl:text-base">{content2}</p>
                </div>    
                {content3 && <div className="flex items-center gap-2">
                    <Image src={CheckWithoutCircle} alt="" className={`w-4 ${ (order === '9' || order === '10' || order === '11') ? 'hidden' : 'block'}`}/>
                    <p className="text-xs sm:text-sm xl:text-base">{content3}</p>
                </div> }
            </div>            
        </div> 
    );
}

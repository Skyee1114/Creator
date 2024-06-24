import Image, { StaticImageData } from "next/image";
import { BenefitEquityFunding, BenefitFlexibleListingFees, BenefitMarketingBoost, BenefitAdvisoryCircle, BenefitMilestoneEscrow, BenefitImpactFund, BenefitIncubatorAccess, BenefitAcceleratorProgram, BenefitLeaderboardRewards } from "@/assets/image";

interface IProps {
    title: string,
    content: string,
    img: number
}

interface ItemImages {
    [key: string]: StaticImageData;
}

export function BenefitCard({title, content, img}: IProps) {

    const BenefitImages: ItemImages = {
        1: BenefitEquityFunding,
        2: BenefitFlexibleListingFees,
        3: BenefitMarketingBoost,
        4: BenefitAdvisoryCircle,
        5: BenefitMilestoneEscrow,
        6: BenefitImpactFund,
        7: BenefitIncubatorAccess,
        8: BenefitAcceleratorProgram,
        9: BenefitLeaderboardRewards,

    };

    return (      
        <div 
            className="flex flex-col gap-2 sm:gap-4 justify-between items-center w-[240px] sm:w-[288px] border-2 border-[#52F2A8] rounded-xl px-2 sm:px-4 py-4 sm:py-8"
            style={{
            background: 'linear-gradient(240deg, rgba(23, 64, 52, 0.4) 20%, rgba(29, 29, 29, 0.8) 80%)'
            }}
        >
            <div className="flex flex-col items-center gap-4">
                <p className="text-lg sm:text-2xl">{title}</p>
                <p className="text-sm sm:text-base text-center">{content}</p>
            </div>            
            <Image src={BenefitImages[img]} alt="" className="w-[60px] sm:w-auto"/>
        </div>
    );
}

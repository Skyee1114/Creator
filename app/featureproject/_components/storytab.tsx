import Image from "next/image";
import { Story1, Story2 } from "@/assets/img";

export function StoryTab() {
  
    return (      
        <div className="flex flex-col gap-8 pt-8 pb-32">
            <p className="font-bold text-3xl text-[#1b1f2e]">Story</p>
            <p className="text-lg leading-[32px] text-[#838694]">Our journey began with a vision to transform the traditional crowdfunding paradigm. Recognizing the limitations and opacity inherent in existing models, we set out to pioneer a new approach. Led by a dedicated team of seasoned professionals, Creator emerged as a beacon of innovation in the blockchain space.</p>
            <Image src={Story1} alt="" className="w-[600px]"/>
            <p className="text-lg leading-[32px] text-[#838694]">At Creator, we believe in democratizing investment opportunities. We envision a future where everyone, regardless of their background or location, can participate in exciting ventures while businesses gain access to the growth capital necessary for success. Powered by blockchain technology, our platform offers unparalleled security and transparency. Through smart contracts, we streamline transactions, removing unnecessary intermediaries and empowering investors with greater autonomy over their investments.</p>
            <Image src={Story2} alt="" className="w-[800px]"/>
            <p className="text-lg leading-[32px] text-[#838694]">But our mission extends beyond mere transactional facilitation. We strive to cultivate a vibrant ecosystem, fostering meaningful relationships within the investment community. For businesses, Creator offers a comprehensive suite of services beyond fundraising, ensuring their long-term growth and success. Meanwhile, token holders are invited to actively engage in shaping the future of our platform. Join us as we rewrite the rules of equity crowdfunding. With Creator, the possibilities are endless for both businesses and investors alike.</p>
        </div>
        
    );
}

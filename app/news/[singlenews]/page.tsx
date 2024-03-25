import Image, { StaticImageData } from 'next/image';
import { News1, News2, News3, News4, News5, News6 } from '@/assets/img';
import { newstitle_1, newstitle_2, newstitle_3, newstitle_4, newstitle_5, newstitle_6, newscontent_1, newscontent_2, newscontent_3, newscontent_4, newscontent_5, newscontent_6, newsdate_1, newsdate_2, newsdate_3, newsdate_4, newsdate_5, newsdate_6 } from '../../_utils/newsdata';

interface ItemTitles {
    [key: string]: string;
}

interface ItemContents {
    [key: string]: string;
}

interface ItemImages {
    [key: string]: StaticImageData;
}

export default function SingleNews({ params }: { params: { singlenews: string } }) {

    const titles: ItemTitles = {
        [newsdate_1]: newstitle_1,
        [newsdate_2]: newstitle_2,
        [newsdate_3]: newstitle_3,
        [newsdate_4]: newstitle_4,
        [newsdate_5]: newstitle_5,
        [newsdate_6]: newstitle_6,
    };

    const contents: ItemContents = {
        [newsdate_1]: newscontent_1,
        [newsdate_2]: newscontent_2,
        [newsdate_3]: newscontent_3,
        [newsdate_4]: newscontent_4,
        [newsdate_5]: newscontent_5,
        [newsdate_6]: newscontent_6,
    };

    const newsImages: ItemImages = {
        [newsdate_1]: News1,
        [newsdate_2]: News2,
        [newsdate_3]: News3,
        [newsdate_4]: News4,
        [newsdate_5]: News5,
        [newsdate_6]: News6,
    };

    const date = decodeURIComponent(params.singlenews)

    const paragraphs = contents[date].split(/(?<=\.) /);

    return ( 
        <div className='bg-white'>
            <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                <div className='flex flex-col gap-4 items-start '>
                    <Image src={newsImages[date]} alt='' className='w-[480px]'/>
                    <div className='bg-[#52F2A8]'>
                        <p className='font-bold text-white text-xs uppercase px-5 py-2'>{date}</p>
                    </div>
                    <p className='font-bold text-4xl text-[#174034] py-4'>{titles[date]}</p>
                    <div className='prose'>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg leading-[30px] text-[#838694]">{paragraph}</p>
                        ))} 
                    </div>
                </div>                
            </div>
        </div>      
    );
}

import { Link } from 'react-router-dom';
import { LinesCircle } from '../../assets/img';
import CategoryItem from './CategoryItem';

const TopCategory = () => {

    return (
        <div className="flex items-center justify-center bg-[#174034] relative">
            <img src={LinesCircle} alt="" className=''/>
            <div className='m-auto container max-w-[1300px] absolute'> 
                <div className='flex flex-row justify-between gap-20 '>
                    <div className='flex flex-col w-[500px]'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                            <p className='text-xl text-white'>Explore the next big thing</p>
                        </div>
                        <p className='font-bold text-6xl text-white pt-3'>Top Categories</p>
                        <p className='text-xl text-white leading-[38px] pt-14'>
                            Explore our top categories and discover exciting opportunities that align with your investment profile. Delve into a curated selection of innovative projects across diverse sectors, each offering unique prospects for growth and impact. Whether you're passionate about technology, sustainability, or creative endeavour’s, find your next investment venture with us.
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-1'>
                        <CategoryItem itemTitle="Technology"/>
                        <CategoryItem itemTitle="Games"/>
                        <CategoryItem itemTitle="Science"/>
                        <CategoryItem itemTitle="SocialCauses"/>
                        <CategoryItem itemTitle="Environmental"/>
                        <CategoryItem itemTitle="Design"/>
                    </div>
                </div>
            </div>           
            
        </div>
    )
}

TopCategory.displayName = 'TopCategory'

export default TopCategory

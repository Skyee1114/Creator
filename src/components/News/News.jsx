import { Link } from 'react-router-dom';
import NewsIteam from './NewsItem';
import { NewsSlider } from '../ImageSlider';

const News = () => {

    return (
        <div className='bg-white py-32'>
            <div className='flex flex-col m-auto container max-w-[1300px]'>
                <div className='flex flex-col items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-1.5 h-1.5 bg-[#52F2A8]'></div>
                        <p className='text-xl text-[#674df0]'>Codesk Updates</p>
                    </div>
                    <p className='font-bold text-6xl text-[#174034] text-center pt-4 pb-20'>News & articles</p>
                </div>                
                <NewsSlider
                    newsList={[
                        { news: <NewsIteam date="JANUARY 3, 2024" /> },
                        { news: <NewsIteam date="JANUARY 6, 2024" /> },
                        { news: <NewsIteam date="JANUARY 9, 2024" /> },
                        { news: <NewsIteam date="JANUARY 12, 2024"/> },
                    ]}
                />
            </div>    
        </div>
          
    )
}

News.displayName = 'News'

export default News

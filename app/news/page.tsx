import { NewsItem } from '../_components/newsitem';
import { newsdate_1, newsdate_2, newsdate_3, newsdate_4, newsdate_5, newsdate_6 } from '../_utils/newsdata'


export default function News() {
    return (
        <div>       
            <div className='bg-white'>
                <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32'>
                    <div className='grid grid-cols-3 gap-8'>
                        <NewsItem 
                            date={newsdate_1}
                            title="India's Strategic Fintech Boost with the ADB..."
                        /> 
                        <NewsItem 
                            date={newsdate_2}
                            title="Crowdfunding Market's Explosive Growth Forecast"
                        />
                        <NewsItem 
                            date={newsdate_3}
                            title="Bitcoin Halving's Impact on the Crypto Market"
                        />
                        <NewsItem 
                            date={newsdate_4}
                            title="Redefining Crowdfunding: Creat'or's Revolutionary..."
                        />
                        <NewsItem 
                            date={newsdate_5}
                            title="Bridging Dreams and Reality: How Creat'or Revolutionize..."
                        /> 
                        <NewsItem 
                            date={newsdate_6}
                            title="Empowering Startups: The Unmatched Flexibility of..."
                        />
                    </div>
                </div>     
            </div>                  
        </div>
    );
}

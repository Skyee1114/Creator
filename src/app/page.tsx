import Link from "next/link";
import Image from "next/image";
import { NavBar } from "./_components/navbar";
import PurchasePanel from "./_components/purchasepanel";
import { StepCard } from "./_components/stepcard";
import { BenefitCard } from "./_components/benefitcard";
import { GreenButton } from "./_components/greenbutton";
import { RoadMapPhase } from "./_components/roadmapphase";
import { RoadmapSlider } from "./_components/roadmapslider";
import { FAQsItem } from "./_components/faqsitem";
import { CreatorLogoFull, CoinCodex, CoinGecko, Bitcoincom, Bitcoinist, CoinMarketCap, CryptoDaily, Tokenomics, Gateio, Uniswap, Vent, Tecra, Gitcoin, LenderKit, WeFounder, RealBlocks, Cross, Check, StakeXchange, Zealy, GiveawayBGLine, CreatorLogo,  James, Terry, LinkedIn, SolidProof, Coinband, GotBit, X, Telegram, Discord, Youtube } from "@/assets/image";

export default function Home() {
  return (
    <div className="select-none">
      <NavBar />
      <div className="bg-[#141414] bg-[url('../assets/image/Background_Line.svg')]">
        <div className="container m-auto 2xl:max-w-[1440px] px-4 py-12 lg:py-16">
          <div className="flex flex-col xl:flex-row justify-between items-end gap-12 sm:gap-16">
            <div className="flex flex-col gap-4 md:gap-6 xl:gap-12 2xl:gap-8">
              <p className="text-center text-xl sm:text-3xl md:text-4xl 2xl:text-5xl">ICO Sale Continues on Gempad<br/>Big Bonuses!</p>
              <div className="w-full pt-1 sm:py-1 2xl:py-2 rounded-full bg-[#52F2A8]"></div>
              <p className="text-base sm:text-xl md:text-2xl xl:text-3xl">Up to 38% bonus CRET tokens on Gempad. Secure your referral link and earn 5% of all sales.</p>
              <p className="text-base sm:text-xl md:text-2xl xl:text-3xl">Starts July 5th... Don't miss out!</p>
              <iframe className="w-full h-[500px]" src="https://gempad.app/embed?address=0x059b008e897835bD6ad014f376f9F797d925a007&bgColor=%2312181F&fgColor=%23161D27&hasAnimation=true&hasBanner=true&hasSocialLinks=true&network=Ethereum&padding=30&refer=&responsive=false&saleType=presale&theme=dark&txtColor=%23FFFFFF" />
            </div>
            <div className="w-full xl:w-auto">
              <PurchasePanel />
            </div>
          </div>          
        </div>       

        <div className="relative">
          <div className="absolute inset-0 bg-[#1d1d1d] opacity-[77%]"></div>
          <div className="container m-auto 2xl:max-w-[1440px] px-4 relative">
            <div className="flex flex-col items-center py-8 sm:py-12">
              <p className="text-3xl md:text-4xl 2xl:text-5xl">FEATURED ON</p>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 items-center gap-x-16 gap-y-8 pt-8">
                  <Image src={CoinGecko} alt="" className="w-52 sm:w-64 2xl:w-80"/>
                  <Image src={CoinCodex} alt="" className="w-52 sm:w-64 2xl:w-80"/>
                  <Image src={Bitcoincom} alt="" className="w-52 sm:w-64 2xl:w-80"/>
                  <Image src={Bitcoinist} alt="" className="w-52 sm:w-64 2xl:w-80"/>
                  <Image src={CoinMarketCap} alt="" className="w-52 sm:w-64 2xl:w-80"/>
                  <Image src={CryptoDaily} alt="" className="w-52 sm:w-64 2xl:w-80"/>
              </div>
            </div>
          </div>          
        </div>

        <div className="container m-auto 2xl:max-w-[1440px] px-4 pt-12 lg:pt-16">
            <div className="flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-12 2xl:gap-8">
              <div className="flex flex-col gap-4 md:gap-6 xl:gap-12 2xl:gap-8">
                <p className="text-xl sm:text-3xl md:text-4xl 2xl:text-5xl">Unleashing the Future of Investment with Blockchain Precision</p>
                <div className="w-full pt-1 sm:py-1 2xl:py-2 rounded-full bg-[#52F2A8]"></div>
                <p className="text-base sm:text-xl md:text-2xl xl:text-3xl">Bringing Crowdfunding and Investments to the WEB3 Space</p>
              </div> 
              <div >
                <video className="" controls>
                  <source src="https://dhyqqgboo8c5wh9u.public.blob.vercel-storage.com/webapp/video/creator-v5-c-OH86PuwU4uyMYo94Ot9FIVLdSpPLnZ.mp4" type="video/mp4" />
                </video> 
              </div>     
            </div>
        </div>

        <div id="tokenomics" className="container m-auto 2xl:max-w-[1440px] px-4 py-12 lg:py-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">Tokenomics</p>
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-8 xl:gap-4 2xl:gap-12 pt-8 lg:pt-12">
            <Image src={Tokenomics} alt="" className="w-auto xl:w-[60%] 2xl:w-[100%]"/>
            <div 
              className="flex flex-col gap-4 xs:gap-6 justify-between border-2 border-[#52F2A8] rounded-2xl p-4 xs:p-8 mx-0 md:mx-24 xl:mx-0"
              style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
              }}
            >
              <div className="flex justify-start lg:justify-center xl:justify-between items-center gap-2 xs:gap-4 sm:gap-8 xl:gap-2">
                <Image src={CreatorLogo} alt="" className="w-16 xs:w-24"/>
                <div className="flex flex-col text-xs xs:text-base">
                  <p>Token Ticker: CRET</p>
                  <p>Network: Ethereum (Arbitrum/Mainnet)</p>
                  <p>Total Supply: 500,000,000</p>
                  <p>Initial Marketcap: $9,964,480</p>
                  <div className="flex gap-4 pt-1">
                    <Link href="https://etherscan.io/address/0x6d0bB9B6cE385e28EA4EBb7d76dCb3A1AaF7BC4b"  target="_blank">
                      <button 
                        className="text-xs border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] py-1 sm:py-2 px-2 sm:px-4 rounded-sm">
                        VIEW SC
                      </button> 
                    </Link>
                    <Link href="https://etherscan.io/tx/0xbe05e3f8ee8f936bf368d335d59a34feeedc5511bf524df81691019cd27eb4d9"  target="_blank">
                      <button 
                        className="text-xs border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] py-1 sm:py-2 px-2 sm:px-4 rounded-sm">
                        VIEW TGE
                      </button> 
                    </Link>      
                  </div>
                </div>
              </div>
              <p className="text-xs xs:text-base">
                CREAT’OR is a blockchain-based crowdfunding platform that connects investors with 
                businesses seeking equity financing. It leverages the Ethereum blockchain to offer 
                a decentralized, transparent, and efficient investment process.
              </p>
              <p className="text-xs xs:text-base">
                Unlike traditional crowdfunding platforms, CREAT’OR integrates blockchain
                technology to offer enhanced security, transparency, and global
                accessibility. It allows for tokenization of investments, providing liquidity
                and ease of transferability of assets.
              </p>
              <Link href="https://whitepaper.creat-or.io/tokenomics-and-ico-stages" target="_blank" className="flex justify-center">
                <GreenButton title="LEARN MORE"/>
              </Link>
            </div>
          </div>
        </div>

        <div className="container m-auto 2xl:max-w-[1440px] px-4">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">ICO Stages</p>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 sm:gap-8 pt-8 lg:pt-12 mx-0 lg:mx-24 xl:mx-0">
            <div 
              className="border-2 border-[#52F2A8] rounded-2xl"
              style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
              }}
            >
              <table className="w-full table-fixed sm:table-auto">
                <thead>
                  <tr className="border-b-2 border-[#52F2A8] text-xs xs:text-sm sm:text-base md:text-xl text-center">
                    <th className="border-r-2 border-[#52F2A8] font-normal px-2 xs:px-8 lg:px-12 py-3">Stages</th>
                    <th className="border-r-2 border-[#52F2A8] font-normal px-2 xs:px-8 lg:px-12">Prices</th>
                    <th className="border-r-2 border-[#52F2A8] font-normal px-2 xs:px-8 lg:px-12">Allocations</th>
                    <th className="font-normal px-2 xs:px-8 lg:px-12">Discount From Public Price</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Beta</td>
                    <td className="border-r-2 border-[#52F2A8]">0.017</td>
                    <td className="border-r-2 border-[#52F2A8]">35,066,667</td>
                    <td>85.83%</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Stage One</td>
                    <td className="border-r-2 border-[#52F2A8]">0.034</td>
                    <td className="border-r-2 border-[#52F2A8]">26,666,667</td>
                    <td>71.67%</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Stage Two</td>
                    <td className="border-r-2 border-[#52F2A8]">0.078</td>
                    <td className="border-r-2 border-[#52F2A8]">26,933,333</td>
                    <td>35.00%</td>
                  </tr>
                  <tr className="text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Stage Three</td>
                    <td className="border-r-2 border-[#52F2A8]">0.120</td>
                    <td className="border-r-2 border-[#52F2A8]">6,666,667</td>
                    <td>0.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div 
              className="w-full xl:w-[500px] flex flex-col gap-2 md:gap-4 border-2 border-[#52F2A8] rounded-2xl p-4 md:p-8"
              style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
              }}
            >
              <p className="text-sm sm:text-base md:text-xl">
                Beta to Stage 3: Detailed token offering stages with pricing, total tokens available, and bonuses.
              </p>
              <p className="text-sm sm:text-base md:text-xl">
                Timeline: 16-week timeline from Beta launch to Stage Three.
              </p>              
            </div>
          </div>
        </div>

        <div className="container m-auto 2xl:max-w-[1440px] px-4 py-12 lg:py-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">Lockups & Vesting</p>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 sm:gap-8 pt-8 lg:pt-12 mx-0 lg:mx-24 xl:mx-0">            
            <div 
              className="w-full xl:w-[500px] flex flex-col gap-2 md:gap-4 2xl:gap-6 border-2 border-[#52F2A8] rounded-2xl p-8 2xl:px-8 2xl:py-12"
              style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
              }}
            >
              <p className="text-sm sm:text-base md:text-xl">
                Purchased ICO Tokens released equally over lock up periods shown.
              </p>
              <p className="text-sm sm:text-base md:text-xl">
                Lockup Periods:<br/>
                A timeframe when investors can’t sell or trade their tokens, set by the
                project team to prevent early dumping and maintain stability after a launch
                or token sale.
              </p>    
              <p className="text-sm sm:text-base md:text-xl">
                Vesting Periods:<br/>
                This refers to the timeframe and mechanism of token being released.
                Vesting in crypto involves gradually gaining full ownership rights to tokens
                over a specified period, typically to incentivize long-term commitment and
                prevent immediate selling and maintaining stability of the token.
              </p>          
            </div>
            <div 
              className="border-2 border-[#52F2A8] rounded-2xl"
              style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
              }}
            >
              <table className="w-full table-fixed lg:table-auto">
                <thead>
                  <tr className="border-b-2 border-[#52F2A8] text-xs xs:text-sm sm:text-base md:text-xl text-center">
                    <th className="border-r-2 border-[#52F2A8] font-normal px-2 xs:px-8 lg:px-20 py-3">Allocations</th>
                    <th className="border-r-2 border-[#52F2A8] font-normal px-2 xs:px-8 lg:px-20">Lockups (Month)</th>
                    <th className="font-normal px-2 xs:px-8 lg:px-20">Vesting (Month)</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Beta</td>
                    <td className="border-r-2 border-[#52F2A8]">10</td>
                    <td>18</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Stage One</td>
                    <td className="border-r-2 border-[#52F2A8]">8</td>
                    <td>16</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Stage Two</td>
                    <td className="border-r-2 border-[#52F2A8]">6</td>
                    <td>12</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Stage Three</td>
                    <td className="border-r-2 border-[#52F2A8]">0</td>
                    <td>6</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Team</td>
                    <td className="border-r-2 border-[#52F2A8]">18</td>
                    <td>30</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Reserve & Treasury</td>
                    <td className="border-r-2 border-[#52F2A8]">12</td>
                    <td>48</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Legal & Advisory</td>
                    <td className="border-r-2 border-[#52F2A8]">18</td>
                    <td>30</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Liquidity & Listing</td>
                    <td className="border-r-2 border-[#52F2A8]">-</td>
                    <td>-</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Staking</td>
                    <td className="border-r-2 border-[#52F2A8]">0</td>
                    <td>6</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Burn Event</td>
                    <td className="border-r-2 border-[#52F2A8]">3</td>
                    <td>12</td>
                  </tr>
                  <tr className="border-b-2 border-[#52F2A8] text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Partnership & Marketing</td>
                    <td className="border-r-2 border-[#52F2A8]">12</td>
                    <td>24</td>
                  </tr>
                  <tr className="text-xs sm:text-sm md:text-base">
                    <td className="border-r-2 border-[#52F2A8] py-2">Bonus Rewards</td>
                    <td className="border-r-2 border-[#52F2A8]">6</td>
                    <td>24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#1d1d1d] opacity-[77%]"></div>
          <div className="container m-auto 2xl:max-w-[1440px] px-4 relative">
            <div className="flex flex-col items-center py-8 sm:py-12">
              <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">Planned Exchange Listings</p>
              <div className="w-full flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-8 md:gap-16 py-8 lg:py-12">
                  <Image src={Gateio} alt="" className="w-32 sm:w-40 2xl:w-56"/>
                  <Image src={Uniswap} alt="" className="w-40 sm:w-52 2xl:w-72"/>
              </div>
              <p className="text-sm xs:text-base md:text-xl 2xl:text-2xl text-center px-0 lg:px-32">
                Following our ICO’s successful conclusion, we plan to list on Uniswap
                (DEX) and Gate.io (CEX) between August 1st and 5th, 2024. These listings
                will enhance liquidity and ensure global accessibility.
              </p>
            </div>
          </div>          
        </div>

        <div className="flex flex-col items-center container m-auto 2xl:max-w-[1440px] px-4 py-12 lg:py-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">Disrupting WEB3 Equity Crowdfunding</p>
          <div className="pt-8 lg:pt-12">
            <div 
              className="border-2 border-[#52F2A8] rounded-2xl py-4 lg:py-8 px-0 lg:px-4"
              style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
              }}
            >
              <table className="w-full">
                <thead>
                  <tr className="text-xs xs:text-sm sm:text-base md:text-xl text-center">
                    <th className="py-4 lg:py-8"></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={CreatorLogoFull} alt="" className="w-20 2xl:w-32"/></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={Vent} alt="" className="w-20 2xl:w-full"/></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={Tecra} alt="" className="w-20 2xl:w-full"/></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={Gitcoin} alt="" className="w-20 2xl:w-full"/></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={LenderKit} alt="" className="w-20 2xl:w-full"/></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={WeFounder} alt="" className="w-20 2xl:w-full"/></th>
                    <th className="px-1 sm:px-2 2xl:px-4"><Image src={RealBlocks} alt="" className="w-20 2xl:w-full"/></th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="text-xs lg:text-base 2xl:text-xl py-2 lg:py-4 text-end px-0 2xl:px-4">WEB3</td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                  </tr>     
                  <tr>
                    <td className="text-xs lg:text-base 2xl:text-xl py-2 lg:py-4 text-end px-0 2xl:px-4">Crypto Payments</td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                  </tr> 
                  <tr>
                    <td className="text-xs lg:text-base 2xl:text-xl py-2 lg:py-4 text-end px-0 2xl:px-4">Token Availability</td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                  </tr> 
                  <tr>
                    <td className="text-xs lg:text-base 2xl:text-xl py-2 lg:py-4 text-end px-0 2xl:px-4">Staking</td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                  </tr> 
                  <tr>
                    <td className="text-xs lg:text-base 2xl:text-xl py-2 lg:py-4 text-end px-0 2xl:px-4">Equity P2P Platform</td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Check} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                    <td><div className="flex justify-center"><Image src={Cross} alt="" className="w-3 sm:w-5 lg:w-8 2xl:w-auto"/></div></td>
                  </tr>            
                </tbody>
              </table>
            </div> 
          </div>           
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#1d1d1d] opacity-[77%]"></div>          
          <div className="container m-auto 2xl:max-w-[1440px] px-4 relative pt-12 lg:pt-16">
            <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">Go Pre-Register on Creat-or’s StakeXchange Now</p>
            <div className="flex flex-col justify-center items-center gap-8 py-8">
              <Image src={StakeXchange} alt="" className="w-[320px] xs:w-[400px] md:w-[520px] lg:w-[600px] xl:w-[720px] 2xl:w-[800px]"/>
              <Link href="https://stakexchange.io" target="_blank" className="flex justify-center z-10">
                <GreenButton title="OPEN DEMO"/>
              </Link> 
            </div>
            
          </div>        
          <Image src={GiveawayBGLine} alt="" className="relative -mt-8 md:-mt-16 lg:-mt-20"/>  
          <div className="container m-auto 2xl:max-w-[1440px] px-4 relative -mt-4 sm:-mt-8">
                    
            <div className="flex flex-col xl:flex-row justify-between gap-4 pb-12 lg:pb-16">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-4 py-0 xl:py-8 2xl:py-16">
                <StepCard title="Comprehensive Listings" content="Access detailed information on each investment opportunity, including Company Name, Equity Stack Available (%), Valuation, and Sector."/>   
                <StepCard title="Negotiation Opportunities" content="Propose your own price with the Bid Now option, enabling personalized investment opportunities."/> 
                <StepCard title="Immediate Transactions" content="Utilize the Buy Now Price featur for swift and straightforward share acquisitions."/>   
                <StepCard title="Diverse Portfolio Expansion" content="Invest across various industries and emerging sectors to diversify and strengthen your portfolio."/>        
              </div>
              <div 
                className="w-full xl:w-[1200px] flex flex-col gap-2 lg:gap-4 border-2 border-[#52F2A8] rounded-2xl p-2 xs:p-4"
                style={{
                background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
                }}
              >
                <p className="text-xl sm:text-2xl xl:text-3xl">Unlock Your Investment Potential</p>
                <p className="text-sm lg:text-base">Creat’or’s StakeXchange offers a unique platform where investors can find detailed, transparent listings, and engage in flexible transactions.</p>            
                <p className="text-sm lg:text-base">Whether you’re looking to make quick acquisitions or prefer to negotiate terms, our marketplace caters to your investment style.</p>
                <p className="text-sm lg:text-base">With opportunities spanning diverse industries, StakeXchange empowers you to expand your portfolio and capitalize on emerging trends.</p>
                <p className="text-sm lg:text-base">Join us today to transform your investment strategy and unlock your full financial potential. Head on over to get a ’Sneak Peak’ of our P2P Crowdfunding Platform to be released in Q3 2024.</p>
              </div> 
            </div>
          </div>
        </div>
        
        <div id="benefits" className="flex flex-col items-center container m-auto 2xl:max-w-[1440px] px-4 pt-12 lg:pt-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">CRET Benefits</p>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-12 xl:gap-x-16 gap-y-4 xl:gap-y-8 pt-8 lg:pt-12">
            <BenefitCard 
              title="Equity Funding" 
              content="Creator helps every entrepreneur and Business find funding, from starting small ($5k) to scaling big ($5m). Seed funding, early investment, research grants, growth capital, we’ve got it all." 
              img={1}
            />
            <BenefitCard 
              title="Flexible Listing Fees" 
              content="Our sliding scale fees are significantly reduced for businesses holding CRET tokens, making it easier for you to raise funds." 
              img={2}
            />
            <BenefitCard 
              title="Marketing Boost" 
              content="Get noticed! CREAT’OR offers marketing packages to boost your project on social media and our platform, attracting more investors." 
              img={3}
            />
            <BenefitCard 
              title="Advisory Circle" 
              content="Get expert advice for your project with CREAT’OR’s Advisory Circle. Industry pros will help you succeed!" 
              img={4}
            />
            <BenefitCard 
              title="Milestone Escrow" 
              content="Build investor trust with secure payments. Raise funds that are released upon achieving milestones, keeping investors confident." 
              img={5}
            />
            <BenefitCard 
              title="Impact Fund" 
              content="We support innovative companies making a positive impact with reduced fees and extra funding." 
              img={6}
            />
            <BenefitCard 
              title="Incubator Access" 
              content="Fast-track your start-up! Our incubator program provides mentors, resources, and get you investor ready to help you launch and grow." 
              img={7}
            />
            <BenefitCard 
              title="Accelerator Program" 
              content="Get fast growth for your project with CREAT’OR’s Accelerator. Funding, partnerships, and a strong network, all to take you to the next level." 
              img={8}
            />
            <BenefitCard 
              title="Leaderboard Rewards" 
              content="Annually recognizing projects that make significant social contributions. Chosen winners benefit from marketing support, direct funding opportunities, and spotlight placement on our platform." 
              img={9}
            />
          </div>
          <Link href="https://whitepaper.creat-or.io/benefits-for-cret-token-holders" target="_blank" className="pt-8">
            <GreenButton title="LEARN MORE"/>
          </Link>          
        </div>

        <div id="roadmap" className="container m-auto 2xl:max-w-[1440px] px-4 pt-12 lg:pt-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">Roadmap</p>
          <div className="pt-8 hidden md:block">            
            <RoadmapSlider
              roadmapPhases={[
                  { phase: <RoadMapPhase order="1" title="Pre-Development & Planning" content1="Selection of Blockchain Platform" content2="Tokenomics and Smart Contract Specifications"/> },
                  { phase: <RoadMapPhase order="2" title="Smart Contract Development" content1="Token Smart Contract" content2="ICO Smart Contract"/> },
                  { phase: <RoadMapPhase order="3" title="Security Measures" content1="Token Audit" content2="Smart Contract Testing"/> },
                  { phase: <RoadMapPhase order="4" title="Website Development" content1="Landing Page & Essential Content" content2="Integration and Security"/> },
                  { phase: <RoadMapPhase order="5" title="User Interface & Experience" content1="Design and Responsiveness" content2="Presale Platform Implementation"/> },
                  { phase: <RoadMapPhase order="6" title="Compliance & Security Enhancement" content1="Compliance Checks" content2="Post-Sale Features"/> },
                  { phase: <RoadMapPhase order="7" title="Technical Optimization" content1="Scalability and Performance" content2="Backup and Analytics"/> },
                  { phase: <RoadMapPhase order="8" title="Launch and Beyond" content1="Pre-Launch Marketing" content2="Launch Marketing" content3="Post-Launch Management"/> },
                  { phase: <RoadMapPhase order="9" title="ICO Conclusion and Token Distribution" content1="Conclusion of ICO" content2="Token Distribution"/> },
                  { phase: <RoadMapPhase order="10" title="Initial Exchange Listing and Market Preparation" content1="Exchange Listings" content2="Engagement of Market Makers"/> },
                  { phase: <RoadMapPhase order="11" title="Platform Testing and Implementation" content1="Platform UI, Functionality, & Security Audit" content2="Alpha & Beta Testing"/> },                  
              ]}
            />
          </div>
          <div className="pt-8 block md:hidden">
            <div className="flex flex-col gap-4">
              <RoadMapPhase order="1" title="Pre-Development & Planning" content1="Selection of Blockchain Platform" content2="Tokenomics and Smart Contract Specifications"/> 
              <RoadMapPhase order="2" title="Smart Contract Development" content1="Token Smart Contract" content2="ICO Smart Contract"/> 
              <RoadMapPhase order="3" title="Security Measures" content1="Token Audit" content2="Smart Contract Testing"/>
              <RoadMapPhase order="4" title="Website Development" content1="Landing Page & Essential Content" content2="Integration and Security"/>
              <RoadMapPhase order="5" title="User Interface & Experience" content1="Design and Responsiveness" content2="Presale Platform Implementation"/> 
              <RoadMapPhase order="6" title="Compliance & Security Enhancement" content1="Compliance Checks" content2="Post-Sale Features"/>
              <RoadMapPhase order="7" title="Technical Optimization" content1="Scalability and Performance" content2="Backup and Analytics"/> 
              <RoadMapPhase order="8" title="Launch and Beyond" content1="Pre-Launch Marketing" content2="Launch Marketing" content3="Post-Launch Management"/> 
              <RoadMapPhase order="9" title="ICO Conclusion and Token Distribution" content1="Conclusion of ICO" content2="Token Distribution"/> 
              <RoadMapPhase order="10" title="Initial Exchange Listing and Market Preparation" content1="Exchange Listings" content2="Engagement of Market Makers"/> 
              <RoadMapPhase order="11" title="Platform Testing and Implementation" content1="Platform UI, Functionality, & Security Audit" content2="Alpha & Beta Testing"/>               
            </div>
          </div>
        </div>

        <div className="container m-auto 2xl:max-w-[1440px] px-4 py-12 lg:py-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">How To Buy CRET Tokens</p>
          <div className="flex flex-col xl:flex-row justify-between gap-8 pt-8">
            <div className="flex flex-col gap-4 2xl:gap-6">
              <div 
                className="w-full xl:w-[400px] p-2 xs:p-4 border-2 border-[#52F2A8] rounded-xl"
                style={{
                  background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
                }}
              >
                <p className="text-lg sm:text-2xl">Step 1</p>
                <p className="text-base sm:text-xl">Connet your Wallet</p>
                <p className="text-sm sm:text-base pt-2">Simply click the &quot;Connect Wallet&quot; button on the purchase panel or on the nav bar at the top of the page.</p>
              </div>
              <div 
                className="w-full xl:w-[400px] p-2 xs:p-4 border-2 border-[#52F2A8] rounded-xl"
                style={{
                  background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
                }}
              >
                <p className="text-lg sm:text-2xl">Step 2</p>
                <p className="text-base sm:text-xl">Purchase Details</p>
                <p className="text-sm sm:text-base pt-2">Enter the amount of CRET tokens you wish to purchase.</p>
              </div>
              <div 
                className="w-full xl:w-[400px] p-2 xs:p-4 border-2 border-[#52F2A8] rounded-xl"
                style={{
                  background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
                }}
              >
                <p className="text-lg sm:text-2xl">Step 3</p>
                <p className="text-base sm:text-xl">Confirm Transaction</p>
                <p className="text-sm sm:text-base pt-2">Click the &quot;Purchase Now&quot; button on the purchase panel and confirm the transaction in your DeFi wallet.</p>
              </div>
            </div>
            <div className="w-full flex">
              <video className="w-full" controls>
                <source src="https://dhyqqgboo8c5wh9u.public.blob.vercel-storage.com/webapp/video/Purchase_Tutorial_V3b-msNmfJWAsbleVMkPy4VwhjY5DjiKyE.mp4" type="video/mp4" />
              </video>  
            </div>                        
          </div>
        </div>

        <div id="founders" className="relative">
          <div className="absolute inset-0 bg-[#1d1d1d] opacity-[77%]"></div>
          <div className="container m-auto 2xl:max-w-[1440px] px-4 relative">
            <div className="flex flex-col items-center py-12 lg:py-16">
              <p className="text-3xl md:text-4xl 2xl:text-5xl text-center">CRET Founders</p>
              <div className="flex flex-col sm:flex-row gap-16 lg:gap-32 pt-8 lg:pt-12">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="bg-[#1d1d1d] p-4">
                    <Image src={James} alt="James" className="w-48 lg:w-72 rounded-full"/>
                  </div>                  
                  <div className="flex justify-center items-center gap-4">
                    <Link href="https://www.linkedin.com/in/james-galler-733614280/" target="_blank">
                      <Image src={LinkedIn} alt="" className="w-10 lg:w-auto"/>
                    </Link>                    
                    <div>
                      <p className="text-2xl lg:text-4xl">James Galler</p>
                      <p className="text-sm lg:text-base text-[#52F2A8] text-left">Co-Founder & Managing Director</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="bg-[#1d1d1d] p-4">
                    <Image src={Terry} alt="Terry" className="w-48 lg:w-72 rounded-full"/>
                  </div>                  
                  <div className="flex justify-center items-center gap-4">
                    <Link href="https://www.linkedin.com/in/terry-markham-a3886430/" target="_blank">
                      <Image src={LinkedIn} alt="" className="w-10 lg:w-auto"/>
                    </Link>                    
                    <div>
                      <p className="text-2xl lg:text-4xl">Terry Markham</p>
                      <p className="text-sm lg:text-base text-[#52F2A8] text-left">Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>

        <div className="pt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-[#1d1d1d] opacity-[77%]"></div>
            <div className="container m-auto 2xl:max-w-[1440px] px-4 py-12 lg:py-16 relative">
              <div className="flex flex-col items-center gap-8 xl:gap-16">
                <p className="text-3xl md:text-4xl 2xl:text-5xl">PARTNERS</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-start lg:justify-items-center gap-y-8 xl:gap-y-0 gap-x-8 xl:gap-x-16">
                    <Image src={SolidProof} alt="" className="w-[220px] xl:w-[260px]"/>
                    <Image src={Coinband} alt="" className="w-[220px] xl:w-[260px]"/>
                    <Image src={GotBit} alt="" className="w-[220px] xl:w-[260px]"/>
                </div>
              </div>
            </div>          
          </div>
        </div>

        <div id="faqs" className="flex flex-col items-center container m-auto 2xl:max-w-[1440px] px-4 pt-12 lg:pt-16">
          <p className="text-3xl md:text-4xl 2xl:text-5xl">FAQs</p>
          <div className="flex flex-col gap-4 sm:gap-6 pt-4 sm:pt-8">
            <FAQsItem 
              title="What is CREAT’OR (CRET)?" 
              content="CREAT’OR is a blockchain-based crowdfunding platform that connects
              investors with businesses seeking equity financing. It leverages the
              Ethereum blockchain to offer a decentralized, transparent, and efficient
              investment process."
            />
            <FAQsItem 
              title="How does CREAT’OR differ from traditional crowdfunding platforms?" 
              content="Unlike traditional crowdfunding platforms, CREAT’OR integrates blockchain
              technology to offer enhanced security, transparency, and global
              accessibility. It allows for tokenization of investments, providing liquidity and
              ease of transferability of assets."
            />
            <FAQsItem 
              title="What blockchain does CREAT’OR operate on?" 
              content="CREAT’OR mainly functions on the Ethereum blockchain, leveraging its
              solid infrastructure and broad acceptance to facilitate ERC-20 tokens.
              Additionally, CREAT’OR extends its operations to both the Ethereum
              Mainnet and the Arbitrum One networks, aiming to mitigate the operational
              expenses associated with gas fees."
            />
            <FAQsItem 
              title="Who can invest in CREAT’OR?" 
              content="CREAT’OR is open to a broad audience, including retail investors, venture
              capitalists, and cryptocurrency enthusiasts. Some offerings may have
              regulatory restrictions; thus, users are advised to check the eligibility
              criteria for each investment opportunity."
            />
            <FAQsItem 
              title="What measures are in place to ensure the security of investments?" 
              content="CREAT’OR prioritizes security by conducting thorough smart contract
              audits, implementing robust cybersecurity measures, and ensuring
              compliance with regulatory standards."
            />
            <FAQsItem 
              title="What is the total supply of CRET tokens?" 
              content="The total supply of CRET tokens is fixed at 500 million, with allocations for
              presale, team, marketing, reserves, and other operational necessities as
              detailed in the Tokenomics section of the whitepaper."
            />
            <FAQsItem 
              title="If I invest in a company, how long until I can unlock my investment?" 
              content="CREAT’OR has an internal trading platform called StakeXchange, investors can 
              potentially unlock their investment sooner than the initial terms by using StakeXchange. 
              This feature allows investors to sell their interests to others in the vibrant StakeXchange 
              marketplace, offering flexibility to adjust investment strategies."
            />
          </div>
          <Link href="https://whitepaper.creat-or.io/frequently-asked-questions-faqs" target="_blank" className="pt-8">
            <GreenButton title="LEARN MORE"/>
          </Link>
        </div>

        <div className="pt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-[#1d1d1d] opacity-[77%]"></div>
            <div className="container m-auto 2xl:max-w-[1440px] px-4 relative">
              <div className="flex flex-col items-center gap-8 xl:gap-16 py-8 xs:py-12">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-1 xs:gap-1.5 xl:gap-2 text-base xs:text-xl xl:text-3xl">
                  <p className="flex items-end gap-1 xs:gap-2 xl:gap-3">Connect with <Image src={CreatorLogoFull} alt="" className="w-20 xs:w-24 xl:w-36"/> for </p>
                  <p className="text-center">more information and join our community</p>
                </div>                 
                <div className="w-full flex justify-center gap-4 xs:gap-8">
                    <Link href="https://twitter.com/Creator_CRET" target="_blank">
                      <Image src={X} alt="X" className="w-10 xs:w-16 xl:w-auto"/>
                    </Link>
                    <Link href="https://t.me/creator_community" target="_blank">
                      <Image src={Telegram} alt="Telegram" className="w-10 xs:w-16 xl:w-auto"/>
                    </Link>
                    <Link href="https://discord.com/invite/jdUeq3Se3k" target="_blank">
                      <Image src={Discord} alt="Discord" className="w-10 xs:w-16 xl:w-auto"/>
                    </Link>
                    <Link href="https://www.youtube.com/@Creator-CRET" target="_blank">
                      <Image src={Youtube} alt="Youtube" className="w-10 xs:w-16 xl:w-auto"/>
                    </Link>                    
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>     
    </div>    
  );
}

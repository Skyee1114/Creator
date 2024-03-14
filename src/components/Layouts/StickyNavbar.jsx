import { Link } from 'react-router-dom';
import { Logo } from '../../assets/img';

const StickyNavbar = () => {
  
    const navList = (
        <ul className="flex gap-4 font-medium text-[#174034]">
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Home</Link>
            </li>
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Explore</Link>
            </li>
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Pages</Link>
            </li>
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Investor Advantages</Link>
            </li>
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Advantages for Business</Link>
            </li>      
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">News</Link>
            </li> 
            <li>
                <Link to="/" className="border border-[#52F2A8] rounded-full px-6 py-1">Contact</Link>
            </li> 
        </ul>
    )
    return (        
        <nav className="sticky top-0 px-6 sm:px-0 bg-white z-[999] shadow-md">
            <div className="flex justify-between m-auto items-center container max-w-[1300px] py-3">
                <Link to="/">
                    <img src={Logo} alt="logo" className="h-16 sm:h-20" />
                </Link>                      
                <div className="hidden lg:block">{navList}</div>
            </div>
        </nav>
    )
}

StickyNavbar.displayName = 'StickyNavbar'

export default StickyNavbar

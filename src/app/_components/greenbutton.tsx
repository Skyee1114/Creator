export function GreenButton({title}: {title: string}) {

    return (      
        <button 
            className="w-[240px] xs:w-[320px] sm:w-[400px] text-sm xs:text-base border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] py-2 xs:py-4 rounded-sm">
            {title}
        </button> 
    );
}

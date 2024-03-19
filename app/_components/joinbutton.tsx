export function JoinButton() {

    return (        
        <div className={`relative inline-flex items-center justify-start px-16 py-6 overflow-hidden font-medium transition-all bg-[#52f2a8] hover:bg-[#52f2a8] group`}>
            <span className={`w-72 h-72 rotate-[-90deg] bg-white absolute top-0 right-0 translate-x-full ease-out duration-500 transition-all -translate-y-full mt-4 mr-4 group-hover:mr-0 group-hover:mt-32 group-hover:translate-x-0`}></span>
            <span className={`relative w-full text-left text-[#174034] transition-colors duration-300 ease-in-out group-hover:text-[#1b1f2e] uppercase`}>join our ico now</span>
        </div>
    )
}

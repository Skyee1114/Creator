import Image from "next/image"

interface IProps {
    link: string
    onClose: () => void;
}

export function UsdtModal({link, onClose}: IProps) {

  
    return (      
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
            <div className="bg-[#174034] animate-slide-down px-0 xs:px-4 sm:px-8 pt-10 xs:pt-16 pb-4 sm:pb-8 relative w-full sm:w-[600px] lg:w-[720px] 2xl:w-[800px] mx-4 sm:mx-0">
                <button onClick={onClose} className="absolute top-2 xs:top-4 right-2 xs:right-4 border border-[#52F2A8] px-1 xs:px-2 transition-colors duration-300 ease-in-out hover:bg-[#52F2A8] text-xs xs:text-base">X</button>
                <iframe src={link} style={{ border: 'none' }} />                                 
            </div>
        </div>       
    );
}

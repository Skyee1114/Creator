interface ModalProps {
    onClose: () => void;
}

export function CardModal({onClose}: ModalProps) {

    const handleBuyEthereumClick = () => {
        window.open('https://portfolio.metamask.io/buy/build-quote', '_blank');
    };
  
    return (      
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 h-[110vh]"
            onClick={onClose}
        >
            <div 
                className="bg-[#174034] animate-slide-down px-0 xs:px-4 sm:px-8 pt-10 xs:pt-16 pb-4 sm:pb-8 relative w-full sm:w-[600px] lg:w-[720px] xl:w-[800px] mx-4 sm:mx-0"
                onClick={(e) => e.stopPropagation()} 
            >
                <button onClick={onClose} className="absolute top-2 xs:top-4 right-2 xs:right-4 border border-[#52F2A8] px-1 xs:px-2 transition-colors duration-300 ease-in-out hover:bg-[#52F2A8] text-xs xs:text-base">X</button>
                <div className="flex flex-col items-center gap-4 sm:gap-8">
                    <video className="w-full" controls>
                        <source src="https://dhyqqgboo8c5wh9u.public.blob.vercel-storage.com/webapp/video/metamask-buy-c-I1Z7p5yIQVyMu3bnQLNTJ096lTA8In.mp4" type="video/mp4" />
                    </video>  
                    <button 
                        onClick={handleBuyEthereumClick}
                        className="w-[240px] lg:w-[320px] xl:w-[400px] text-sm xl:text-base border-2 border-[#52F2A8] transition-colors duration-300 ease-in-out bg-[#174034] text-white hover:text-[#174034] hover:bg-[#52F2A8] py-2 xl:py-4 rounded-sm">
                        BUY ETHEREUM
                    </button>  
                </div>                              
            </div>
        </div>       
    );
}

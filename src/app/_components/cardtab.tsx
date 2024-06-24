export function CardTab({usd}: {usd: string}) {
  
    return (      
        <div className="flex flex-col items-start border-r-2 border-b-2 border-l-2 border-[#52F2A8] p-2 rounded-b-sm">
            <p className="text-sm text-[#919191]">Amount In USD you pay</p>
            <input 
                type="text" 
                placeholder="0"
                value={usd}
                disabled={true}
                className="text-white bg-transparent outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />
        </div>        
    );
}

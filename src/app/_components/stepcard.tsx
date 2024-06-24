
interface IProps {
    title: string,
    content: string
}

export function StepCard({title, content}: IProps) {

    return (      
        <div 
            className="flex flex-col justify-between border-2 border-[#52F2A8] rounded-xl p-2 xs:p-4"
            style={{
            background: 'linear-gradient(225deg, rgba(23, 64, 52, 0.58) 40%, rgba(29, 29, 29, 1) 60%)'
            }}
        >
            <p className="text-xl sm:text-2xl xl:text-3xl">{title}</p>
            <p className="text-sm lg:text-base">{content}</p>                  
        </div> 
    );
}

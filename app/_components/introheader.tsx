import Link from "next/link";

interface IProps {
    title: string,
    content: string,
}

export function IntroHeader({title, content}: IProps) {

    const paragraphs = content.split(/(?<=\.) /);
  
    return (
        <div className="bg-[url('./../assets/img/bgnews2.jpg')] bg-white bg-cover bg-no-repeat">
            <div className='container m-auto 2xl:max-w-[1300px] px-4 xs:px-0 py-32 relative'>
                <div>
                    <p className='font-bold text-6xl leading-[80px] w-[1100px] text-white'>{title}</p>
                    <div className="pt-4 prose">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-2xl  text-white">{paragraph}</p>
                        ))}       
                    </div>
                    {/* <p className="text-2xl  text-white pt-4">{content}</p> */}
                </div>                
                <div className="flex justify-center items-center gap-2 absolute right-0 bottom-0 bg-white px-6 h-[60px]">
                    <Link href="/" className="-pb-4 hover:border-b hover:border-[#838694]">
                        <p className="font-medium text-[#838694]">Home</p>
                    </Link>
                    <p className="font-medium text-[#838694]">.</p>
                    <p className="font-medium text-[#838694]">{title}</p>
                </div>                                   
            </div>   
        </div>
    )
}


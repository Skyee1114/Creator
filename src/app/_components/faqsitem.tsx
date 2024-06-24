'use client';

import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

interface IProps {
  title: string;
  content: string;
}

function Icon({ open }: { open: boolean }) {
  return (
    <svg
        className={`${open ? "rotate-180" : ""} h-4 w-4 transition-transform`}
        width="17.6"
        height="10.4"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M1.42773 1.28296L11.2139 11.0691L21 1.28296"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>

  );
}

export function FAQsItem({ title, content }: IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return ( 
        <Accordion
            className="flex flex-col items-center"
            open={isOpen}
            icon={<Icon open={isOpen} />}  
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}        
        >
            <AccordionHeader
                className="w-full sm:w-[600px] lg:w-[800px] border-2 border-[#52F2A8] rounded-2xl p-4 lg:p-5 font-normal text-sm sm:text-base lg:text-lg"
                style={{
                    background: 'linear-gradient(240deg, rgba(23, 64, 52, 0.8) 80%, rgba(29, 29, 29, 0.8) 100%)'
                }}
                onClick={toggleOpen}  
                placeholder={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeaveCapture={undefined}          
            >
                {title}
            </AccordionHeader>
            <AccordionBody
                className="w-full sm:w-[600px] lg:w-[800px] font-normal text-sm sm:text-base lg:text-lg text-white px-4"
            >
                {content}
            </AccordionBody>
        </Accordion>
    );
}

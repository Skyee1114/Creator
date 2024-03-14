import { Link } from 'react-router-dom';

const Button = ({buttonColor, buttonhoverColor, titleColor, titlehoverColor, title}) => {

    return (        
        <Link to="/" className={`relative inline-flex items-center justify-start px-16 py-6 overflow-hidden font-medium transition-all bg-${buttonColor === '#ffffff' ? `white` : `[${buttonColor}]`} hover:bg-${buttonColor === '#ffffff' ? `white` : `[${buttonColor}]`} group`}>
            <span className={`w-64 h-64 rotate-[-90deg] bg-${buttonhoverColor === '#ffffff' ? `white` : `[${buttonhoverColor}]`} absolute top-0 right-0 translate-x-full ease-out duration-500 transition-all -translate-y-full mt-4 mr-4 group-hover:mr-0 group-hover:mt-32 group-hover:translate-x-0`}></span>
            <span className={`relative w-full text-left text-${titleColor === '#ffffff' ? `white` : `[${titleColor}]`} transition-colors duration-300 ease-in-out group-hover:text-${titlehoverColor === '#ffffff' ? `white` : `[${titlehoverColor}]`} uppercase`}>{title}</span>
        </Link>
    )
}

Button.displayName = 'Button'

export default Button

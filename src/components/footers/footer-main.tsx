import React from "react"

export function FooterMain() {
    const currentYear = new Date().getFullYear();
    return (
        <footer aria-labelledby="footer-heading">

            <div className="flex justify-center pb-20">
                <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                    &copy; {currentYear} Creat&apos;or. All rights reserved.
                </p>
            </div>

        </footer>
    )
}

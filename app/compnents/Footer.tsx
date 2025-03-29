'use client'

import Link from "next/link"
import Actions from "./Actions"

const Footer = () => {
    
    const scrollTo = (y: number) => {
        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    }

    return (
        <div className="w-full bg-gray-900 h-72 text-white flex flex-col items-center justify-center">
           <div className="flex flex-col justify-center text-center text-lg mb-3">
                <button className="" onClick={() => scrollTo(0)}>
                    עמוד הבית
                </button>
                <button className="" onClick={() => scrollTo(3550)}>
                    מי אנחנו
                </button>
                <button className="" onClick={() => scrollTo(4500)}>
                    סטודנטים מספרים
                </button>
                
           </div>
           <div>
            <Actions />
           </div>
           <Link className="cursor-pointer py-2" href="/privacy">
                מדיניות פרטיות
            </Link>
        </div>
    )
}

export default Footer;
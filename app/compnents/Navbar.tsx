'use client'

import { scrollToElement } from "../utils/utils"

const Navbar = () => {

    return (
        <div className="w-full bg-gray-900 h-16 fixed top-0 z-50 flex justify-center items-center text-white xl:text-xl bg-opacity-50 text-center backdrop-blur-xl">
            <button className="w-28 xl:w-40" onClick={() => scrollToElement("", 0)}>
                עמוד הבית
            </button>
            <button className="w-28 xl:w-40" onClick={() => scrollToElement("about", 100)}>
                מי אנחנו
            </button>
            <button className="w-28 xl:w-40" onClick={() => scrollToElement("reviews", 100)}>
                סטודנטים 
            </button>
        </div>
    )
}

export default Navbar
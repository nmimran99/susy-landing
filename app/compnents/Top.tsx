import Image from "next/image";
import Actions from "./Actions";


export default function Top() {
    return (
        <div className="relative h-screen">
            <Image src="/images/venice4.jpg" height="1000" width="1000" alt="" className="w-screen h-screen absolute top-100 z-0" />
            <div className='w-full flex flex-col items-center text-right absolute z-10 h-screen'>
                <Image src="/images/susy_logo1.png" height="300" width="300" alt="" className="w-60 xl:w-80 xl:mb-4 mt-20 xl:mt-20" />
                <div className='flex justify-center items-center xl:my-4 my-2'>
                    <div className="">
                        <div className="font-bold text-3xl xl:text-5xl py-2 text-center text-white">
                            המכינה ללימודי רפואה של סוזי עמרם
                        </div>
                        <div className="text-2xl xl:text-4xl py-2 text-center text-white">
                            המקפצה שלך ללימודי רפואה, וטרינריה ורפואת שיניים באיטליה
                        </div>
                        <Actions />
                    </div>
                </div>
            </div>
        </div>
    )
}

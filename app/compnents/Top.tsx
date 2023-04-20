import Image from "next/image";


export default function Top() {
    return (
        <div className="relative h-screen">
            <Image src="/images/venice1.jpg" height="1000" width="1000" alt="" className="w-screen h-screen absolute top-100 z-0" />
            <div className='w-full flex flex-col items-center text-right absolute z-10 h-screen'>
                <Image src="/images/susy_logo1.png" height="300" width="300" alt="" className="w-60 xl:w-80 xl:mb-4 mt-8 xl:mt-20" />
                <div className='flex justify-center items-center xl:my-4 my-2'>
                    <div className="">
                        <div className="font-bold text-3xl xl:text-5xl py-2 text-center text-white">
                            המכינה ללימודי רפואה של סוזי עמרם
                        </div>
                        <div className="text-2xl xl:text-4xl py-2 text-center text-white">
                            המקפצה שלך ללימודי רפואה, וטרינריה ורפואת שיניים באיטליה
                        </div>
                        <a className="bg-green-500 text-white w-max rounded-full flex items-center justify-center px-2 py-1.5 mx-auto my-4" href="https://api.whatsapp.com/send?phone=9720587699722">
                            <div className="font-bold px-3">
                                לפרטים נוספים
                            </div>
                            <Image src="/icons/WhatsappLogo.svg" width="32" height="32" alt="wh" />
                        </a>
                        <a className="bg-blue-600 text-white w-max rounded-full flex items-center justify-center px-2 py-1.5 mx-auto my-4" href="https://www.facebook.com/groups/8745802385460525">
                            <div className="font-bold px-3">
                                הצטרפו אצלינו לקבוצת הפייסבוק
                            </div>
                            <Image src="/icons/Facebook.svg" width="32" height="32" alt="wh" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

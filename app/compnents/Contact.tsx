import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-max rounded-3xl rounded-xl mx-auto border rounded-xl relative mb-12 mt-20 shadow-xl">
            <div className="absolute z-0 w-[358px] h-[370px] -top-1 -left-1 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500"></div>
            <div className="flex flex-col justify-center items-center bg-white w-[350px] h-[362px] relative z-10 rounded-lg">
                <Image src="/images/susy.jpg" alt="" width="100" height="100" className="rounded-full w-32 shadow-xl" />
                <div className="py-4 text-xl font-bold w-60 text-center">
                    בואו ללמוד עם סוזי והתחילו את דרכם לעתיד
                </div>
                <a className="bg-green-500 text-white w-max rounded-full flex items-center justify-center px-2 py-1.5 mx-auto my-2" href="https://api.whatsapp.com/send?phone=9720587699722">
                    <Image src="/icons/WhatsappLogo.svg" width="32" height="32" alt="wh" />
                    <div className="font-bold px-3">
                        לפרטים נוספים
                    </div>
                </a>
                <a className="bg-blue-600 text-white w-max rounded-full flex items-center justify-center px-2 py-1.5 mx-auto" href="https://www.facebook.com/groups/8745802385460525">
                    <Image src="/icons/Facebook.svg" width="32" height="32" alt="wh" />
                    <div className="font-bold px-3">
                        הצטרפו אצלינו לקבוצת הפייסבוק
                    </div>
                </a>
            </div>
        </div>
    )
}
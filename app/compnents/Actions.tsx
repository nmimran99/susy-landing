import Image from "next/image";

const Actions = () => {

    return (
        <>
            <a className="bg-green-500 text-white w-max rounded-full flex items-center justify-center px-2 py-1.5 mx-auto my-2" href="https://api.whatsapp.com/send?phone=9720587699722">
                <Image src="/icons/WhatsappLogo.svg" width="32" height="32" alt="wh" />
                <div className="font-bold px-3">
                    לפרטים נוספים
                </div>
            </a>
            <a className="bg-blue-600 text-white w-max rounded-full flex items-center justify-center px-2 py-1.5 mx-auto" href="https://www.facebook.com/groups/8745802385460525">
                <Image src="/icons/Facebook.svg" width="32" height="32" alt="wh" />
                <div className="font-bold px-3">
                    הצטרפו אלינו לקבוצת הפייסבוק
                </div>
            </a>
        </>
    )
}

export default Actions;
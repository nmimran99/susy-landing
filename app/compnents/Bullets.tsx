import Image from "next/image"

const bullets = [{
    content: "שנות ניסיון בהדרכת סטודנטים בשפה האיטלקית ובמקצועות מדעיים",
    num: "15+",
    gradiant: "bg-gradient-to-r from-indigo-500 to-emerald-500"
}, {
    content: "סטודנטים שניגשו בהצלחה למבחנים בשפה האיטלקית ולמבחני הכניסה",
    num: "800+",
    gradiant: "bg-gradient-to-r from-amber-500 to-pink-500"
}, {
    content: "סטודנטים בכיתה לטובת יחס אישי וקשב לצרכי התלמיד",
    num: "10",
    gradiant: "bg-gradient-to-r from-pink-400 to-blue-400"
}]

const bullets2 = [{
    text: "השיעורים מועברים דרך זום ומהסביבה הנוחה של בית התלמיד",
    icon: "/icons/Zoom.svg"
}, {
    text: "שימוש בעזרים אונליין לטובת לימוד, תרגול והעשרת הידע",
    icon: "/icons/Globe.svg"
}, {
    text: "במידת הצורך, ישלחו הקלטות של השיעורים לתלמידים שהפסידו שיעור",
    icon: "/icons/CassetteTape.svg"
}]

export default function Bullets() {
    return (
        <div className="w-full flex flex-col items-center xl:mt-12 mb-12">
            {
                bullets.map((b, i) =>
                    <div className={`flex items-center justify-start text-right rounded-xl xl:w-2/5 m-2 h-32 ${b.gradiant} text-white shadow-xl border`} key={i}>
                        <div className="font-bold text-2xl md:text-5xl px-6 w-1/5">
                            {b.num}
                        </div>
                        <div className="text-lg md:text-xl my-3 px-4 font-semibold">
                            {b.content}
                        </div>
                    </div>
                )
            }
            <div className="mb-12 mt-24 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-xl w-11/12 lg:w-3/5 xl:w-2/5 shadow-xl">
                <div className="m-2 bg-white p-8 rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold">
                        למידה אינטראקטיבית
                    </div>
                    <div className="my-4">
                        {
                            bullets2.map((b, i) =>
                                <div key={i} className="flex items-center lg:text-lg lg:h-10 my-3 lg:my-0">
                                    <Image src={b.icon} alt="" height="32" width="32" className=" my-1"/>
                                    <div className="mx-4">{b.text}</div>
                                </div>)
                        }
                    </div>
                    <div className="my-10">
                        <Image src="/images/screenshots.jpg" alt="" width="800" height="800" className="w-full mx-auto" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

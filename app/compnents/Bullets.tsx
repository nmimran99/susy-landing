
const bullets = [{
    content: "שנות ניסיון בהדרכת סטודנטים בשפה האיטלקית ובמקצועות מדעיים",
    num: "+15",
    gradiant: "bg-gradient-to-r from-indigo-500 to-emerald-500"
}, {
    content: "סטודנטים שניגשו בהצלחה למבחנים בשפה האיטלקית ולמבחני הכניסה",
    num: "+800",
    gradiant: "bg-gradient-to-r from-amber-500 to-pink-500"
}, {
    content: "סטודנטים בכיתה לטובת יחס אישי וקשב לצרכי התלמיד",
    num: "10",
    gradiant: "bg-gradient-to-r from-pink-400 to-blue-400"
}]

export default function Bullets() {
    return (
        <div className="w-full flex flex-col items-center xl:mt-12 mb-12">
            {
                bullets.map((b, i) =>
                    <div className={`flex items-center justify-start text-right rounded-xl xl:w-2/5 m-2 h-32 ${b.gradiant} text-white shadow-xl`} key={i}>
                        <div className="font-bold text-3xl xl:text-5xl px-6 w-1/5">
                            {b.num}
                        </div>
                        <div className="text-xl my-3 px-4 font-semibold">
                            {b.content}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

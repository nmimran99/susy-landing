import Image from "next/image";

const points = [{
    header: "קורס ההכנה הטוב ביותר",
    content: "עם ניסיון רב בהכנה של תלמידים למבחני הכניסה בפקולטות שונות באיטליה, סוזי מציעה תוכנית לימודים מקיפה ומוכחת שתעזור לך לצבור את הביטחון והידע הדרושים כדי להצליח",
    icon: "/icons/BatteryCharging.svg"
},{
    header: "תמיכה לכל אורך הדרך",
    content: "אנחנו מבינים שההכנה למבחנים והגשת המסמכים עלולים להיות מרתיעים, ולכן סוזי שמחה לספק עזרה ותמיכה לאורך כל הדרך",
    icon: "/icons/Lifebuoy.svg"
},{
    header: "כיתות קטנות ויחס אישי",
    content: "השיעורים מועברים דרך הזום בצורה אינטרקטיבית ומרתקת, יחד עם פעילויות, וחומרי לימוד מגוונים",
    icon: "/icons/GraduationCap.svg"
}]

export default function Points() {
    return (
        <div className="w-max rounded-3xl rounded-xl mx-auto px-12 pb-6 xl:py-6">
            <div className='w-full xl:flex items-center text-right'>
                {
                    points.map((p,i) => 
                        <div className="border border-white rounded-xl my-4 text-center w-60 h-80 mx-4 flex flex-col items-center shadow-xl" key={i}>
                            <Image src={p.icon} alt="" width="60" height="60" className="my-2"/>
                            <div className="text-xl p-4">{p.header}</div>
                            <div className="text-md px-2">{p.content}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

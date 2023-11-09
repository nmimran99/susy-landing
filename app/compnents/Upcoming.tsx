const upcomingCourse = [{
    subject: "איטלקית",
    hours: 350
}, {
    subject: "ביולוגיה",
    hours: 80
}, {
    subject: "כימיה",
    hours: 80
}, {
    subject: "מתמטיקה",
    hours: 40
}, {
    subject: "פיזיקה",
    hours: 40
}, {
    subject: "סה\"כ",
    hours: 590
}]

export default function Upcoming() {
    return (
        <div className="direction-rtl border w-11/12 lg:w-3/5 xl:w-2/5 rounded-xl mx-auto shadow-xl">
            <div className="rounded-3xl p-6 mx-auto flex flex-col gap-2">
                <div className="w-full rounded-lg">
                    <div className="bg-blue-600 text-white rounded-t-lg p-2">
                        לניגשים למועד אפריל 2024
                    </div>
                    <div className="p-2 border border-gray-300 rounded-b-lg">
                        <div>
                            קורס מקצועות מדעיים (איטלקית)
                        </div>
                        <div className="flex gap-2 py-2 flex-wrap">
                            <InfoBox 
                                label="תאריך התחלה"
                                text=" 01.01.2024"
                            />
                            <InfoBox 
                                label="תאריך סיום"
                                text=" 09.04.2024"
                            />
                            <InfoBox 
                                label="מספר פעמים בשבוע"
                                text="4-5"
                            />
                            <InfoBox 
                                label="תאריך סיום הרשמה"
                                text="17.12.2023"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg">
                    <div className="bg-violet-600 text-white rounded-t-lg p-2 ">
                        לניגשים למועדי 2025
                    </div>
                    <div className="p-2 border border-gray-300 rounded-b-lg">
                        <div>
                            קורס איטלקית
                        </div>
                        <div className="flex gap-2 py-2 flex-wrap">
                        <InfoBox 
                                label="תאריך התחלה"
                                text="30.04.2024"
                            />
                            <InfoBox 
                                label="תאריך סיום"
                                text="תלוי תאריכי מבחנים"
                            />
                            <InfoBox 
                                label="היקף"
                                text="350 שעות"
                            />
                            <InfoBox 
                                label="תאריך סיום הרשמה"
                                text="31.03.2024"
                            />
                        </div>
                        <div className="text-xs text-gray-700">
                            * קורס מדעים מוצע בהמשך לתוכנית הלימודים באיטלקית כחלק מהזרימה הטבעית להכנה למבחני הכניסה לללימודי רפואה
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:items-start">
                    <div className="text-right">
                        <div className="text-lg font-semibold">
                            הקורסים המוצעים מתחלקים לקורס איטלקית וקורס מקצועות מדעיים
                        </div>
                        <div>
                            קורס האיטלקית הינו קורס בהיקף של 350 שעות, אשר מחולק ל 87~ מפגשים של 4 שעות לכל מפגש.
                        </div>
                        <div>
                            שעות המפגשים הינן 9 בבוקר ועד 12:15 בצהריים.
                        </div>
                        <div>
                            ימי הקורס הינם ב&apos;, ג&apos;, ד&apos;, ה&apos;.
                        </div>
                    </div>
                    <div className="border rounded-xl w-full text-lg rounded-xl py-2 mt-4 xl:w-1/2">
                        <table className="text-right w-full">
                            <thead className="">
                                <tr>
                                    <th className="px-4 w-1/2">נושא</th>
                                    <th className="px-4 w-1/2">מספר שעות</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    upcomingCourse.map((t, i) =>
                                        <tr key={i}>
                                            <td className="px-4">{t.subject}</td>
                                            <td className="px-4">{t.hours}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

function InfoBox({ label, text}: { label: string, text: string }) {
    return (
        <div className="py-1 px-2 border border-gray-300 rounded-lg w-1/3 min-w-[150px]">
            <div className="text-gray-700 text-xs">
                {label}
            </div>
            <div>
               {text}
            </div>
        </div>
    )
}
const upcomingCourse = [{
    subject: "איטלקית",
    hours: 300
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
    hours: 540
}]

export default function Upcoming() {
    return (
        <div className="direction-rtl border w-11/12 lg:w-3/5 xl:w-2/5 rounded-xl mx-auto shadow-xl">
            <div className="rounded-3xl rounded-xl pb-6 xl:py-6 w-11/12  mx-auto">
                <div className="text-right text-3xl font-bold py-4">
                    הקורס הקרוב - 12.6.2023
                </div>
                <div className="flex flex-col xl:items-start">
                    <div className="text-right">
                        <div className="text-lg font-semibold">
                            הקורסים המוצעים מתחלקים לקורס איטלקית וקורס מקצועות מדעיים
                        </div>
                        <div>
                            קורס האיטלקית הינו קורס בהיקף של 300 שעות, אשר מחולק ל 75 מפגשים של 4 שעות לכל מפגש.
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
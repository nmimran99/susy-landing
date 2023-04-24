import Image from "next/image";
import Actions from "./Actions";

export default function Contact() {
    return (
        <div className="rounded-3xl rounded-xl mx-auto border rounded-xl relative mb-12 mt-20 shadow-xl w-11/12 xl:w-2/5 p-8" id="about">
            <div className="flex flex-col justify-center items-center bg-white relative z-10 rounded-lg">
                <Image src="/images/susy.jpg" alt="" width="100" height="100" className="rounded-full w-32 shadow-xl" />
                <div className="py-4 text-xl font-bold w-11/12 text-center">
                    בואו ללמוד עם סוזי והתחילו את דרככם להצלחה
                </div>
                <div>
                    <div>
                    שמי סוזי, נולדתי באיטליה וגרתי שם עד גיל 20. ואז החלטתי לעזוב את הכל ולהגשים את החלום לגור בארץ ישראל.
                    </div>
                    <div>
                    המשכתי את לימודי התואר ( ביולוגיה מורחב ותעודת הוראה) באוניברסיטת בר אילן ולאחר מכן חזרתי לאיטליה למשך ארבע שנים, ולמדתי באוניברסיטה במילאנו.
                    </div>
                    <div>
                    כשחזרתי לארץ מצאתי את העבודה שהכי התאימה לי : ללמד ביולוגיה וכימיה באיטלקית, שפת האם שלי!
                    </div>
                    <div>
                    לקחתי גם קורסים להוראת השפה והתחלתי ללמד גם איטלקית.
                    </div>
                    <div>
                    מאז זו העבודה שלי, וב&quot;ה אני מאד אוהבת אותה!
                    </div>
                    <div>
                    כל התקדמות של סטודנט שלי נותנת לי סיפוק הדיר! אני נהנית מאד ללמד, משתדלת שהשיעורים יהיו תמיד מעניינים ומאתגרים, כיף לי כשאני מרגישה שגם הסטודנטים שלי נהנים תוך כדי למידה.
                    </div>
                    <div>
                    והימים הכי משמחים: ימי קבלת הציונים שלהם! וגם בשנים אחר כך חשוב לי לשמור על קשר ולדעת שהם ממשיכים בהצלחות שלהם!!!
                    </div>
                    <div className="font-bold my-2">
                    היעד שלי: לעזור לכם להגשים את החלום שלכם!!!!
                    </div>
                </div>
                <Actions />
            </div>
        </div>
    )
}
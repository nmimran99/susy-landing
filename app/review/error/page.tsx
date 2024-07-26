"use client"
import { useRouter } from "next/navigation"
import { BiError } from "react-icons/bi";


export default function Error() {

  const router = useRouter();

  return (
    <div className="my-32 text-2xl text-bold flex flex-col items-center text-center justify-center">
      <BiError 
        color="#FF0000"
        size="10em"
      />
     קרתה תקלה בהעלאת חוות הדעת
      <div className="text-gray-600 text-lg my-4">
        אנא פנה לסוזי או לצוות על מנת לתקן את בעיה זו
      </div>
      <button
        className="border-2 border-gray-300 rounded-xl py-2 w-40 text-lg"
        onClick={() => router.replace("/")}
      >
        חזרה לעמוד הבית
      </button>
    </div>
  )
}
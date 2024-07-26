"use client"
import { useRouter } from "next/navigation"
import { FaRegCheckCircle } from "react-icons/fa";


export default function Thankyou() {

  const router = useRouter();

  return (
    <div className="my-32 text-2xl text-bold flex flex-col gap-4 items-center text-center justify-center">
      <FaRegCheckCircle 
        size="10em"
        color="#008000"
      />
      תודה רבה!!!
      <div className="text-gray-600 text-lg">
        חוות הדעת שלך נקלטה בהצלחה
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
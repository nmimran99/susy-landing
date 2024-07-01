"use client"

import { supabase } from "@/supabase/supabaseclient";
import { useState } from "react";
import Image from "next/image"

interface IError {
  type: string,
  text: string
}

interface Details {
  email: string,
  name: string,
  phoneNumber: string,
  hidden: string
}
export default function ContactFields({ className }: { className?: string }) {

  const [details, setDetails] = useState<Details>({ email: "", name: "", phoneNumber: "", hidden: "" });
  const [errors, setErrors] = useState<IError[]>([]);
  const [sendStatus, setSendStatus] = useState<number>(0);

  const changeField = (field: string) => (e: any) => {
    setErrors([]);
    setDetails({ ...details, [field]: e.target.value })
  }

  const sendEmail = async () => {
    setSendStatus(1);
    let temporaryErrors: IError[] = [];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email) || details.email == "") {
      temporaryErrors.push({ type: "email", text: "כתובת אימייל לא חוקית" })
    }
    if (details.name == "") {
      temporaryErrors.push({ type: "name", text: "השם לא יכול להיות ריק" })
    }
    if (!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(details.phoneNumber) || details.phoneNumber == "") {
      temporaryErrors.push({ type: "phoneNumber", text: "מספר טלפון לא חוקי" })
    }

    if (temporaryErrors.length > 0) {
      setErrors(temporaryErrors);
      setSendStatus(0)
      return
    }

    if (details.hidden != "") return;
    const res = await supabase.from("leads").insert({
      name: details.name, 
      email: details.email,
      phoneNumber: details.phoneNumber.replaceAll("-", "")
    })
    if (res.status === 500) {
      setSendStatus(3)
      return;
    }
    setSendStatus(2)
  }


  return (
    <div className="mx-auto flex flex-col-reverse lg:flex-row items-center mb-12 border border-gray-200 rounded-xl w-11/12 lg:w-3/5 xl:w-2/5 shadow-xl py-6 px-8 max-w-[700px]">
    
    <div className={`flex flex-col items-center lg:items-start ${className} `} id="contact">
      <div
        className={`text-2xl text-secondary py-4`}
      >
        השאירו לנו פרטים ונחזור אליכם בהקדם
      </div>
      <input
        id="email"
        placeholder="כתובת מייל"
        className={`rounded-md px-4 py-2 my-1 rounded-full border border-gray-200 w-3/4`}
        value={details.email}
        onChange={changeField("email")}
      />
      {
        errors.filter((e) => e.type == "email").length > 0 &&
        <label className="text-xs text-red-600 ">
          {errors.find((e) => e.type == "email")?.text}
        </label>
      }
      <input
        id="name"
        placeholder="שם מלא"
        className={`rounded-md px-4 py-2 my-1 rounded-full border border-gray-200 w-3/4`}
        value={details.name}
        onChange={changeField("name")}
      />
      {
        errors.filter((e) => e.type == "name").length > 0 &&
        <label className="text-xs text-red-600 ">
          {errors.find((e) => e.type == "name")?.text}
        </label>
      }
      <input
        id="phoneNumber"
        placeholder="מספר טלפון"
        className={`rounded-md px-4 py-2 my-1 rounded-full border border-gray-200 w-3/4`}
        value={details.phoneNumber}
        onChange={changeField("phoneNumber")}
      />
      {
        errors.filter((e) => e.type == "phoneNumber").length > 0 &&
        <label className="text-xs text-red-600 ">
          {errors.find((e) => e.type == "phoneNumber")?.text}
        </label>
      }
      <input hidden id="hidden-input" />
      {
        sendStatus === 3 ?
          <div className="p-2 border border-white bg-red-700 text-white rounded-lg text-sm my-1">
           הייתה בעיה עם הבקשה <br/>אנא פנה אלינו במספר הטלפון או באפליקציית ווטסאפ
          </div> :
          <button
            className={`text-md text-secondary border-2 border-secondary rounded-md py-2 px-12 w-max my-1 ${sendStatus === 2 && "bg-green-500 text-white"}`}
            onClick={sendEmail}
            disabled={[1, 2, 3].includes(sendStatus)}
          >
            {
              sendStatus === 0
                ? "שלח"
                : sendStatus === 1
                  ? "שולח..."
                  : sendStatus === 2
                    ? "נשלח בהצלחה!"
                    : ""
            }
          </button>
      }
    </div>
    <Image src="/images/SusyCircle.jpg" alt="Susy" width="200" height="200" className="my-4"/>
    </div>
  )
}
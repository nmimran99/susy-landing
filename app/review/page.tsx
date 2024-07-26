"use client"

import { supabase } from "@/supabase/supabaseclient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

type Error = {
  field: string;
  text: string;
}

export default function Review() {

  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [marketing, setMarketing] = useState<boolean>(false);
  const [errors, setErrors] = useState<Error[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) : Promise<void> => {
    setIsLoading(true);
    if(!verifyFields()) {
      setIsLoading(false)
      return;
    }
    const fileName = `${Date.now()}-${imageSrc?.name}`;

    if(!imageSrc) return;
    const imageUploadResponse = await supabase.storage.from("avatars").upload(fileName, imageSrc)
    const imageURLResponse = supabase.storage.from("avatars").getPublicUrl(fileName)

    const response = await supabase.from("reviews").insert({
      name,
      content: review,
      avatar: imageURLResponse.data.publicUrl,
      marketing_confirmation: marketing,
      to_show: false
    })
    
    if(response.error || imageUploadResponse.error) {
      router.push("/review/error")
    }

    if(!response.error) {
      router.push("/review/thankyou")
    }
    
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterErrors("image")
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImageSrc(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeName= (e: React.ChangeEvent<HTMLInputElement>) => {
    filterErrors("name");
    setName(e.target.value)
  }

  const handleChangeReview= (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    filterErrors("review");
    setReview(e.target.value)
  }

  const handleCheckboxChange = () => {
    setMarketing(!marketing);
  }

  const verifyFields = (): boolean => {
     const tempErrors: Error[] = [];

     if(!image) {
      tempErrors.push({
        field: "image",
        text: "שדה זה הינו חובה"
      })
    }

    if(!name) {
      tempErrors.push({
        field: "name",
        text: "שדה זה הינו חובה"
      })
    }

    if(!review) {
      tempErrors.push({
        field: "review",
        text: "שדה זה הינו חובה"
      })
    }

    if(!image) {
      tempErrors.push({
        field: "image",
        text: "שדה זה הינו חובה"
      })
    }
    setErrors(tempErrors);
    return tempErrors.length === 0;
  }

  const filterErrors = (field: string) => {
    setErrors(errors.filter(e => e.field !== field))
  }

  return (
    <div className="my-32 w-full md:w-[600px] md:border border-gray-300 rounded-xl py-8 px-4 mx-auto shadow-xl">
      <Image 
        src="/images/SusyCircle.jpg"
        alt="Susy"
        height="200"
        width="200"
        className="mx-auto my-4"
      />
      <div>
        <div className="text-lg font-bold">תודה שבחרת להוסיף חוות דעת והמלצה על הקורס שעברת בסוזי אקדמי!</div>
        <div className="text-sm my-8 p-4 border border-gray-300 rounded-xl">
        <div className="font-bold text-lg underline">
          שיתוף ההמלצה בסושיאל מדיה:
        </div>
        אנחנו נשמח לשתף אחרים בחוות הדעת שלך על מנת שתלמידים פוטנציאלים יוכלו לגבש דעה על המכינה ובתקווה לקדם את הפוטנציאל של אותם תלמידים להירשם.
        נשמח אם תיתן את אישורך לשימוש בחוות דעת שלך באמצעים שיווקיים כגון אינסטגרם ופייסבוק.
        <div className="flex gap-2 items-center border border-gray-300 py-2 px-4 w-max rounded-md my-2">
        <input
            type="checkbox"
            checked={marketing}
            onChange={handleCheckboxChange}
            className="w-4 h-4"
          />
          אני מאשר שימוש בחוות הדעת למטרות תוכן שיווקי
        </div>
        
      </div>
      </div>
      <div className="py-8 w-max">
        {
          !image ?
          <>
        <button  
          className="rounded-xl border-4 border-blue-500 w-60 h-60 flex flex-col justify-center items-center"
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          <CiImageOn 
            color="#CCC"
            size="100px"
          />
          <div className="text-gray-600">הוסף תמונה</div>
        </button>
        <input
              ref={fileInputRef}
              type="file"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
              required
              hidden
            /> 
            <Error errors={errors} fieldName="image"/>
            </>
            : 
            <div>
           
            <img 
              src={image}
              height="200"
              width="200"
              className="rounded-full border-2 border-white outline outline-blue-600"
            />
             <button
              onClick={() => {
                setImage(null)
                setImageSrc(null)
              }}
              className="flex text-gray-700 border-2 border-gray-600 rounded-md gap-2 items-center py-1 px-4 my-2 mx-auto"
            >
              <IoMdClose />
              החלף תמונה
            </button>
            </div>
        }
      </div>
      <div className="flex flex-col ">
      <label htmlFor="name">שם מלא:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
              required
              className="border border-gray-300 rounded-md p-2 w-60"
            />
            <Error errors={errors} fieldName="name"/>
      </div>
      <div className="flex flex-col my-2"> 
        <label htmlFor="review">חוות דעת:</label>
            <textarea
              placeholder="אנא ספר על החווית למידה שלך במכינה של סוזי, את היחס של המורים, רמת ההכנה, עזרה בבירוקרטיה ואת ההרגשה הכללית בקורס"
              id="review"
              value={review}
              onChange={handleChangeReview}
              required
              rows={5}
              className="border border-gray-300 rounded-md p-2 w-full"
            ></textarea>
            <Error errors={errors} fieldName="review"/>
      </div>
      <div>
     
      <button
        disabled={errors.length > 0 || isLoading}
        className="text-lg text-white bg-green-500 rounded-xl py-2 w-40 font-bold my-2 border border-gray-300 shadow disabled:bg-gray-200"
        onClick={handleSubmit}
      >
        {
          isLoading ? 
          "שולח..." : 
          "שלח"
        }

      </button>
      </div>
    </div>
  )
}

function Error({ errors, fieldName }: { errors: Error[], fieldName: string}) {

  const error = errors.find(e => e.field === fieldName);
  if (!error) {
    return null
  }

  return (
    <div className="text-sm text-red-600">
      {error.text}
    </div>
  )
}
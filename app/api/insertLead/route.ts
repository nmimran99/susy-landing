import { supabase } from "@/supabase/supabaseclient";

export async function POST(req: Request, res: Response) {
  try {
    console.log("posting")
    const details = await req.json();
    console.log(details)
    const result = await supabase.from("leads").insert({
      name: details.name, 
      email: details.email,
      phoneNumber: details.phoneNumber.replaceAll("-", "")
    })
    return Response.json({ text: "yes"})
  } catch (e) {
    return Response.json({ text: "no"})
  }  
}
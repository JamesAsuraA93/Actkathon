import { useEffect, useState } from "react";

export default function CheckIn(props) {
const [occupation,setOccupation] = useState("")
const [location,setLocation] = useState("")
  useEffect(()=>{
  props.onChange(occupation,location)

  },[occupation,location])

  return (
    <>
      <div className="grid justify-items-center mt-32 w-96 h-56 bg-gray-300 rounded-t-lg bg-opacity-90  ">
        <div className="mt-8 py-0 w-4/5">
          <label
            htmlFor="location"
            className="font-bold font-iconic"
          >
            <h2 className="text-xl font-bold mb-2 font-iconic">คุณพี่อยู่จังหวัดอะไรคะ ?</h2>

          </label>
          <div className="mt-1">
            <input
            value={location}
            onChange={e => setLocation(e.target.value)}
              type="text"
              name="location"
              id="location"
              className="shadow-sm py-2 font-sarabun block w-full sm:text-sm border-gray-300 rounded-md pl-2 "
              placeholder="จังหวัด...."
            />
          </div>
        </div>
        <div className="font-sarabun">
            <label htmlFor="asking">
            <h2 className="text-xl font-bold mb-2 font-iconic">คุณใกล้เคียงใครในนี้ที่สุด ?</h2>
            </label>
            <button onClick={()=>setOccupation("student")} className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">นักเรียน</button>
            <button onClick={()=>setOccupation("doctor")} className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">พยาบาล</button>
            <button onClick={()=>setOccupation("police")} className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">ตำรวจ</button>
            <button onClick={()=>setOccupation("any")} className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">ประชาชนธรรมดา</button>
        </div>
      </div>
    </>
  );
}

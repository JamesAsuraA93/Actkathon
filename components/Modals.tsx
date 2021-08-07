import {useState,useEffect} from "react";
import { useRouter } from 'next/router'

export default function Modal() {
  const [showModal, setShowModal] =useState(false);
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  useEffect(()=>{
      ////
  },[])
  return (
    <>
    <button>
    {id!=""&&id!=undefined ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative rounded-xl my-6 mx-auto max-w-2xl w-full bg-white border-4 border-earth-green h-4/5">
            <div className="p-3 border-b-4 border-earth-green ">
            โครงการ Test
            </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </button>
    </>
  );
}
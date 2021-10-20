import {useState,useEffect} from "react";
import { useRouter } from 'next/router'
import {
  fetchDataACT,
  query,
  queryWinner,
  generateFromOccupation,
} from "../data";
import Bubble from "./bubble";

export default function Modal(props:any) {
  const [showModal, setShowModal] =useState(false);
  const router = useRouter()
  const { id } = router.query
  //"student"
  const [actDoc, setActDoc] = useState([]);
  const [currentData, setCurrentData] = useState({ _source: { winner: [] } });
  const [winnerData, setWinnerData] = useState([]);
  const preference = {
    occupation: props.occupation, // "police" "doctor"
    location: props.location,
    projectId: id,
  };

  useEffect(() => {
    (async () => {
      if(id){
      const data = await fetchDataACT(query(preference));
      setActDoc(data);
      const _currentData = data.find((i:any) => {
        return i._source.projectId === preference.projectId;
      });
      setCurrentData(_currentData);
      const _winnerData = await fetchDataACT(
        queryWinner(_currentData._source.winnerName[0], preference)
      );
      setWinnerData(
        _winnerData.filter(
          ({ _source }) =>
            _source.winnerName[0] == _currentData._source.winnerName[0]
        )
      );}
    })();
  }, [id]);
  console.log(actDoc);
  console.log(winnerData);

  if (!currentData) return <pre>...</pre>

  return (
    <>
    {id!=""&&id!=undefined ? (
        <>
          <div
            className=" justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none"
            style={{zIndex:99}}
          >
            <div style={{zIndex:99}} className="overflow-hidden relative rounded-xl my-6 mx-auto max-w-2xl w-full bg-white border-4 border-earth-green h-4/5">
            <div style={{zIndex:99}} className="p-3 border-b-4 border-earth-green flex justify-between">
              <div className="">{currentData?._source?.projectName ?? ""}</div>
              <div className="cursor-pointer">
            <ion-icon icon="close" size="lg" onClick={()=>{
              router.push("/");
            }}></ion-icon>
            </div>
            </div>
            
    <div className="h-full overflow-scroll pb-24">
      <div className="">
        <div className="p-5">
          <div className="pb-3 font-bold text-xl ">
            ลองอ่านข้อมูลนี้แบบคร่าวๆ
          </div>
          <div className="flex">
            <div className="text-sm text-gray-600 pt-1">
              โครงการนี้ใช้งบประมาณ
            </div>
            <div className="self-stretch mx-1 text-xl font-bold">
              {currentData?._source?.projectMoney ?? ""}
            </div>
            <div className="text-sm text-gray-600 pt-1">บาท</div>
          </div>
          <div className="flex">
            <div className="text-sm text-gray-600 pt-1">โครงการนี้เป็นของ</div>
            <div className="self-stretch mx-1 font-bold">
              {currentData?._source?.departmentName ?? ""}
            </div>
          </div>
          <div className="flex">
            <div className="text-sm text-gray-600 pt-1">ในเขต</div>
            <div className="self-stretch mx-1 font-bold">
              {currentData?._source?.district ?? ""}
            </div>
          </div>
          <div className="">
            <div className="text-sm text-gray-600 pt-1">โดยโครงการนี้จะ</div>
            <div className="ml-1 font-bold">
              {currentData?._source?.projectName ?? ""}
            </div>
          </div>
        </div>
        <div className="px-5 flex">
          <div className="text-sm text-gray-600 pt-1">ผู้ชนะการประมูลคือ</div>
          <div className="ml-1 font-bold">{currentData?._source?.winnerName ?? ""}</div>
        </div>
        <div className="px-5">
          <div className="flex text-sm mt-2">
            <div className="h-3 w-3 mt-1 bg-green-600"></div>
            <div className="px-3"> คือโครงการที่{currentData?._source?.winnerName ?? ""}เคยทำ</div>
            <div className="h-3 w-3 mt-1 bg-red-600"></div>
            <div className="px-3"> คือโครงการที่{currentData?._source?.winnerName ?? ""}เคยทำและมีการทุจริต</div>
          </div>

          <div className="flex w-3/4 mx-auto mt-2 flex-wrap">
            {winnerData.map(({ _source }) =>
              _source.isCorrupt ? (
                <>
                  <div className="mx-1 h-3 w-3 mt-1 bg-red-600"></div>
                </>
              ) : (
                <>
                  <div className="mx-1 h-3 w-3 mt-1 bg-green-600"></div>
                </>
              )
            )}
          </div>
        </div>
        <div className="">
          <Bubble data={actDoc} id={preference.projectId}></Bubble>
          <div className="flex w-min mx-auto" style={{whiteSpace: "nowrap"
}}>
          <div className="w-2 h-2 rounded-full mt-1 mr-1" style={{backgroundColor:"#F28A8A"}}></div>
          <div className="text-center text-xs">
            งบประมาณของโครงการนี้เทียบกับโครงการ{" "}
            {generateFromOccupation(preference.occupation)} อื่นๆใน{" "}
            {preference.location}
          </div>
          </div>
        </div>
        <div className="p-5">
          <div className="pb-1 font-bold text-xl ">
            คุณเห็นโปรเจ็คนี้รอบตัวคุณไหม?
          </div>
          <div className="pb-3 ">
            ถ้าเห็น คุณรู้สึกว่าราคาด้านบนสมเหตุสมผลไหม
            เมื่อเทียบผลกระทบของโครงการนี้ที่มีต่อชีวิตคุณ? ถ้าไม่เห็น
            คุณคิดว่าราคานี้สมเหตุสมผลไหม
          </div>
        </div>
        <div className="px-5">
            ให้คะแนนความสมเหตุสมผลของราคา (สมเหตุสมผล 5, ไม่สมเหตุสมผล 1)
          </div>
        <div className="px-5 pb-5 flex text-sm pt-2">

          
        <div className=" ml-2 transition-all delay-100 border-earth-green border-2 p-3 cursor-pointer hover:bg-earth-green hover:text-white" onClick={()=>{props.voter[1]([...props.voter[0],{id:id,status:"ok"}]);router.push("/");}}>
        5
        </div><div className=" ml-2 transition-all delay-100 border-earth-green border-2 p-3 cursor-pointer hover:bg-earth-green hover:text-white" onClick={()=>{props.voter[1]([...props.voter[0],{id:id,status:"ok"}]);router.push("/");}}>
        4
        </div><div className=" ml-2 transition-all delay-100 border-earth-green border-2 p-3 cursor-pointer hover:bg-earth-green hover:text-white" onClick={()=>{props.voter[1]([...props.voter[0],{id:id,status:"ok"}]);router.push("/");}}>
        3
        </div>
        <div className="transition-all delay-100 ml-3 border-red-400 border-2 p-3 cursor-pointer hover:bg-red-400 hover:text-white" onClick={()=>{props.voter[1]([...props.voter[0],{id:id,status:"corrupt"}]);router.push("/");}}>
          2
        </div>
        <div className=" ml-2 transition-all delay-100 ml-3 border-red-400 border-2 p-3 cursor-pointer hover:bg-red-400 hover:text-white" onClick={()=>{props.voter[1]([...props.voter[0],{id:id,status:"corrupt"}]);router.push("/");}}>
          1
        </div>
        </div>
        <div className="p-5">
            หรือคุณคิดว่าโครงการนี้ไม่มีประโยชน์ ?
          </div>
          <div className="flex px-5">
          <div className=" ml-2 transition-all delay-100 ml-3 border-red-400 border-2 p-3 cursor-pointer hover:bg-red-400 hover:text-white" onClick={()=>{props.voter[1]([...props.voter[0],{id:id,status:"corrupt"}]);router.push("/");}}>
          ใช่ โครงการนี้ไม่มีประโยชน์
        </div>
        </div>
      </div>
    </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
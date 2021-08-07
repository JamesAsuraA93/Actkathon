import Image from "next/dist/client/image";
import React, { Component, useEffect, useRef } from "react";
import ThumbnailSVG from "../public/documents/doc.svg";
import Data, { Proovestate } from "../models/data_doc";
import { useSprings, animated } from "react-spring";
import Modal from "./Modals";
import router from "next/router";


export default function Thumbnail({
  currentPage,
  data,
}: {
  currentPage: number;
  data: Data[];
}) {
  const wRef = useRef(null);
  const document: Data = {
    id: 0,
    detailMoney: "",
    detailName: "",
    prooveState: Proovestate.UNMARK,
  };

  const calcX = (i: number) => {
    // return i * k

    return (i - currentPage + 1) * 5;
  };

  const disDoc = [document, ...data, document];
  const [props, api] = useSprings(disDoc.length, (i) => ({
    x: calcX(i),
    scale: i <= currentPage - 1 || i >= currentPage + 3 ? 0.7 : 1,
    display: "block",
    opacity: i <= currentPage - 1 || i >= currentPage + 3 ? 0.5 : 1,
    
  }));

  useEffect(() => {
    api.start((i) => {
      const page = 6;
      const isDisplay = i <= currentPage - 2 || i >= currentPage + 5;
      if (isDisplay) return { display: "none" };

      const x = calcX(i);
      const scale =
        (i != 0 && i == currentPage - 1) || i == currentPage + page - 2
          ? 0.7
          : 1;
      let opacity =
        (i != 0 && i == currentPage - 1) || i == currentPage + page - 2
          ? 0.5
          : 1;

      if(disDoc[i].vote == "corrupt" || disDoc[i].vote == "ok" )
              opacity=0.5; 
      if (i == 0) opacity = 0;
      console.log(currentPage);
      return { x, scale, display: "block", opacity };
    });
  }, [currentPage]);

  // khao jai la

  return (
    <>
      <div ref={wRef} className="w-5/6 overflow-hidden transform flex">
        {props.map(({ x, display, scale, opacity }, i) => (
          <animated.div
            className="w-full h-full transform"
            key={i}
            style={{ display, x, scale }}
          >
            <animated.div
            
              className="w-full h-full"
              style={{
                width: 184,
                height: 262,
                opacity,
                backgroundImage: `url(/documents/doc.svg)`,
              }}
            ></animated.div>
           {i > currentPage - 1 && i < currentPage + 4 && <div className="grid justify-items-center m-1 text-sm h-24 p-2 overflow-hidden">{disDoc[i].detailName}</div>}
           {i > currentPage - 1 && i < currentPage + 4 && <div className="flex mt-5" onClick={()=>router.push('/?id='+disDoc[i].id)}>
             <div className="h-12 w-11 border-2 border-earth-green bg-white object-center" >
               <div className="grid justify-items-center mt-2 text-xl">
               
               {(disDoc[i].vote == "corrupt" || disDoc[i].vote == "ok" ) ? ((disDoc[i].vote == "corrupt") ? "👎": "👍") :"💸"}
               </div>
              </div>
             <div className="h-12 w-32 border border-earth-green text-center border-b-2 border-r-2 border-t-2 bg-white">
               <h1 className={`font-normal pt-2 font-iconic ${(disDoc[i].vote == "corrupt" || disDoc[i].vote == "ok" ) ? "text-gray-400":"text-gray-700"} `}>{(disDoc[i].vote == "corrupt" || disDoc[i].vote == "ok" ) ? "ตรวจสอบเรียบร้อย":"ช่วยตรวจสอบ"}</h1>
             </div>
             </div>}
           
          </animated.div>
        ))}
      </div>
    </>
  );
}

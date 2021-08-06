import Image from "next/dist/client/image";
import React, { Component } from "react";
import thumbnail from "../public/documents/doc.svg";
import Data, { Proovestate } from "../models/data_doc";


export default function Thumbnail({
  currentPage,
  data,
}: {
  currentPage: number;
  data: Data[];
}) {
  const document: Data = {
    id: 0,
    detailMoney: "",
    detailName: "",
    prooveState: Proovestate.UNMARK,
  };

  const disDoc = [document, ...data, document];
  return (
    <>
      {disDoc.map((v, i, a) => {
        const isSelect = i >= currentPage && i < currentPage + 4;
        const isDisplay = i >= currentPage - 1 && i < currentPage + 5;
        return (
          isDisplay && (
            <div
              key={i}
              className={`${
                !isSelect &&
                (i == 0 || i == a.length - 1 ? "opacity-0" : "opacity-50")
              } m-3`}
            >
              <div>
                <Image
                  src={thumbnail}
                  alt="Picture of the author"
                  height={isSelect ? "262px" : "131px"}
                  width={isSelect ? "184px" : "92px"}
                />
              </div>
              <div key={i}>
                <p>{isSelect ? i : ""}</p>
              </div>
            </div>
          )
        );
      })}
    </>
  );
}

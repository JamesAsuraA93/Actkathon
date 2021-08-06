import Image from "next/dist/client/image";
import React, { Component } from "react";
import thumbnail from "../public/documents/doc.svg";
import Data, { Proovestate } from "../models/data_doc";

export default function Thumbnail({ currentPage }: { currentPage: number }) {
  const document: Data = {
    id: 64001,
    detailMoney: "12M",
    detailName: "โครงการปะลุกกะลิก",
    prooveState: Proovestate.UNMARK,
  };
  const document2: Data = {
    id: 64001,
    detailMoney: "12M",
    detailName: "โครงการมีนเองรักเจมส์นะจ๊ะ",
    prooveState: Proovestate.UNMARK,
  };
  const data = [document, document, document, document2, document, document];
  const disDoc = [document, ...data, document];
  return (
    <>
      {disDoc.map((v, i, a) => {
        const isSelect = i >= currentPage && i < currentPage + 4;
        const isDisplay = i >= currentPage - 1 && i < currentPage + 5;
        return (
          isDisplay && (
            <div
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
              <div>
                <p>{isSelect ? i : ""}</p>
              </div>
            </div>
          )
        );
      })}
    </>
  );
}

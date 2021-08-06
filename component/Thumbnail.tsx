import Image from "next/dist/client/image"
import React, { Component } from "react";
import thumbnail from "../public/documents/doc.svg";

export default function Thumbnail(){
    return(
        <>
        <div>
            <Image
            src={thumbnail}
            alt="Picture of the author"
          />
        </div>
        </>
    )
}
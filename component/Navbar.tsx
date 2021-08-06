import Image from "next/image";
import iconnavbar from "../public/iconhome.png";
import React, { Component } from "react";
import "react-toggle/style.css"
import Selectbar from "./Selectbar";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between w-full navcolor fixed">
        <div className="flex flex-rows">
          <Image
            src={iconnavbar}
            alt="Picture of the author"
            width={45}
            height={45}
          />
        </div>

        <div>
            <Search></Search>
        </div>

        <div>
         <Selectbar></Selectbar>
        </div>

      </div>
    </>
  );
}

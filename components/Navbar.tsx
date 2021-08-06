import Image from "next/image";
import iconnavbar from "../public/iconhome.png";
import React, { Component } from "react";
import "react-toggle/style.css"
import Selectbar from "./Selectbar";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between w-full navcolor fixed shadow-lg">
        <div className="flex flex-rows m-3">
          <Image
            src={iconnavbar}
            alt="Picture of the author"
            width={45}
            height={45}
          />
        </div>

        <div className="mt-5">
            <Search/>
        </div>

        <div className="mt-3">
         <Selectbar/>
        </div>

      </div>
    </>
  );
}

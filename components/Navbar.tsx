import Image from "next/image";
import iconnavbar from "../public/icon/logo.svg";
import React, { Component } from "react";
import "react-toggle/style.css"
import Selectbar from "./Selectbar";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <div className="font-iconic text-lg flex justify-between w-full navcolor fixed z-40">
        <div className="flex flex-rows m-3">
          <Image
            src={iconnavbar}
            alt="Picture of the author"
            width={55}
            height={45}
          />
        </div>

        <div className="mt-5">
            <Search/>
        </div>

        <div className="mt-3 mr-4 w-48">
         <Selectbar/>
        </div>

      </div>
    </>
  );
}

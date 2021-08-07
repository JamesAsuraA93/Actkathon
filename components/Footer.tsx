import Image from "next/image";
import footer from "../public/footer.png";
import {useState} from "react";
import React from 'react';
import Modal from "./Modals";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Footer() {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="flex justify-between footer w-full fixed bottom-0">
        <div className="flex flex-row gap-1 mt-2 ml-3">
          <div>
            <Image
              src={footer}
              alt="Picture of the author"
              width={25}
              height={25}
            />
          </div>
          <div>
            <h4 className="text-white">{`ขณะนี้มีโครงการที่ตรวจสอบแล้ว : 1345325 โครงการ`}</h4>
          </div>
        </div>
        <div>
          <Modal/>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import footer from "../public/footer.png";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between footer w-full fixed bottom-0">
        <div className="flex flex-row gap-1 mt-2">
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
          <h4 className="text-white">asdasd</h4>
        </div>
      </div>
    </>
  );
}

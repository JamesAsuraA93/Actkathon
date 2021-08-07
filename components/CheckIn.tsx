
export default function CheckIn() {
  return (
    <>
      <div className="grid justify-items-center mt-32 w-96 h-56 bg-gray-300 rounded-t-lg bg-opacity-90  ">
        <div className="mt-8 py-0">
          <label
            htmlFor="location"
            className="text-gray-600 font-bold font-iconic"
          >
            <h4>คุณพรี่อยู่จังหวัดอะไรคะ</h4>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="location"
              id="location"
              className="shadow-sm  block w-full sm:text-sm border-gray-300 rounded-md pl-2 py-0.5"
              placeholder="จังหวัดและอำเภอ"

            />
          </div>
        </div>
        <div>
            <label htmlFor="asking">
            <h2 className="text-xl font-bold mb-2 font-iconic">คุณคือใคร</h2>
            </label>
            <button className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">นักเรียน</button>
            <button className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">พยาบาล</button>
            <button className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">ตำรวจ</button>
            <button className="px-3 py-1 hover:bg-gray-700 rounded-lg hover:text-white">ประชาชน</button>
        </div>
      </div>
    </>
  );
}

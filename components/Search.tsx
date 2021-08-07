

export default function Search(){
    return(
        <>
        <div className="border-black">
            <form action="" className="flex flex-row gap-3">
                <div className="text-lg">
                    {`ค้นหาโครงการที่คุณสนใจ`}
                </div>
                <div className="relative">
                    <input type="" placeholder="พิมพ์เพื่อค้นหาเลย" className="rounded relative w-64 pl-2 pt-1 h-7 text-sm"/>
                <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center mr-1">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </div>
            </form>
        </div>
        </>
    )
}


export default function Search(){
    return(
        <>
        <div className="border-black">
            <form action="" className="flex flex-row gap-3">
                <h3>
                    {`ค้นหาโครงการที่คุณสนใจ`}
                </h3>
                <div className="relative">
                    <input type="" className="rounded relative w-64"/>
                <div className="absolute inset-y-0 right-0 flex items-center mr-1">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                </div>
            </form>
        </div>
        </>
    )
}
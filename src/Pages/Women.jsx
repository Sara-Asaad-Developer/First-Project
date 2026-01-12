import womimg from "../assets/Img/pexels-ron-lach-10536627.jpg"
export default function Women() {
    return (
        <div className=" w-full h-dvh   ">
            *<div className="bg-white flex justify-center items-center gap-10 relative p-5 pe-10">
                <div className="w-full pl-5 ">
                    <div className="w-[700px] h-[700px] rounded-full bg-[#91bc75] shadow-2xl shadow-gray-500"></div>
                </div>
                <div className=" p-10 absolute left-60 top-25 ">
                    <img className=" rounded-full w-[500px] h-[500px] shadow-2xl shadow-gray-500   object-cover animate__animated animate__backInDown animate__slow " src={womimg} />
                </div>
                <div className="w-[400px] h-[400px] shadow-2xl shadow-black px-20">
                    <h1 className="text-3xl text-black text-center">Welcome to SARA – Your Destination for Luxury Fragrances</h1>
                </div>
            </div>
            <div className="bg-[#91bc75] w-full grid grid-cols-3 gap-5 p-10 ">
                <div className=" bg-black text-white  h-96">
                    <h1>SARA</h1>
                </div>
                <div className=" bg-black text-white  h-96">
                    <h1>SARA</h1>
                </div>
                <div className=" bg-black text-white  h-96">
                    <h1>SARA</h1>
                </div>
                <div className=" bg-black text-white  h-96">
                    <h1>SARA</h1>
                </div>
                <div className=" bg-black text-white  h-96">
                    <h1>SARA</h1>
                </div>
                <div className=" bg-black text-white  h-96">
                    <h1>SARA</h1>
                </div>
            </div>

        </div>
    )
}

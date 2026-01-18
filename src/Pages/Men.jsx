import womimg from "../assets/Img/pp.webp"
export default function Women() {
    return (
        <div className=" w-full  bg-white ">
            <div className="bg-white flex justify-center items-center gap-10 relative p-5 pe-30">
                <div className="w-full pl-5 ">
                    <div className="w-[700px] h-[700px] rounded-full bg-[#91bc75] shadow-2xl shadow-gray-500"></div>
                </div>
                <div className=" p-10 absolute left-70 top-25 ">
                    <img className=" rounded-full w-[500px] h-[500px] shadow-2xl shadow-gray-500   object-cover animate__animated animate__backInDown animate__slow " src={womimg} />
                </div>
                <div className="w-2xl  shadow-2xl shadow-black rounded-[15px] border-10 border-[#91bc75] p-10 ">
                    <h1 className="text-3xl font-extrabold text-black bg-clip-text  text-center">Welcome to SARA Your Destination for Luxury Fragrances</h1>
                </div>
            </div>
            <div className="bg-[#91bc75]  rounded-t-[20px]  w-full grid grid-cols-3 gap-5 p-10 ">
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


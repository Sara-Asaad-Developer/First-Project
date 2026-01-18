import womimg from "../assets/Img/pexels-ron-lach-10536627.jpg"
export default function Women() {
    return (
        <div className="  bg-white ">
            <div className="bg-white flex justify-center items-center gap-10 relative p-5 lg:pe-30">
                {/* up */}
                <div className="w-full lg:pl-5 ">
                    <div className="w-[300px]  h-[300px] rounded-full bg-[#f9debf] shadow-2xl shadow-gray-500 lg:w-[700px] lg:h-[700px] lg:rounded-full lg:bg-[#f9debf] lg:shadow-2xl lg:shadow-gray-500"></div>
                </div>
                <div className=" lg:p-10 absolute left-20 top-25 lg:absolute lg:left-70 lg:top-25 ">
                    <img className=" rounded-full w-[200px] h-[200px] shadow-2xl shadow-gray-500 
                     lg:rounded-full lg:w-[500px] lg:h-[500px] lg:shadow-2xl lg:shadow-gray-500
                      object-cover animate__animated animate__backInDown animate__slow " src={womimg} />
                </div>
                <div className=" w-[50px] lg:w-2xl  shadow-2xl shadow-black rounded-[15px] border-10 border-[#f9debf] p-10 ">
                    <h1 className=" text-[5px] lg:text-3xl font-extrabold text-black bg-clip-text  text-center">Welcome to SARA Your Destination for Luxury Fragrances</h1>
                </div>
            </div>
            <div className="bg-[#f9debf]  rounded-t-[20px]  w-full grid grid-cols-1 lg:grid-cols-3 gap-5 p-10 ">
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

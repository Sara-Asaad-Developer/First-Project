export default function Hero() {
    return (
        <div className=" w-full  bg-white lg:w-full lg:h[90-dvh] lg:bg-white  ">
            <div className=" mm w-full  rounded-b-2xl lg:w-full shadow-2xl shadow-gray-500 h-[50dvh] lg:h-[90dvh] bg-hero bg-cover bg-center
           bg-[url('./assets/vecteezy_four-pink-and-white-peonies-on-a-green-background_47188679.jpeg')]
             animate__animated animate__fadeInDown animate__slower">

                <div className=" pt-[60px] pl-2 lg:p-10  flex flex-col  ">
                    <h1 className=" lg:p-10  text-black lg:text-white/70 lg:items-start 
                    text-2xl lg:text-8xl
                     font-bold font-sans
                      animate__animated animate__fadeInDown animate__slower ">Hayla</h1>

                    <p className=" text-[15px] font-bold  text-black  lg:text-white lg:text-3xl animate__animated animate__fadeInBottomLeft  animate__slower ">
                        A Fragrance That Defines Your Presenc
                        <br />
                        A unique, long-lasting blend that reflects your
                        <br />
                        confidence and leaves a lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
}

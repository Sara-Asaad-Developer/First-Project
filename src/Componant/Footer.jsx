import footimg from "../assets/Img/saraas.png"
import foot1img from "../assets/Img/facebook.png"
import foot2img from "../assets/Img/messenger.png"
import foot3img from "../assets/Img/whatsapp.png"
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Footer() {
    return (
        <div className="  bg-[#333333] flex justify-center items-center">
            <div className="container  flex justify-center items-center">
                <div className="w-[500px] lg:w-full flex flex-col justify-between  px-30 pt-10 lg:pt-5">
                    {/* ---------------------------------------------------------------------- */}
                    {/* UpperDiv */}
                    <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-20 pb-5 lg:pb-20 font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent ">
                        <div className=" flex flex-col  gap-5">
                            <a className="  " href="gmail.com">sarahasaad57@gmail.com</a>
                            <p className="">+(20)2154855222</p>
                            <p className=""> 45 Rue de Parfum
                                75 Cairo ,Egypt </p>
                        </div>
                        <div className="relative pl-13 lg:pl-0">
                            <img className=" w-40 h-40  lg:w-60 lg:h-60  " src={footimg} alt="" />
                            {/* <p className=" absolute bottom-3 left-33 
                            -translate-x-1/2 lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:pb-5 text-2xl  lg:text-5xl
                          font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent"></p> */}

                        </div>
                        <div className="font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent ">
                            <p>Whether you're a seasoned collector or
                                <br />
                                discovering your signature scent,
                                <br />
                                we're here to guide your journey.
                            </p>
                        </div>

                        {/* -----------------------------------------------------------------/ */}
                        {/* lowerDiv */}
                    </div>
                    <div className="   border-t border-gray-300  ">
                    </div>

                    <div className="  flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 w-[500px] lg:w-full pt-10 lg:pt-20 pb-10 lg:pb-30 px-10 lg:px-50  font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent">
                        <div className="">
                            <a href="gmail.com">sarahasaad57@gmail.com</a>
                        </div>
                        <div className=" relative flex gap-3 pr-40">
                            <BsFillTelephoneFill />
                            <p className=" absolute  left-6  lg:bottom-6.5 lg:left-7 font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent"> 01285551980</p>
                        </div>
                        <div className=" flex gap-4">
                            <img className=" w-11 h-11 " src={foot3img} alt="" />
                            <img className=" w-11 h-11" src={foot1img} alt="" />
                            <img className="  w-11 h-11" src={foot2img} alt="" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

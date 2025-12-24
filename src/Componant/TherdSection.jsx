import im1g from "../assets/Img/download (1).png"
import im2g from "../assets/Img/download (2).png"
import im3g from "../assets/Img/download (3).png"
import im4g from "../assets/Img/download (4).png"
import im5g from "../assets/Img/download.png"
export default function TherdSection() {
    return (
        <div className="w-full bg-white ">
            <h1 className=" text-center text-black  text-5xl pt-10 ">Categories</h1>
            <div className="  grid grid-cols-1 lg:grid-cols-3 gap-20 p-20">


                {/* div1 */}
                <div className=" w-full  lg:w-full flex flex-col gap-3 items-center ">
                    <div className="  w-[109px] h-[109px] border-3 border-[#91bc75] rounded-[10px] p-5">
                        <img className="w-[62px] h-[62px] object-cover  " src={im1g} alt="" />
                    </div>
                    <h1 className="text-black text-2xl lg:text-3xl text-center lg:text-center w-[300px] lg:w-full"> Women’s Fragrances</h1>
                    <p className="text-black text-[16px] lg:text-[20px]  w-[300px] lg:w-full px-2 lg:px-0"> From soft florals to bold orientals, explore scents that express femininity, strength, and grace.Women’s Fragrances
                        From soft florals to bold orientals, explore scents that express femininity, strength, and grace.
                    </p>
                </div>


                {/* div2 */}
                <div className="w-full  lg:w-full flex flex-col gap-3 items-center">
                    <div className="  w-[109px] h-[109px] border-3 border-[#91bc75] rounded-[10px] p-5 ">
                        <img className="w-[62px] h-[62px] object-cover  " src={im2g} alt="" />
                    </div>
                    <h1 className="text-black text-2xl lg:text-3xl text-center lg:text-center w-[300px] lg:w-full"> Women’s Fragrances</h1>
                    <p className="text-black text-[16px] lg:text-[20px]  w-[300px] lg:w-full px-2 lg:px-0"> From soft florals to bold orientals, explore scents that express femininity, strength, and grace.Women’s Fragrances
                        From soft florals to bold orientals, explore scents that express femininity, strength, and grace.
                    </p>
                </div>




                {/* div3 */}
                <div className=" w-full  lg:w-full flex flex-col gap-3 items-center">
                    <div className="  w-[109px] h-[109px] border-3 border-[#91bc75] rounded-[10px] p-5 ">
                        <img className="w-[62px] h-[62px] object-cover  " src={im3g} alt="" />
                    </div>
                    <h1 className="text-black text-2xl lg:text-3xl text-center lg:text-center w-[300px] lg:w-full"> Women’s Fragrances</h1>
                    <p className="text-black text-[16px] lg:text-[20px]  w-[300px] lg:w-full px-2 lg:px-0"> From soft florals to bold orientals, explore scents that express femininity, strength, and grace.Women’s Fragrances
                        From soft florals to bold orientals, explore scents that express femininity, strength, and grace.
                    </p>
                </div>

                {/* div4 */}
                <div className=" w-full  lg:w-full flex flex-col gap-3 items-center">
                    <div className="  w-[109px] h-[109px] border-3 border-[#91bc75] rounded-[10px] p-5 ">
                        <img className="w-[62px] h-[62px] object-cover  " src={im4g} alt="" />
                    </div>
                    <h1 className="text-black text-2xl lg:text-3xl text-center lg:text-center w-[300px] lg:w-full"> Women’s Fragrances</h1>
                    <p className="text-black text-[16px] lg:text-[20px]  w-[300px] lg:w-full px-2 lg:px-0"> From soft florals to bold orientals, explore scents that express femininity, strength, and grace.Women’s Fragrances
                        From soft florals to bold orientals, explore scents that express femininity, strength, and grace.
                    </p>
                </div>


                {/* div5 */}
                <div className=" w-full  lg:w-full flex flex-col gap-3 items-center ">
                    <div className="  w-[109px] h-[109px] border-3 border-[#91bc75] rounded-[10px] p-5 ">
                        <img className="w-[62px] h-[62px] object-cover  " src={im5g} alt="" />
                    </div>
                    <h1 className="text-black text-2xl lg:text-3xl text-center lg:text-center w-[300px] lg:w-full"> Women’s Fragrances</h1>
                    <p className="text-black text-[16px] lg:text-[20px]  w-[300px] lg:w-full px-2 lg:px-0"> From soft florals to bold orientals, explore scents that express femininity, strength, and grace.Women’s Fragrances
                        From soft florals to bold orientals, explore scents that express femininity, strength, and grace.
                    </p>
                </div>
            </div>
        </div>
    )
}

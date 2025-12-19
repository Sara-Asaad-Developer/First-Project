import secndimg from "../assets/2150185341.jpg"
export default function SecndSection() {
    return (
        <div className=" w-full h-[130dvh] lg:h-dvh  bg-linear-to-b from-[#747837] to-[#43720c]">
            <div className="  lg:flex justify-center items-center  lg:gap-70 p-10 ">
                <div className=" pb-3 lg:w-full">
                    <h1>About us</h1>
                    <p className=" "> A Passion for Perfume, a Commitment to Quality
                        At & Soul, we believe that fragrance is more than just a scent — it's an experience, a memory, a feeling. Founded in 2024, our mission is to bring the finest, most captivating fragrances from around the world to your doorstep.
                        Whether you're a seasoned collector or discovering your signature scent, we're here to guide your journey.</p>
                </div>
                <img className=" rounded-[80px] w-full lg:w-[350px] h-[50dvh] lg:h-[80dvh] shadow-2xl shadow-black object-fill " src={secndimg} alt="" />
            </div>
        </div>
    )
}

import { Link } from "react-router-dom";

export default function Nave() {
    return (
        <div className="  hidden sm:block lg:pe-10 ">
            <nav className=" flex  gap-4 ">
                <Link to="/Customer" className=" hover:text-black text-l font-extrabold bg-linear-to-b from-[#747837] to-[#43720c] bg-clip-text text-transparent" >Customer Opinions</Link>
                <Link to="/Discounts" className=" hover:text-black text-l font-extrabold bg-linear-to-b from-[#747837] to-[#43720c] bg-clip-text text-transparent" >Discounts and Offerrs</Link>
                <Link to="/Men" className=" hover:text-black text-l font-extrabold bg-linear-to-b from-[#747837] to-[#43720c] bg-clip-text text-transparent" >Men</Link>
                <Link to="/Women" className=" hover:text-black text-l font-extrabold bg-linear-to-b from-[#747837] to-[#43720c] bg-clip-text text-transparent" >Women</Link>
                < Link to="/" className=" hover:text-black text-l font-extrabold bg-linear-to-b from-[#747837] to-[#43720c] bg-clip-text text-transparent" href="">Home</Link>
                {/* <a className=" text-l font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent" href=""></a> */}
                {/* <a className=" text-l font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent" href=""></a> */}
            </nav>

        </div>
    )
}

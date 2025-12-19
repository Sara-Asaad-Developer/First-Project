import prfi from "../assets/2148229273.jpg"
import prf3i from "../assets/vecteezy_perfume-and-flowers_1852445.jpg"
import prf4i from "../assets/vecteezy_ai-generated-a-bottle-of-perfume-with-flowers-on-a-pink_35720062.jpg"

export default function Products() {
    return (
        <div className="p-5 md:p-10 md:ps-35 lg:p-30 bg-white  ">
            <div className=" grid  grid-cols-1  lg:grid-cols-3 lg:gap-20  ">
                <div className=" animate__animated animate__fadeInUp animate__slower text-black pt-15">
                    <h1>Why Choose Us?</h1>
                    <p> From timeless classics to modern olfactory masterpieces, our curated selection of perfumes brings elegance, depth, and emotion to every moment. Explore our exclusive collections for men, women, and unisex.</p> </div>
                <img className=" rounded-[80px] w-[500px] h-[50dvh] shadow-2xl shadow-gray-500 object-cover " src={prfi} alt="" />
                <div className=" animate__animated animate__fadeInRight animate__slower text-black pt-20">
                    <p>100% Authentic Products</p>
                    <p>Fast Worldwide Shipping</p>
                    <p>Complimentary Samples with Every Order</p>
                    <p>Personalized Fragrance Recommendations</p>
                </div>
                <img className=" rounded-[80px] w-[500px] h-[50dvh] shadow-2xl shadow-gray-500 object-cover " src={prf4i} alt="" />
                <div className=" text-black pt-20">
                    <p>Featured Collections:</p>
                    <p>Signature Scents</p>
                    <p>Niche & Artisan Perfumes</p>
                    <p>Seasonal Favorites</p>
                    <p>Travel & Mini Sizes</p>
                </div>
                <img className=" rounded-[80px] w-[500px] h-[50dvh] shadow-2xl shadow-gray-500 object-cover " src={prf3i} alt="" />
            </div>

        </div>
    )
}

import Footer from "../Componant/Footer"
import Hero from "../Componant/Hero"
import Products from "../Componant/Products"
import SecndSection from "../Componant/SecndSection"
import TherdSection from "../Componant/TherdSection"
export default function Home() {
    return (
        <div className=" w-full flex justify-center items-center overflow-auto ">
            <div className=" container">
                <Hero />
                <Products />
                <SecndSection />
                <TherdSection />
                {/* <Footer /> */}
            </div>
        </div>
    )
}

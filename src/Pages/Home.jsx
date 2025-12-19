import Header from "../Componant/Header"
import Hero from "../Componant/Hero"
import Products from "../Componant/Products"
import SecndSection from "../Componant/SecndSection"
export default function Home() {
    return (
        <div className=" w-full flex justify-center items-center overflow-auto ">
            <div className=" container">
                <Header />
                <Hero />
                <Products />
                <SecndSection />
            </div>
        </div>
    )
}

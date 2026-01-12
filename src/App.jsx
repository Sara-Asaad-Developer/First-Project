import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componant/Header"
import Home from "./Pages/Home"
import Women from "./Pages/Women"
import Men from "./Pages/Men"
import Customer from "./Pages/Customer"
import Discounts from "./Pages/Discounts"
import Prodect from "./Pages/Prodect";
import Footer from "./Componant/Footer";
export default function App() {
    return (
        <div className=" w-full h-dvh bg-white">
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" >
                        <Route index element={<Home />} />
                        <Route path="Women" element={<Women />} />
                        <Route path="Men" element={<Men />} />
                        <Route path="Customer" element={<Customer />} />
                        <Route path="Discounts" element={<Discounts />} />
                    </Route>
                    {/* <Route path="/women/:prodectNane" elemet={<Prodect />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    )
}

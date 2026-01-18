import Nave from "./Nave"
import sara from "../assets/Img/saar.png"

export default function Hader() {
  return (
    <div className=" h-[15dvh] bg-white  font-sans flex justify-between items-center ps-10  ">
      <img className="w-30 lg:w-50 h-28 lg:h-25 object-cover animate__animated animate__fadeInBottomLeft  animate__slower" src={sara} alt="" />

      <Nave />
    </div>
  )
}

import Nave from "./Nave"
import sara from "../assets/Img/saar.png"

export default function Hader() {
  return (
    <div className=" h-[15dvh] bg-white  font-sans flex justify-between items-center ps-10  ">
      <img className="w-32 lg:w-60 h-28 lg:h-50 animate__animated animate__fadeInBottomLeft  animate__slower" src={sara} alt="" />

      <Nave />
    </div>
  )
}

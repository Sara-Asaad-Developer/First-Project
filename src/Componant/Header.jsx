import Nave from "./Nave"
export default function Hader() {
  return (
    <div className=" h-[15dvh]  bg-white  font-sans flex justify-between items-center ps-10  ">
      <h1 className=" lg:pb-5 text-2xl  lg:text-5xl font-extrabold bg-linear-to-l from-[#d4af37] to-[#f5e39c] bg-clip-text text-transparent">Hayla</h1>
      <Nave />
    </div>
  )
}

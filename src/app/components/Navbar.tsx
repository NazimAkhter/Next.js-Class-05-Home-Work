import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-blue-900 flex h-20 justify-between items-center">
    
      <div className=" text-white text-xl flex h-16 justify-start items-center">
        <Image src={require("../../../image/logo.jpeg")} alt="Company Logo" width={200} height={200} className="ml-9 w-16 hover:w-24 hover:transition-all hover:cursor-pointer rounded-full"/>
        <h1 className="text-white font-sans font-semibold text-3xl ml-7 hover:shadow-slate-100">Z.H Graphics & Printers</h1>  
      </div>
      
      <div className=" text-white text-xl flex h-16 justify-end items-center">
        <div className=" mr-12 hover:cursor-pointer hover:text-cyan-300 hover:scale-110"><Link href="/">Home</Link></div>
        <div className=" mr-12 hover:cursor-pointer hover:text-cyan-300 hover:scale-110"><Link href="/about">About</Link></div>
        <div className=" mr-12 hover:cursor-pointer hover:text-cyan-300 hover:scale-110"><Link href="/contact">Contact us:</Link></div>
      </div>
    </div>
  );
}
export default Navbar;

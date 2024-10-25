
import Image from "next/image";
import logo1 from "../../../image/logo1.jpg";
import logo2 from "/image/logo2.jpg";
import logo3 from "/image/logo3.jpg";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-evenly mt-8">
        <Image
          src={logo1}
          alt="Brand Logo Sample" width={300} height={300}
          className="size-96 hover:size-[380px] hover:cursor-pointer"
        />
        <Image
          src={logo2} width={300} height={300}
          alt="Brand Logo Sample" className="size-96 hover:size-[380px] hover:cursor-pointer"
        />
        <Image
          src={logo3}  width={300} height={300}
          alt="Brand Logo Sample"className="size-96 hover:size-[380px] hover:cursor-pointer"
        />
      </div>
      <div className="flex justify-around mt-10">
      <div className="bg-blue-500 text-white w-[45%] p-6 ml-8 box-border text-justify">
        <p>
          &quot; Experienced graphic designer passionate about crafting exceptional
          logos that capture the essence of your brand. We specialize in
          creating visual identities that reflect your unique personality,
          values, and message. With a collaborative approach and commitment to
          excellence, We deliver outstanding results that set you apart from the
          competition. Let&apos;s work together to create a logo that makes a lasting
          impact! &quot;
        </p>
      </div>
      <div className="bg-blue-500 text-white w-[45%] p-6 mr-8 mb-0 box-border text-justify">
        <p>
        &quot; We craft captivating stationery designs that distill the heart of
          your brand, enthralling customers and setting your business apart.
          With a keen eye for modern design and a passion for visual
          storytelling, we create professional, show-stopping stationery that
          demands attention. &quot;
        </p>
      </div>
      </div>
    </div>
  );
}

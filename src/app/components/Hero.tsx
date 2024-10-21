import Image from "next/image";


export default function Hero() {
  return (
    <div>
      <div className="flex justify-evenly mt-8">
        <Image
          src={require("../../../image/logo-1.jpg")}
          alt="Brand Logo Sample"
          className="size-96 hover:size-[380px] hover:cursor-pointer"
        />
        <Image
          src={require("../../../image/logo-2.jpg")}
          alt="Brand Logo Sample" className="size-96 hover:size-[380px] hover:cursor-pointer"
        />
        <Image
          src={require("../../../image/logo-3.jpg")}
          alt="Brand Logo Sample"className="size-96 hover:size-[380px] hover:cursor-pointer"
        />
      </div>
      <div className="flex justify-around mt-10">
      <div className="bg-blue-500 text-white w-[45%] p-6 ml-8 box-border text-justify">
        <p>
          "Experienced graphic designer passionate about crafting exceptional
          logos that capture the essence of your brand. We specialize in
          creating visual identities that reflect your unique personality,
          values, and message. With a collaborative approach and commitment to
          excellence, We deliver outstanding results that set you apart from the
          competition. Let's work together to create a logo that makes a lasting
          impact!"
        </p>
      </div>
      <div className="bg-blue-500 text-white w-[45%] p-6 mr-8 mb-0 box-border text-justify">
        <p>
          "We craft captivating stationery designs that distill the heart of
          your brand, enthralling customers and setting your business apart.
          With a keen eye for modern design and a passion for visual
          storytelling, we create professional, show-stopping stationery that
          demands attention."
        </p>
      </div>
      </div>
    </div>
  );
}

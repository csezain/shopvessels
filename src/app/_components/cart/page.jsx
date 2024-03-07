import Image from "next/image";
import image from "./image/wakefulintegration.webp";

const page = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center lg:p-16 p-4 gap-0 max-w-7xl m-auto">
      <div className="">
        <Image width={550} height={500} src={image} alt="image" />
      </div>
      <div className="w-[50%] lg:p-12">
        <p className="text-sm pb-4">FOR LARGER-DOSE EXPERIENCES</p>
        <p className="md:text-3xl text-xl text-start lg:text-center ">
          Wakeful Integration Journal
        </p>
        <p className="pt-4">WAKEFUL TRAVEL</p>
        <div className="flex pt-4 gap-1">
          <p className="lg:text-2xl text-lg  tracking-widest">$57.00CAD</p>
          <p className="self-center text-sm tracking-widest line-through">
            $60.00CAD
          </p>
        </div>
        <div className="pt-4 flex mx-auto flex-col gap-4">
          <button className="border-2 py-2 border-[#de9e27] text-[#de9e27]">
            ADD TO CART
          </button>

          <button className="border-2  py-2 bg-[#5a31f4] border-[#5a31f4] text-white">
            ADD TO CART
          </button>
          <a href="#" className="uppercase self-center border-b border-black">
            more payments options
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;

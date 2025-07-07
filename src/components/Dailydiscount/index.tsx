import Image from "next/image";
export default function Order() {
  return (
    <div className="custom-container bg-[#FEEFD0] py-20 mb-40">
      <div className="bg-white flex justify-around items-center py-5 px-10 rounded-2xl shadow shadow-orange-300">
        <div className="flex items-center gap-4">
          <Image
            src="/Discount/Discount.png"
            alt="logo"
            width={100}
            height={100}
            className=""
          />
          <p className="text- text-[20px] font-bold text-[#FB3C00] max-w-[100px]">
            Daily Discount
          </p>
          <div className="text-center hidden md:block w-px h-12 bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/Discount/Map.png"
            alt="logo"
            width={100}
            height={100}
            className=""
          />
          <p className="items-center text-[20px] font-bold text-[#FB3C00] max-w-[100px]">
            Live Tracing
          </p>
          <div className="items-center hidden md:block w-px h-12 bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/Discount/Time.png"
            alt="logo"
            width={100}
            height={100}
            className=""
          />
          <p className="Items-center text-[20px] font-bold text-[#FB3C00] max-w-[100px]">
            Quick Delivery
          </p>
        </div>
      </div>
    </div>
  );
}

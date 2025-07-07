import Image from "next/image";
import { useState } from "react";
export default function HeroSection() {
  const [selected, setSelected] = useState("delivery");
  return (
    <div className="min-h-[450px] bg-[url('/HeroSection/Noodles.png')] bg-cover bg-center">
      <div className="custom-container px-4 md:px-8">
        <div className="flex flex-col pt-20 md:pt-30">
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px] text-white font-bold pl-1">
            Are you starving?
          </h1>
          <p className="text-sm sm:text-base mb-5 sm:mb-7 pl-1 text-black">
            within few clicks, find meals that are accessible near you
          </p>
          <div className="bg-white flex flex-col p-4 rounded-2xl w-full md:w-3/4 lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                onClick={() => setSelected("delivery")}
                className={`flex items-center space-x-2 rounded-md py-1 px-4 w-fit cursor-pointer 
                ${selected === "delivery" ? "bg-orange-100" : ""}`}
              >
                <Image
                  src="/HeroSection/Bike.png"
                  alt="wagon"
                  width={24}
                  height={15}
                  className="w-fit h-auto"
                />
                <p
                  className={`text-sm font-bold ${
                    selected === "delivery" ? "text-[#FF8A00]" : "text-gray-500"
                  }`}
                >
                  Delivery
                </p>
              </div>
              <div
                onClick={() => setSelected("pickup")}
                className={`flex items-center space-x-2 rounded-md py-1 px-4 w-fit cursor-pointer 
                ${selected === "pickup" ? "bg-orange-100" : ""}`}
              >
                <Image
                  src="/HeroSection/Lock.png"
                  alt="wagon"
                  width={24}
                  height={15}
                  className="w-fit h-auto"
                />
                <p
                  className={`text-sm font-bold ${
                    selected === "pickup" ? "text-[#FF8A00]" : "text-gray-500"
                  }`}
                >
                  Pickup
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="bg-gray-100 flex grow rounded space-x-2 mt-5 sm:mt-10 px-2 py-2 h-fit">
                <Image
                  src="/HeroSection/Mark.png"
                  alt="wagon"
                  width={20}
                  height={15}
                  className="w-fit h-auto"
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Address"
                  className="focus:outline-none w-full bg-transparent text-sm"
                />
              </div>
              <div className="mt-5 sm:mt-10">
                <button className="bg-gradient-to-b from-[#f73838] to-[#F65900] flex items-center space-x-2 px-6 py-3 rounded cursor-pointer w-full sm:w-auto justify-center">
                  <Image
                    src="/HeroSection/Search.png"
                    alt="user"
                    width={14}
                    height={19}
                    className="w-fit h-auto"
                  />
                  <p className="text-white text-sm font-bold">Find Food</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

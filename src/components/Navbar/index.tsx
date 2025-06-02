import Image from "next/image";

export default function Navbar() {
  return (
    <div className="custom-container mt-5">
      <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/Navbar/foodwagon.png"
            alt="wagon"
            width={130}
            height={38}
            className="w-fit h-auto"
          />
        </div>

        <div className="flex items-center justify-center space-x-2 w-full md:w-auto text-sm md:text-base">
          <p className="font-semibold whitespace-nowrap">Deliver to:</p>
          <Image
            src="/Navbar/map.png"
            alt="map"
            width={14}
            height={19}
            className="w-fit h-auto"
          />
          <p className="text-center md:text-left">
            Current Location{" "}
            <span className="font-semibold">Mohammadpur Bus Stand, Dhaka</span>
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end space-x-4 w-full md:w-auto">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/Navbar/Search.png"
              alt="search"
              width={14}
              height={19}
              className="w-fit h-auto"
            />
            <h1 className="font-semibold text-sm md:text-base">Search Food</h1>
          </div>
          <button className="flex items-center space-x-2 rounded-b-xl shadow-lg hover:shadow-[#fbce2b83] px-6 py-2 pb-3 cursor-pointer">
            <Image
              src="/Navbar/user.png"
              alt="user"
              width={14}
              height={19}
              className="w-fit h-auto"
            />
            <p className="text-[#FF8A00] font-bold text-sm md:text-base">
              Login
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Featured() {
  return (
    <div className="custom-container">
      <div>
        <h2 className="text-3xl text-center font-bold text-black mb-20">
          Featured Restaurant
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-20">
        <div className="flex flex-col space-y-4">
          <div className="relative group overflow-hidden">
            <Image
              src="/Featured/Foodworld.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                20%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Friendly.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Foodworld</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">46</p>
              </div>
            </div>
          </div>
          <p className="bg-[#FCE3D4] text-[#FF8A00] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Opens Tomorrow
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Pizzahub.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                15%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Pino.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Pizzahub</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">40</p>
              </div>
            </div>
          </div>
          <p className="bg-[#FCE3D4] text-[#FF8A00] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Opens Tomorrow
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Donut.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                10%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Dunkin.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Donuts hut</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">20</p>
              </div>
            </div>
          </div>
          <p className="bg-[#E4F1D8] text-[#79b93c] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Open Now
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Icecream.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                15%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Subway.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Subway</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">50</p>
              </div>
            </div>
          </div>
          <p className="bg-[#E4F1D8] text-[#79b93c] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Open Now
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Ruby.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                10%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Tuesday.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Subway</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">26</p>
              </div>
            </div>
          </div>
          <p className="bg-[#E4F1D8] text-[#79b93c] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Open Now
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Kuakata.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                25%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/KFC.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Kuakata Fried Chicken</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">53</p>
              </div>
            </div>
          </div>
          <p className="bg-[#E4F1D8] text-[#79b93c] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Open Now
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Pasta.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                10%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Red.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Red Square</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">45</p>
              </div>
            </div>
          </div>
          <p className="bg-[#E4F1D8] text-[#79b93c] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Open Now
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="group relative overflow-hidden">
            <Image
              src="/Featured/Taco.png"
              alt="food"
              width={357}
              height={301}
              className="rounded-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute top-3 left-3 space-x-2 flex">
              <span className="bg-[#F17228] text-white text-xs font-semibold px-2 py-1 rounded">
                10%
              </span>
              <span className="bg-[#FFB30E] text-white text-xs font-semibold px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/Featured/Bell.png"
              alt="friendly"
              width={64}
              height={64}
            />
            <div className="flex flex-col">
              <p className="font-semibold">Taco Bell</p>
              <div className="flex items-center space-x-1">
                <Image
                  src="/Featured/Star.png"
                  alt="star"
                  width={25}
                  height={24}
                />
                <p className="text-[#FFB30E]">35</p>
              </div>
            </div>
          </div>
          <p className="bg-[#E4F1D8] text-[#79b93c] rounded-xl text-sm font-bold mt-2 px-2 py-1 w-fit">
            Open Now
          </p>
        </div>
      </div>
      <div className="text-center mb-20">
        <button className="bg-gradient-to-b from-[#FFBA26] to-[#FF9A0E] text-white rounded-xl font-semibold px-10 py-3">
          View All
        </button>
      </div>
    </div>
  );
}

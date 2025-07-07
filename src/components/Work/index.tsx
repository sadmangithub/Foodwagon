import Image from "next/image";
export default function Work() {
  return (
    <section className="bg-gradient-to-b from-[#ffcf6720] to-[#ffffff28] py-12 text-center">
      <h2 className="text-3xl font-bold text-[#F17228] mb-10">
        How does it work
      </h2>
      <div className="custom-container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 justify-items">
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <Image
                src="/Work/Map.png"
                alt="map"
                width={120}
                height={120}
                className=""
              />
            </div>
            <h1 className="font-semibold mt-4">Select Location</h1>
            <p className="text-gray-400 text-sm max-w-[250px]">
              Choose the location where your food will be delivered
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <Image
                src="/Work/Order.png"
                alt="order"
                width={120}
                height={120}
                className=""
              />
            </div>
            <h1 className="font-semibold mt-4">Choose order</h1>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Check over hundreds of menus to pick your favorite food.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <Image
                src="/Work/Pay.png"
                alt="pay"
                width={120}
                height={120}
                className=""
              />
            </div>
            <h1 className="font-semibold mt-4">Choose order</h1>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Check over hundreds of menus to pick your favorite food.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <Image
                src="/Work/Meal.png"
                alt="meal"
                width={120}
                height={120}
                className=""
              />
            </div>
            <h1 className="font-semibold mt-4">Enjoy meals</h1>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Food is made and delivered directly to your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

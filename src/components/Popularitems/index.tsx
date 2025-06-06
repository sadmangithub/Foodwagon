import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function Popular() {
  return (
    <>
      <div className="custom-container ">
        <div>
          <h2 className="text-3xl text-center font-bold text-black mb-20">
            Popular items
          </h2>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          freeMode={true}
          loop={true}
          grabCursor={true}
          className="mb-20"
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-0.5 ">
              <div className="group overflow-hidden">
                <Image
                  src="/Popular/Burger.png"
                  alt="food"
                  width={280}
                  height={280}
                  className="w-fit h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="font-semibold text-sm">Cheese Burger</p>
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/Popular/Map.png"
                    alt="food"
                    width={14}
                    height={12}
                    className="pt-1"
                  />
                </div>
                <p className="text-[#fbce2b]">Burger Arena</p>
              </div>
              <p className="font-bold">$3.88</p>
              <button className="bg-[#F17228] hover:bg-[#f16128] transition duration-300 text-white rounded-xl font-semibold px-4 py-3 cursor-pointer">
                Order Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-0.5">
              <div className="group overflow-hidden">
                <Image
                  src="/Popular/Cake.png"
                  alt="food"
                  width={280}
                  height={280}
                  className="w-fit h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="font-semibold text-sm">Toffe&apos;s Cake</p>
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/Popular/Map.png"
                    alt="food"
                    width={14}
                    height={12}
                    className="pt-1"
                  />
                </div>
                <p className="text-[#fbce2b]">Top Sticks</p>
              </div>
              <p className="font-bold">$4.00</p>
              <button className="bg-[#F17228] hover:bg-[#f16128] transition duration-300 cursor-pointer text-white rounded-xl font-semibold px-4 py-3">
                Order Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-0.5">
              <div className="group overflow-hidden">
                <Image
                  src="/Popular/Dancake.png"
                  alt="food"
                  width={280}
                  height={280}
                  className="w-fit h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="font-semibold text-sm">Dancake</p>
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/Popular/Map.png"
                    alt="food"
                    width={14}
                    height={12}
                    className="pt-1"
                  />
                </div>
                <p className="text-[#fbce2b]">Cake World</p>
              </div>
              <p className="font-bold">$1.99</p>
              <button className="bg-[#F17228] hover:bg-[#f16128] cursor-pointer transition duration-300 text-white rounded-xl font-semibold px-4 py-3">
                Order Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-0.5">
              <div className="group overflow-hidden">
                <Image
                  src="/Popular/Sandwitch.png"
                  alt="food"
                  width={280}
                  height={280}
                  className="w-fit h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="font-semibold text-sm">Crispy Sandwitch</p>
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/Popular/Map.png"
                    alt="food"
                    width={14}
                    height={12}
                    className="pt-1"
                  />
                </div>
                <p className="text-[#fbce2b]">FastFood Dine</p>
              </div>
              <p className="font-bold">$3.00</p>
              <button className="bg-[#F17228] cursor-pointer hover:bg-[#f16128] transition duration-300 text-white rounded-xl font-semibold px-4 py-3">
                Order Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col space-y-0.5">
              <div className="group overflow-hidden">
                <Image
                  src="/Popular/Soup.png"
                  alt="food"
                  width={280}
                  height={280}
                  className="w-fit h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="font-semibold text-sm">Thai Soup</p>
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/Popular/Map.png"
                    alt="food"
                    width={14}
                    height={19}
                    className="pt-1"
                  />
                </div>
                <p className="text-[#fbce2b]">Foody man</p>
              </div>
              <p className="font-bold">$2.79</p>
              <button className="bg-[#F17228] hover:bg-[#f16128] cursor-pointer transition duration-300 text-white rounded-xl font-semibold px-4 py-3">
                Order Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-0.5">
              <div className="group overflow-hidden">
                <Image
                  src="/Popular/Cake.png"
                  alt="food"
                  width={280}
                  height={280}
                  className="w-fit h-auto group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="font-semibold text-sm">Toffe&apos;s Cake</p>
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/Popular/Map.png"
                    alt="food"
                    width={14}
                    height={12}
                    className="pt-1"
                  />
                </div>
                <p className="text-[#fbce2b]">Top Sticks</p>
              </div>
              <p className="font-bold">$4.00</p>
              <button className="bg-[#F17228] hover:bg-[#f16128] cursor-pointer transition duration-300 text-white rounded-xl font-semibold px-4 py-3">
                Order Now
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

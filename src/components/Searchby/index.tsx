import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
export default function Search() {
  return (
    <div className="bg-[#FEFAF1] custom-container mb-30 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold pl-10">Search by Food</h1>
        <p className="text-[#FFB30E] font-bold text-normal pr-10">View all</p>
      </div>
      {/* <Swiper
        slidesPerView={5}
        spaceBetween={16}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        freeMode={true}
        loop={true}
        grabCursor={true}
        className="mb-20"
      > */}
      <div className="flex justify-center items-center gap-8 mt-20">
        {/* <SwiperSlide> */}
        <div className="flex flex-col">
          <Image
            src="/Food/Pizza.png"
            alt="Food"
            width={120}
            height={120}
            className=""
          />
          <p className="text-base text-center pt-4">Pizza</p>
        </div>
        {/* </SwiperSlide>
          <SwiperSlide> */}
        <div className="flex flex-col">
          <Image
            src="/Food/Burger.png"
            alt="Food"
            width={120}
            height={120}
            className=""
          />
          <p className="text-base text-center pt-4">Burger</p>
        </div>
        <div className="flex flex-col">
          <Image
            src="/Food/Noodles.png"
            alt="Food"
            width={120}
            height={120}
            className=""
          />
          <p className="text-base text-center pt-4">Noodles</p>
        </div>
        {/* </SwiperSlide>
          <SwiperSlide> */}
        <div className="flex flex-col">
          <Image
            src="/Food/Sub.png"
            alt="Food"
            width={120}
            height={120}
            className=""
          />
          <p className="text-base text-center pt-4">Sub-Sandiwch</p>
        </div>
        {/* </SwiperSlide>

          <SwiperSlide> */}
        <div className="flex flex-col">
          <Image
            src="/Food/Chowmin.png"
            alt="Food"
            width={120}
            height={120}
            className=""
          />
          <p className="text-base text-center pt-4">Chowmein</p>
        </div>
        {/* </SwiperSlide>

          <SwiperSlide> */}
        <div className="flex flex-col">
          <Image
            src="/Food/Steak.png"
            alt="Food"
            width={120}
            height={120}
            className=""
          />
          <p className="text-base text-center pt-4">Steak</p>
        </div>
        {/* </SwiperSlide> */}
      </div>
      {/* </Swiper> */}
    </div>
  );
}

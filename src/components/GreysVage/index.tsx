import Image from "next/image";

export default function GreysVage() {
  return (
    <div className="custom-container">
      <div className="flex flex-wrap justify-center items-center gap-8 mt-20 mb-30">
        <div className="flex flex-col w-full sm:w-[250px] items-center md:items-start">
          <div>
            <Image
              src="/GreysVage/15off.png"
              alt="vage"
              width={250}
              height={201}
              className="w-fit h-auto"
            />
          </div>
          <h1 className="font-semibold mt-6">Greys Vage</h1>
          <p className="bg-orange-100 text-[#FF8A00] rounded text-sm font-bold mt-2 px-2 w-fit">
            6 days Remaining
          </p>
        </div>

        <div className="flex flex-col w-full sm:w-[250px] items-center md:items-start">
          <div>
            <Image
              src="/GreysVage/10off.png"
              alt="vage"
              width={250}
              height={201}
              className="w-fit h-auto"
            />
          </div>
          <h1 className="font-semibold mt-6">Greys Vage</h1>
          <p className="bg-orange-100 text-[#FF8A00] rounded text-sm font-bold mt-2 px-2 w-fit">
            6 days Remaining
          </p>
        </div>

        <div className="flex flex-col w-full sm:w-[250px] items-center md:items-start">
          <div>
            <Image
              src="/GreysVage/25off.png"
              alt="vage"
              width={250}
              height={201}
              className="w-fit h-auto"
            />
          </div>
          <h1 className="font-semibold mt-6">Greys Vage</h1>
          <p className="bg-orange-100 text-[#FF8A00] rounded text-sm font-bold mt-2 px-2 w-fit">
            7 days Remaining
          </p>
        </div>

        <div className="flex flex-col w-full sm:w-[250px] items-center md:items-start">
          <div>
            <Image
              src="/GreysVage/20off.png"
              alt="vage"
              width={250}
              height={201}
              className="w-fit h-auto"
            />
          </div>
          <h1 className="font-semibold mt-6">Greys Vage</h1>
          <p className="bg-orange-100 text-[#FF8A00] rounded text-sm font-bold mt-2 px-2 w-fit">
            8 days Remaining
          </p>
        </div>
      </div>
    </div>
  );
}

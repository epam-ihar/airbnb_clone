import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        className="bg-[#264c4b]"
        priority
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import Image from "next/image";

function MediumCard({ title, img }) {
  return (
    <div className="flex flex-col space-y-1 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-md" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;

import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  image: string;
};

export default function University({ name, description, image }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <Image src={image} width={1920} height={1080} alt="university-image" className="rounded-xl" />
      <div className="lg:ml-5">
        <h2 className="font-bold text-2xl xl:text-3xl text-[#111b2e]">{name}</h2>
        <p className="xl:text-xl">{description}</p>
      </div>
    </div>
  );
}

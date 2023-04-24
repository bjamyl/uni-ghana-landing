import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  image: string;
};

export default function University({ name, description, image }: Props) {
  return (
    <div className="">
      <Image src={image} width={1920} height={1080} alt="university-image" className="" />
      <div>
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

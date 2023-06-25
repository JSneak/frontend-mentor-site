import * as React from "react";
import Image, { type StaticImageData } from "next/image";

export interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  image_alt: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex w-80 flex-col items-center justify-center rounded-3xl bg-white p-4 shadow-md">
      <Image
        src={props.image}
        alt={props.image_alt}
        width={300}
        height={300}
        className="rounded-lg"
      />
      <h1 className="px-[0.55rem] pt-3 text-center text-xl font-bold">
        {props.title}
      </h1>
      <p className="px-[0.55rem] py-3 text-center text-sm text-gray-400">
        {props.description}
      </p>
    </div>
  );
};

export default Card;

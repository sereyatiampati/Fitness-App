import React from "react";

function GalleryList({exercise, duration, image, coach, weight}){
  

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-pink-200 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">Exercise Name: {exercise}</p>
        <p className="text-2xl">Time duration:{duration}</p>
        <p className="text-2xl">Min Weight: {weight}</p>
        <p className="text-2xl">Trainer: {coach}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default GalleryList;
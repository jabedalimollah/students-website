"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
const profileComponent = (prop) => {
  return (
    <div className="w-full h-full flex flex-col fixed top-0 left-0 z-50 bg-white items-center justify-center">
      <div className="w-10/12 md:w-6/12 lg:w-4/12 flex flex-col justify-end items-end border-2 border-black p-4 shadow-2xl rounded-lg">
        <div className="w-2/12 h-10 mb-2">
          <button
            className="w-full h-full bg-red-400 flex justify-center items-center rounded-md text-4xl text-black hover:bg-red-900 hover:text-white"
            onClick={() => prop.toggle(false)}
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="w-full ">
          <Image
            src={prop.profileimg.profile_image}
            alt={prop.profileimg.name}
            width={300}
            height={300}
            priority
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default profileComponent;

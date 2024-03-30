import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
const footer = () => {
  return (
    <div className="bg-violet-100 mt-4 w-full ">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0 pt-12 w-full text-center h-auto md:h-60">
        <div className="w-full md:w-3/12">
          <h2 className="text-xl font-bold uppercase text-slate-600">
            Location
          </h2>
          <p>West Bengal, India</p>
        </div>
        <div className="w-full md:w-5/12 ">
          <h2 className="text-xl font-bold uppercase text-slate-600">
            Social Media
          </h2>
          <div className="flex justify-center gap-4  mt-4">
            <a
              href="http://"
              target="_blank"
              className="border-2 text-violet-800 border-violet-400 hover:border-violet-800 hover:bg-violet-800 hover:text-white p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://"
              target="_blank"
              className="border-2 text-violet-800 border-violet-400  hover:border-violet-800 hover:bg-violet-800 hover:text-white p-3 rounded-full"
            >
              <BsTwitterX />
            </a>
            <a
              href="http://"
              target="_blank"
              className="border-2 text-violet-800 border-violet-400  hover:border-violet-800 hover:bg-violet-800 hover:text-white p-3 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="http://"
              target="_blank"
              className="border-2 text-violet-800 border-violet-400  hover:border-violet-800 hover:bg-violet-800 hover:text-white p-3 rounded-full"
            >
              <TbWorld />
            </a>
          </div>
        </div>
        <div className="w-full md:w-3/12">
          <h2 className="text-xl font-bold uppercase text-slate-600">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            placeat. Doloribus, exercitationem ex. Minima,
          </p>
        </div>
      </div>
      <div className="bg-violet-400 py-4 text-center text-white mt-6 md:mt-0">
        Copyright&copy; 2024
      </div>
    </div>
  );
};

export default footer;

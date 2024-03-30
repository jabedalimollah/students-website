import React from "react";
import meet from "../../../public/images/meet.jpg";
import Image from "next/image";
const contact = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center">
      <div className="m-8 md:mt-8 md:ml-8 lg:ml-0 lg:m-0 md:w-6/12 lg:w-5/12 flex flex-col justify-center">
        <div className="md:w-12/12 lg:w-8/12 p-6 border-2  border-violet-900 rounded-lg shadow-2xl bg-violet-50">
          <h3 className="text-5xl text-violet-900 ">Contact Us</h3>
          {/* <div className="w-full mt-2 flex justify-center">
            <div className="animated_line "></div>
            <div className="bg-violet-400 w-10/12 h-1"></div>
          </div> */}

          <form action="" className="mt-4 ">
            <div className="flex flex-col w-11/12 md:w-10/12 mb-4">
              <label htmlFor="" className="text-lg text-violet-900 mb-1">
                Name :
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className=" border-2 border-violet-900 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col  w-11/12 md:w-10/12 mb-4">
              <label htmlFor="" className="text-lg text-violet-900 mb-1">
                E-mail :
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className=" border-2 border-violet-900 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col  w-11/12 md:w-10/12 mb-4">
              <label htmlFor="" className="text-lg text-violet-900 mb-1">
                Message :
              </label>
              <input
                type="text"
                placeholder="Enter Message"
                className=" border-2 border-violet-900 p-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-violet-200 text-center  hover:scale-95 ease-in duration-200 hover:bg-violet-500 py-2 text-violet-900 hover:text-white rounded-md w-11/12 
              md:w-2/5"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <div className="md:mt-6 lg:mt-0 md:w-6/12 lg:w-4/12">
        <Image src={meet} alt="meet" />
      </div>
    </div>
  );
};

export default contact;

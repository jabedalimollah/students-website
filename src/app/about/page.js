import React from "react";
import idea from "../../../public/images/idea.jpg";
import Image from "next/image";
import Link from "next/link";
const about = () => {
  return (
    <div
      className="w-full h-full md:h-96 flex flex-col md:flex-row justify-around items-center bg-no-repeat bg-cover"
      // style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="w-10/12 md:w-6/12 md:pl-2 md:ml-8 mt-4 md:mt-0">
        <h3 className="text-4xl">About Us</h3>
        <hr className="boder-2 mt-2 border-black " />
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          provident, cupiditate quis laudantium id ab quisquam similique
          necessitatibus fugiat, ullam beatae eligendi, iusto voluptates sit
          praesentium. Ratione, est odit quibusdam deserunt modi illum repellat
          ex error, impedit nulla necessitatibus perferendis sit excepturi
          soluta consectetur dolorem suscipit incidunt molestias rerum. Quaerat
          earum asperiores nam. Repellat, nam praesentium?
        </p>
        {/* <hr className="boder-2 mt-2 mb-4 border-black " /> */}
        <Link
          href="/"
          // target="_blank"
          className="bg-violet-200 text-center hover:bg-violet-500 py-2 px-3 text-black hover:text-white rounded-md w-2/5"
        >
          Click Here
        </Link>
      </div>
      <div className="w-10/12 mt-4 md:mt-0 md:w-5/12 lg:w-3/12 h-full">
        <Image src={idea} alt="idea" className=" h-auto" />
      </div>
    </div>
  );
};

export default about;

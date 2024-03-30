"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import studentsData from "../database/studentsList.json";
import { MdVerified } from "react-icons/md";
const students = () => {
  const [studentList, setStudentList] = useState(studentsData);

  // useEffect(() => {
  //   setStudentList(studentsData);
  // }, []);
  return (
    <div>
      {/* ======================== Students Component Start ========================== */}

      <div className="flex flex-col items-center justify-center py-6 w-full ">
        <h3 className=" text-2xl md:text-4xl md:py-4 mb-4 ">All Students</h3>
        <div className="animated_line "></div>
        <div className="flex justify-center flex-wrap  gap-4 md:gap-8 mt-8 px-2 md:px-4   md:w-4/5">
          {studentList.map((item, index) => {
            return (
              <div
                className="w-5/12 flex flex-col items-center pb-2 md:pb-0 md:w-3/12 h-48 md:h-full border-2 border-black-400 rounded-lg hover:scale-95 ease-in duration-200 shadow-lg md:shadow-lg"
                key={item.id}
              >
                <Image
                  src={item.profile_image}
                  // src={Sarif}
                  alt={item.name}
                  width={300}
                  height={300}
                  priority
                  // fill
                  className="w-full h-4/6 md:h-4/5 rounded-t-lg md:p-2 lg:p-3  "
                />
                <h4 className="flex gap-1 text-sm lg:text-2xl text-center  mt-2 md:mt-0 lg:mt-0 font-bold text-neutral-600 ">
                  <span>{item.name}</span>
                  <span className="flex items-center">
                    <MdVerified className="text-varified-400" />
                  </span>
                </h4>
                {/* <p className=" text-center md:my-1 lg:my-2 text-xs md:text-md lg:text-lg text-neutral-500 ">
                CSE
              </p> */}
                <Link
                  // href="/"
                  href={`/user/profile/${item.id}`}
                  className=" bg-violet-200 text-center hover:bg-violet-500 py-1 text-sm md:text-base md:py-2 text-black hover:text-white rounded-md 
                w-4/5 mb-3 mt-1 md:mt-2"
                >
                  View Profile
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default students;

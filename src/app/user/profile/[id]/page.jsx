"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import ProfileComponent from "@/components/profileComponent/profileComponent";
import studentData from "../../../database/studentsList.json";
import { MdVerified } from "react-icons/md";
const page = ({ params }) => {
  const [imgToggle, setImgToggle] = useState(false);
  const [studentList, setStudentList] = useState(studentData);
  const [data, setData] = useState({});
  const toggleFunction = () => {
    setImgToggle(true);
  };
  useEffect(() => {
    // setStudentList(studentData);

    // setData(
    //   studentList.reduce(async (total, currentValue, currentIndex, arr) => {
    //     let paramsId = parseInt(params.id);
    //     console.log("ee", currentValue.id);
    //     console.log("ff", paramsId);

    //     if (paramsId === currentValue.id) {
    //       return await currentValue;
    //     }

    //   })
    // );
    let paramsId = parseInt(params.id);
    let found = studentList.find(function (element) {
      return element.id == paramsId;
    });
    setData(found);
  }, []);
  return (
    <>
      {imgToggle ? (
        <ProfileComponent profileimg={data} toggle={setImgToggle} />
      ) : null}
      <div className="w-full flex flex-col">
        <div className="w-full ">
          <Link
            href={"/students"}
            className="flex flex-row p-4 items-center md:w-4/12 lg:w-2/12"
          >
            <FaArrowLeft /> <span className="ml-2">Back to Students Page</span>
          </Link>
        </div>
        <div className="w-full flex lg:flex-row flex-col lg:justify-center items-center mt-5">
          <div className="w-8/12 md:w-6/12 lg:w-3/12 ">
            <div
              className="w-full md:w-4/5 rounded-full border-2 border-black p-2 mb-8 lg:mb-4 shadow-2xl"
              onClick={toggleFunction}
            >
              {data.graduation_collage_image && (
                <Image
                  src={data.profile_image}
                  alt={data.name}
                  width={300}
                  height={300}
                  priority
                  className="w-full  rounded-full "
                />
              )}
              {/* <Image
                src={data.profile_image}
                alt={data.name}
                width={300}
                height={300}
                priority
                className="w-full  rounded-full "
              /> */}
            </div>
            {/* <div className="text-xl text-zinc-800 font-bold my-2">
              <span>
                {data.name} <MdVerified />
              </span>
            </div> */}
            <div className="text-xl flex items-center gap-1 text-zinc-800 font-bold my-2 ">
              <span>Name : </span>
              {/* <span>Jabed Ali Mollah</span> */}
              <span className="flex gap-1 ">
                <span>{data.name}</span>{" "}
                <span className="flex items-center">
                  <MdVerified className="text-varified-400" />
                </span>
              </span>
            </div>
            <div className="text-xl text-zinc-800 font-bold my-2">
              <span>Branch : </span>
              {/* <span>Computer Science and Engineering</span> */}
              <span>{data.branch}</span>
            </div>
            <div className="text-xl text-zinc-800 font-bold my-2">
              <span>Date of Birth : </span>
              <span>{data.date_of_birth}</span>
            </div>
            <div className="text-xl text-zinc-800 font-bold my-2">
              <span>City : </span>
              <span>{data.city}</span>
            </div>
            <div className="text-xl text-zinc-800 font-bold my-2">
              <span>State : </span>
              <span>{data.state}</span>
            </div>
            <div className="text-xl text-zinc-800 font-bold my-2">
              <span>Country : </span>
              <span>{data.country}</span>
            </div>
          </div>
          <div className="w-10/12 md:w-7/12 mt-4 lg:mt-0">
            <div className="w-full">
              <h2 className="text-4xl md:text-6xl text-violet-900">ABOUT</h2>
              <hr className="border-2 border-violet-900 mt-2" />
              <p className="mt-4">{data.about}</p>
            </div>
            <div className="mt-4">
              <div>
                <h2 className="text-md md:text-2xl mb-2 text-violet-900 font-bold uppercase">
                  Social Media Links :-
                </h2>
                {/* <hr className="border-2 border-violet-900" /> */}
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row w-full gap-2">
                <a
                  href={data.facebook}
                  target="_blank"
                  className="flex gap-1 justify-center items-center px-3 py-2 md:px-3 md:py-1 md:text-sm lg:text-base lg:px-4 lg:py-2 shadow-2xl  rounded-lg bg-blue-900 text-white"
                >
                  <FaFacebookF /> Facebook
                </a>
                <a
                  href={data.instagram}
                  target="_blank"
                  className="flex gap-1 justify-center items-center px-3 py-2 md:px-3 md:py-1 md:text-sm lg:text-base lg:px-4 lg:py-2 shadow-2xl  rounded-lg bg-pink-900 text-white"
                >
                  <AiFillInstagram /> Instagram
                </a>
                <a
                  href={data.twitter}
                  target="_blank"
                  className="flex gap-1 justify-center items-center px-3 py-2 md:px-3 md:py-1 md:text-sm lg:text-base lg:px-4 lg:py-2 shadow-2xl  rounded-lg bg-black text-white"
                >
                  <BsTwitterX /> Twitter
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  className="flex gap-1 justify-center items-center px-3 py-2  md:px-3 md:py-1 md:text-sm lg:text-base lg:px-4 lg:py-2 shadow-2xl  rounded-lg bg-sky-900 text-white"
                >
                  <FaLinkedinIn /> Linkedin
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5 my-6 border-2 border-violet-950 shadow-2xl p-4 rounded-lg bg-violet-50 hover:bg-violet-100">
              <div className="w:4/5 md:w-2/5 lg:w-1/5">
                {data.graduation_collage_image && (
                  <Image
                    src={data.diploma_collage_image}
                    // alt={data.diploma_collage_name}
                    // alt="collage"
                    alt={`${data.graduation_collage_name}`}
                    width={300}
                    height={300}
                    priority
                  />
                )}

                {/* <Image
                  src={data.diploma_collage_image}
                  // alt={data.diploma_collage_name}
                  // alt="collage"
                  alt={`${data.graduation_collage_name}`}
                  width={300}
                  height={300}
                  priority
                /> */}
              </div>
              <div className="w-full md:w-4/5">
                <h3 className="text-sm md:text-md lg:text-2xl text-violet-900 font-bold">
                  {data.diploma_collage_stream}
                </h3>
                <p className="text-sm lg:text-xl font-bold text-slate-700">
                  {data.diploma_collage_name}
                </p>
                <p className="text-xs lg:text-base font-bold">
                  {data.diploma_collage_duration}| {data.diploma_collage_status}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5 my-6 border-2 border-violet-950 shadow-2xl p-4 rounded-lg bg-violet-50 hover:bg-violet-100">
              <div className="w:4/5 md:w-2/5 lg:w-1/5">
                {data.graduation_collage_image && (
                  <Image
                    src={data.graduation_collage_image}
                    alt={`${data.graduation_collage_name}`}
                    // alt="collage"
                    width={300}
                    height={300}
                    priority
                  />
                )}
                {/* <Image
                  src={data.graduation_collage_image}
                  alt={`${data.graduation_collage_name}`}
                 
                  width={300}
                  height={300}
                  priority
                /> */}
              </div>
              <div className="w-full md:w-4/5">
                <h3 className="text-sm md:text-md lg:text-2xl text-violet-900 font-bold">
                  {data.graduation_collage_stream}
                </h3>
                <p className="text-sm lg:text-xl font-bold text-slate-700">
                  {data.graduation_collage_name}
                </p>
                <p className="text-xs lg:text-base font-bold">
                  {data.graduation_collage_duration} |{" "}
                  {data.graduation_collage_status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

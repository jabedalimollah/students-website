"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rabbit from "../../public/images/Rabbit.png";
import Link from "next/link";
import home from "./database/home.json";
import studentList from "./database/studentsList.json";
import { MdVerified } from "react-icons/md";
export default function Home() {
  const [homeData, setHomeData] = useState(home);
  const [studentData, setStudentData] = useState(studentList);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setHomeData(home);
    setStudentData(studentList);
  }, []);
  return (
    <>
      {/* ============================= Banner Component Start =============================== */}
      <div className="banner_div grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  justify-items-center  content-center 	">
        <div className="overflow-hidden max-w-sm grid content-center p-4">
          {/* <h3 className="text-3xl	">Hello my Name is Jabed</h3> */}
          <h3 className="text-3xl	">{homeData.heading}</h3>
          <p className="py-4">{homeData.banner_content}</p>
          <Link
            href={"/contact"}
            className="bg-violet-200 text-center hover:bg-violet-500 py-2 text-black hover:text-white rounded-md w-2/5"
          >
            Contact Page
          </Link>
        </div>
        <div className="max-w-xl	 overflow-hidden py-4">
          <Image src={Rabbit} alt="Rabbit" />
        </div>
      </div>
      {/* ============================= Banner Component End =============================== */}
      {/* ========================= Groups Component Start ============================ */}
      <div className="flex flex-col items-center justify-center  md:py-6 w-full max-h-sm ">
        <h3 className=" text-2xl md:text-4xl py-4 ">Groups Picture</h3>
        <div className="animated_line "></div>

        <div className=" w-10/12 md:w-8/12 h-full my-8 ">
          {" "}
          <Slider {...settings}>
            {homeData.group_image.map((item, index) => {
              return (
                <div className="w-full h-full  pr-4" key={index}>
                  <Image
                    src={item.GrpImage}
                    alt="groupImage"
                    width={300}
                    height={300}
                    priority
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* ========================= Groups Component End ============================ */}

      {/* ======================== Students Component Start ========================== */}

      <div className="flex flex-col items-center justify-center py-6 w-full ">
        <h3 className=" text-2xl md:text-4xl md:py-4 mb-4 ">
          Students Pictures
        </h3>
        <div className="animated_line "></div>
        <div className="flex justify-center flex-wrap  gap-4 md:gap-8 mt-8 px-4   md:w-4/5">
          {studentData.map((item, index) => {
            return index < 3 ? (
              <div
                className="w-2/5  md:w-3/12 h-48 md:h-full border-2 border-black-400 rounded-lg hover:scale-95 ease-in duration-200 shadow-lg md:shadow-lg"
                key={index}
              >
                <Image
                  src={item.profile_image}
                  alt={item.name}
                  width={300}
                  height={300}
                  priority
                  className="w-full h-4/6 md:h-4/5 rounded-t-lg md:p-2 lg:p-4 "
                />
                <h4 className="text-sm lg:text-2xl text-center  mt-2 md:mt-0 lg:mt-2 font-bold text-neutral-600">
                  <span className="flex gap-1 justify-center">
                    <span>{item.name}</span>
                    <span className="flex items-center">
                      <MdVerified className="text-varified-400" />
                    </span>
                  </span>
                </h4>
                <p className=" text-center md:my-1 lg:my-2 text-xs md:text-md lg:text-lg text-neutral-500 ">
                  {item.branch}
                </p>
              </div>
            ) : null;
          })}
        </div>
      </div>

      {/* ======================== Students Component End ========================== */}
    </>
  );
}

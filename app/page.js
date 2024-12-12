"use client";
import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  const [active, setActive] = useState(1);
  const cards = [
    {
      title: "Strength",
      description: "This is card 1",
      img: "https://images.pexels.com/photos/1458696/pexels-photo-1458696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Mobility",
      description: "This is card 2",
      img: "https://images.pexels.com/photos/15539380/pexels-photo-15539380/free-photo-of-a-great-white-shark-swimming-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Drills",
      description: "This is card 3",
      img: "https://images.pexels.com/photos/9517922/pexels-photo-9517922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/4 h-1/2  rounded-s-[50px] rounded-e-[50px] flex flex-row justify-between overflow-hidden  ">
        {cards.map((val, index) => {
          return (
            <div
              key={index}
              className={`${
                active == index ? "w-3/4" : "w-1/4"
              }  transform duration-200 relative ease-in `}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(1)}
            >
              <img
                src={val.img}
                className="w-full h-full object-cover -z-50 "
              />
              <div className="absolute text-xl uppercase text-white top-1 m-4  mt-4 font-bold ">
                {val.title}
              </div>

              <div
                className={`${
                  active == index ? "absolute" : "hidden"
                } text-xl uppercase text-white right-1 top-1 m-4  mt-4 font-bold `}
              >
                <FaArrowAltCircleRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { technologies } from "../../constants/tech";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { amazonGridBottom, amazonOffer, amazonTopGrid } from "../../constants/amazonGrid";

const Amazon = () => {
  return (
    <>
      <div className="mb-4 text-center pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Amazon
        </h1>
      </div>
      <div className="px-9 grid grid-cols-1 md:grid-cols-2 gap-4">
        {amazonTopGrid.map((top)=>(
          <>
          <div key={top.id} className="w-[90%] flex md:items-start items-center md:justify-start justify-center">
          <img
            src={top.image}
            alt={top.title}
            className="md:w-[80%] w-full md:h-[80%] h-full object-contain"
          />
        </div>
        <div className="text-gray-500">
          {top.para.map((desc)=>(
            <p>
              {desc.desc}
            </p>
          ))}
           <h1 className="text-[25px] text-[#14213d]">
              What services does walmart provide
            </h1>
            <p>
              Reblate Solutions provides a comprehensive suite of Amazon
              advertising services to its customers. These services include
              analyzing campaign data, optimizing ad performance, and providing
              strategic recommendations to help businesses maximize their return
              on investment. With their expertise in Amazon advertising, Reblate
              Solutions aims to help their clients increase visibility, drive
              traffic, and ultimately boost sales on the Amazon platform.
            </p>

        </div>
          </>
        ))}
      </div>
      <div className="md:mb-8 mb-4 max-w-7xl mx-auto w-full">
        <h1 className=" font-black md:text-[60px] md:pl-24 pl-9 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 text-gray-500 md:pl-24 pl-9 max-w-7xl mx-auto mt-4">
          {amazonOffer.map((offer) => (
            <div key={offer.id} className="text-start w-[90%]">
              <h1 className="text-[25px] text-[#14213d]">{offer.title}</h1>
              <ul className="text-normal">
                {offer.desc.map((desc) => (
                  <li className="list-disc" key={offer.id}>
                    {desc.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-9 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {amazonGridBottom.map((bottom)=>(
          <>
          <div key={bottom.id} className="text-gray-700 flex items-center flex-col justify-center">
            {bottom.para.map((desc)=>(
              <p className="text-normal text-gray-500">
              {desc.desc}
            </p>
            ))}
              
          </div>
          <div className="md:w-[80%] w-full flex md:items-start items-center md:justify-end justify-center">
          <img
            src={bottom.image}
            alt={bottom.title}
            className="md:w-[60%] w-full object-contain"
          />
          </div>
          </>
        ))}
        
      </div>
      <div className="mb-4 text-left px-9">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {technologies.map((technology) => (
          <>
            <Link to={technology.link} key={technology.title}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-black/10 p-5 rounded-2xl w-full"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="relative w-[35%] flex md:w-[50%]">
                    <img
                      src={technology.icon}
                      alt="project_image"
                      className="w-[60%] object-contain rounded-2xl md:h-[40px] h-auto"
                    />
                  </div>
                  <div className="w-full flex justify-start">
                    <h3 className="text-black font-bold md:text-[14px] text-[13px] text-start">
                      {technology.title}
                    </h3>
                  </div>
                </div>
              </Tilt>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Amazon;

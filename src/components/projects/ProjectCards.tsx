import React from "react";
import helderlogo from "../../assets/helderlogo.png";

import { Link } from "react-router-dom";

interface Card {
  id: string;
  clientName: string;
  content: string;
  serviceType: string[];
  image: string;
}

interface CardProps {
  currentProjects: Card[];
  currentPage: number;
}

const ProjectCards: React.FC<CardProps> = ({ currentProjects }) => {
  return (
    <div>
      {currentProjects.map((p) => (
        <div
          key={p.id}
          className="flex flex-col md:flex-row border bg-white mb-4 rounded-[20px] lg:mx-10 mx-5"
        >
          <div className="basis-[85%]">
            <img src={helderlogo} alt="" className="block px-1 size-36 mt-2 " />
            <div className="lg:px-12 px-5 -mt-5 ">
              <h2 className="font-extrabold text-[#545454] text-3xl pb-3">
                {p.clientName}
              </h2>
              <p className="font-normal text-base text-[#121212] text-justify">
                {p.content}
              </p>
              <Link
                to={`/projectdetail/${p.id}`}
                className="text-titleFont font-normal text-base flex justify-end "
              >
                View more
              </Link>
            </div>

            <div className="lg:flex flex-wrap gap-6  mt-2 text-[#383838] lg:px-12 px-5 py-2">
              {p.serviceType.map((service, index) => (
                <div className="text-sm border inline-flex lg:m-0 m-2 rounded-md p-1" key={index}>
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="relative basis-[45%] flex ml-9 mt-2">
            <img src={p.image} className="lg:max-w-[25rem] max-w-[12rem]" alt={p.clientName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;

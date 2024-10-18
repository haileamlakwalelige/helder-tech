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
          className="flex flex-col md:flex-row border bg-white mb-4 rounded-[20px] mx-10"
        >
          <div className="basis-[85%]">
            <img src={helderlogo} alt="" className="block px-1 size-36 mt-2 " />
            <div className="px-12 -mt-5 ">
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

            <div className="flex gap-6 mt-2 text-[#383838] px-12 py-2">
              {p.serviceType.map((service, index) => (
                <div className="text-sm border rounded-md p-1" key={index}>
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="relative basis-[45%] flex ml-9 mt-2">
            <img src={p.image} className="max-w-[25rem]" alt={p.clientName} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;

import React from "react";
import founder1 from "../../assets/founder1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team from "../../assets/team.png";


const OurTeam: React.FC = () => {
  return (
    <>
      <div className="relative text-center bg-footer h-60 md:h-96 p-4 ">
        <h1 className="font-bold text-5xl text-white py-6">Meet Our Team</h1>
        <p className="font-normal text-lg md:text-2xl text-white md:p-4 md:max-w-5xl mx-auto ">
          Meet our team of dedicated professionals, passionate about delivering
          innovative solutions tailored to your needs.
        </p>
        <img
          src={team}
          alt=""
          className="absolute inset-0 size-24 left-[72rem] top-24"
        />
      </div>

      <div className="md:relative md:z-10 md:-mt-20 grid grid-1 md:grid-cols-3 my-4  ">

        <div className="bg-white flex flex-col justify-center items-center border rounded-[20px] mx-8 md:mx-20 p-6 md:p-4 md:h-[65vh] md:w-80 md:py-9 ">
          <img
            src={founder1}
            alt=""
            className="rounded-[8px] w-[240px] h-[220px] md:w-[230px] md:h-[180px] object-cover"
          />
          <div className="text-justify border bg-[#ECECEC] rounded-[20px] mt-12 md:mt-5  ">
            <div className="p-4 md:p-2 ">
              <h2 className="text-[#00132D] font-bold text-lg pl-2 mb-1 ">
                Ashenafi Belete
              </h2>
              <span className="text-[#3A79CE] font-normal text-sm pl-3">
                Founder and CEO of Helder tech.
              </span>
            </div>
            <p className="text-normalFont font-normal text-base md:text-sm border border-[#A9A9A9] mx-5 mb-4 p-3 rounded-[8px]">
              Meet our team of dedicated professionals, passionate about
              delivering innovative solutions tailored to your needs.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center border rounded-[20px] mx-8 md:mx-14 p-6 md:p-4 md:h-[65vh] md:w-80 md:py-9 ">
          <img
            src={team2}
            alt=""
            className="rounded-[8px] w-[240px] h-[220px] md:w-[230px] md:h-[180px] object-cover"
          />
          <div className="text-justify border bg-[#ECECEC] rounded-[20px] mt-12 md:mt-5  ">
            <div className="p-4 md:p-2 ">
              <h2 className="text-[#00132D] font-bold text-lg pl-2 mb-1 ">
                Orit Kedir
              </h2>
              <span className="text-[#3A79CE] font-normal text-sm pl-3">
                Software Developer
              </span>
            </div>
            <p className="text-normalFont font-normal text-base md:text-sm border border-[#A9A9A9] mx-5 mb-4 p-3 rounded-[8px]">
              Meet our team of dedicated professionals, passionate about
              delivering innovative solutions tailored to your needs.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center border rounded-[20px] mx-8 md:mx- p-6 md:p-4 md:h-[65vh] md:w-80 md:py-9 ">
          <img
            src={team3}
            alt=""
            className="rounded-[8px] w-[240px] h-[220px] md:w-[230px] md:h-[180px] object-cover"
          />
          <div className="text-justify border bg-[#ECECEC] rounded-[20px] mt-12 md:mt-5  ">
            <div className="p-4 md:p-2 ">
              <h2 className="text-[#00132D] font-bold text-lg pl-2 mb-1 ">
                Seid Degu
              </h2>
              <span className="text-[#3A79CE] font-normal text-xs pl-3 flex text-justify px-9">
                CTO,Computer Engineer,Mobile App Developer,AI programmer
              </span>
            </div>
            <p className="text-normalFont font-normal text-base md:text-sm border border-[#A9A9A9] mx-5 mb-4 p-3 rounded-[8px]">
              Meet our team of dedicated professionals, passionate about
              delivering innovative solutions tailored to your needs.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default OurTeam;

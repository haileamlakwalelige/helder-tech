import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import YessSolution from "./ProjectDetail/YessSolution";
import Download from "./ProjectDetail/Download";
import ProjectForm from "./ProjectDetail/ProjectForm";

interface Card {
  id: string;
  clientName: string;
  content: string;
  serviceType: string;
  sampleImage: string;
  typography: {
    style: string;
    size: string;
  };
  colors: {
    primary: string;
    secondary: string;
  };
  heroName: string;
  heroText: string;
  heroImage: string;
  introText: string;
  introImage: string;
  projectText: string;
  pClientName: string;
  clientOrganization: string;
  industry: string;
  projectImage: string;
  objectiveText: string;
  challenges: string;
  objectiveImage: string;
  user: string;
  development: string;
  devTest: string;
  featureImage: string;
  solutionImage: string;
  solution: string;
  outcome: string;
  showcaseText: string;
  showcaseVideo: string;
  testimonyProfile: string;
  testimonyPerson: string;
  testimonyPTitle: string;
  testimonyText: string;
  commentImage: string;
  testimonyVideo: string;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  console.log("ID", id);
  const [data, setData] = useState<Card[]>([]);
  const [singleData, setSingleData] = useState<Card | undefined>(undefined);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get<Card[]>("/api/blog.json");
        console.log("Fetched data:", response.data);
        setData(response.data);
        const singleData = response.data.find((item) => item.id === id);
        setSingleData(singleData);
      } catch (error) {
        console.error("Error fetching the blog post:", error);
      }
    };

    fetch();
  }, [id]);

  if (!singleData) {
    return <div>Loading...</div>;
  }

  const {
    clientName,
    heroName,
    heroText,
    heroImage,
    introText,
    introImage,
    projectText,
    pClientName,
    clientOrganization,
    industry,
    projectImage,
    objectiveText,
    challenges,
    objectiveImage,
    user,
    devTest,
    development,
    featureImage,
    solutionImage,
    solution,
    outcome,
    showcaseText,
    showcaseVideo,
    testimonyProfile,
    testimonyPerson,
    testimonyPTitle,
    testimonyText,
    commentImage,
    testimonyVideo,
  } = singleData;

  return (
    <div className="bg-[#eff8fd] ">
      {/* hero section desktop view */}
      <div className=" lg:flex hidden pb-[7rem] relative bg-white">
        <div className="pt-[13rem] h-[34rem]">
          <p className="text-[3.2rem] font-extrabold tracking-widest  ml-[6rem]  text-[#004ba5]">
            {heroName}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: heroText }}
            className="text-[#383838] ml-[2rem] text-[17px]  absolute w-[35rem] text-center font-semibold pt-[2rem]"
          />

          {clientName == "YESS ETHIOPIA" && <Download />}
        </div>
        <div className="pt-[4.3rem]  -right-20 absolute">
          <img src={heroImage} className="w-[53rem]" />
        </div>
      </div>

      {/* hero section mobile view */}

      <div className="lg:hidden pt-[6rem]">
        <p className="text-[2rem] font-extrabold lg:tracking-widest tracking-wide text-center  text-[#004ba5]">
          {heroName}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: heroText }}
          className="text-[#383838] mx-[2rem] text-[17px] text-center font-semibold pt-[1rem]"
        />
        <div className="pt-[1rem]">
          <img src={heroImage} className="w-[53rem]" />
        </div>
        {clientName == "YESS ETHIOPIA" && <Download />}
      </div>

      {/* introduction part */}
      <div className="lg:ml-[3rem] mx-[1rem] flex bg-white lg:px-[3rem] px-5 gap-16  py-2 rounded-2xl mt-[2rem] ">
        <div className="w-[76rem]">
          <p className="text-[#004ba5] lg:hidden text-center tracking-wide  text-[2rem] mb-5 font-extrabold">
            INTRODUCTION
          </p>
          <div className="lg:hidden">
            <img src={introImage} className="w-[60rem] lg:py-10" />
          </div>
          <p className="text-[#004ba5] lg:block hidden tracking-widest text-[3.2rem] mb-5 font-extrabold">
            INTRODUCTION
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: introText }}
            className="text-black font-medium lg:text-[17px] text-[16px]"
          />
        </div>
        <div className="lg:block hidden">
          <img src={introImage} className="w-[60rem] py-10" />
        </div>
      </div>

      {/* project overview */}
      <div className="lg:ml-[3rem] mx-[1rem] lg:flex bg-white lg:px-[3rem] px-5 gap-10  py-2 rounded-2xl mt-[2rem] ">
        <p className="text-[#004ba5] lg:hidden mt-5 tracking-wide  text-center text-[1.7rem] mb-5 font-extrabold">
          PROJECT OVERVIEW
        </p>
        <div>
          <img src={projectImage} className="lg:w-[75rem] lg:py-10" />
        </div>
        <div className="lg:w-[80rem]">
          <p className="text-[#004ba5] lg:block hidden mt-5 lg:mt-0 tracking-widest lg:text-[3.2rem] text-[1.5rem] mb-5 font-extrabold">
            PROJECT OVERVIEW
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: projectText }}
            className="text-black font-medium text-[16px] lg:text-[17px]"
          />

          <ul className="list-disc pl-5 text-black lg:pt-[3rem] pt-[2rem] lg:mr-[10rem] ml-3">
            <li className="mb-3">
              <span className="font-bold ">Client Name:-</span> {pClientName}
            </li>
            {clientOrganization && (
              <li className="mb-3">
                <span className="font-bold ">Client Organization:-</span>{" "}
                {clientOrganization}
              </li>
            )}
            <li className="mb-3">
              <span className="font-bold">Industry:-</span> {industry}
            </li>
          </ul>
        </div>
      </div>

      {/* objective part */}
      <div className="lg:ml-[3rem] mx-[1rem] lg:flex bg-white lg:px-[3rem] px-[2rem] gap-16  py-5 rounded-2xl mt-[2rem] ">
        <div className="lg:w-[76rem]">
          <p className="text-[#004ba5] text-center lg:text-start lg:tracking-widest tracking-wide lg:text-[3.2rem] text-[2rem] mb-5 font-extrabold">
            OBJECTIVE
          </p>
          <div className="lg:hidden">
            <img src={objectiveImage} className="w-[75rem] lg:py-10" />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: objectiveText }}
            className="text-black font-medium text-[17px]"
          />
          <p className="text-[#004ba5] tracking-widest text-[1.5rem] mt-3 font-extrabold">
            CHALLENGES
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: challenges }}
            className="text-black font-medium mt-3 text-[17px]"
          />
        </div>
        <div className="lg:block hidden">
          <img src={objectiveImage} className="w-[75rem] py-10" />
        </div>
      </div>

      {/* feature part */}
      <div className="lg:ml-[3rem] mx-[1rem] lg:flex bg-white lg:px-[3rem] px-[2rem] gap-16  py-2 rounded-2xl mt-[2rem] ">
        <div className="lg:w-[48rem]">
          <p className="text-[#004ba5] lg:tracking-widest tracking-wide lg:text-[3.2rem] text-[2rem] mb-5 font-extrabold">
            FEATURE
          </p>
          <div className="lg:hidden">
            <img src={featureImage} className="w-[75rem] py-10" />
          </div>
          <p className="text-[#004ba5] lg:tracking-widest tracking-wide lg:text-[1.3rem] text-[17px] mt-3 font-bold">
            User Experience Research & Design
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: user }}
            className="text-black font-medium mt-3 text-[16px] lg:text-[17px]"
          />

          <p className="text-[#004ba5] tracking-widest text-[1.3rem] mt-10 font-extrabold">
            Development Process
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: development }}
            className="text-black font-medium mt-3 text-[16px] lg:text-[17px]"
          />
          <p className="text-[#004ba5] tracking-widest text-[1.3rem] mt-10 font-extrabold">
            Development Test
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: devTest }}
            className="text-black font-medium mt-3 text-[16px] lg:text-[17px]"
          />
        </div>
        <div className="lg:block hidden">
          <img src={featureImage} className="w-[75rem] py-10" />
        </div>
      </div>

      {/* solution part */}
      <div className="lg:ml-[3rem] mx-[1rem] items-center mr-[1rem] lg:flex bg-white px-[1.5rem] gap-5  py-2 rounded-2xl mt-[2rem] ">
        <p className="text-[#004ba5] lg:hidden tracking-wide text-[2rem] mb-1 font-extrabold">
          SOLUTIONS
        </p>
        <div>
          <img src={solutionImage} className="lg:w-[85rem] " />
        </div>
        <div className="lg:w-[110rem]">
          <p className="text-[#004ba5] lg:block hidden tracking-widest text-[3.2rem] mb-1 font-extrabold">
            SOLUTIONS
          </p>
          {solution && (
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: solution }}
                className="text-black font-medium mt-3 text-[16px] lg:text-[17px]"
              />
            </div>
          )}
          {clientName == "YESS ETHIOPIA" && <YessSolution />}
        </div>
      </div>

      {/* outcome part */}
      <div className="lg:ml-[3rem] mx-[1rem] mr-[1rem] bg-white lg:px-[3rem] px-[2rem] gap-5  py-2 rounded-2xl mt-[2rem] ">
        <p className="text-[#004ba5] lg:tracking-widest tracking-wide lg:text-[3.2rem] text-[2rem] mb-1 font-extrabold">
          OUTCOMES
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: outcome }}
          className="text-black font-medium lg:mx-[2rem] mt-3 text-[16px] lg:text-[17px]"
        />
      </div>

      {/*showcase part  */}
      <p className="text-[#004ba5] mt-[2rem] text-center tracking-wide lg:tracking-widest lg:text-[3.2rem] text-[2rem]  mb-1 font-extrabold">
        SHOW CASE
      </p>
      <div className="lg:ml-[3rem] mx-[1rem] mr-[1rem] bg-white lg:px-[6rem] px-[2rem] gap-5  py-2 rounded-2xl mt-[2rem] ">
        <div
          dangerouslySetInnerHTML={{ __html: showcaseText }}
          className="text-black font-medium lg:mx-[2rem] text-center mt-3 text-[16px] lg:text-[17px]"
        />
        {showcaseVideo && (
          <img src={showcaseVideo} className="w-[42rem] mx-auto my-5" />
        )}
      </div>

      {/*testimony part  */}
      <p className="text-[#004ba5] mt-[2rem] text-center tracking-wide lg:tracking-widest lg:text-[3.2rem] text-[2rem]  mb-1 font-extrabold">
        TESTIMONY
      </p>
      <div className="lg:flex items-center lg:mr-[2rem] ">
        <div className="lg:ml-[3rem] mx-[1rem] mr-[1rem] bg-white gap-5  py-10 rounded-2xl mt-[2rem] ">
          <div className="flex items-center gap-2 lg:px-[4rem] px-[2rem] mb-2">
            <img src={testimonyProfile} className="w-[4rem] " />
            <div className="">
              <p className="text-[#383838] font-semibold text-[18px]">
                {testimonyPerson}
              </p>
              <p className="text-sm text-[#383838]">{testimonyPTitle}</p>
            </div>
          </div>
          <div className="px-[4rem]">
            <hr />
          </div>

          <p className="text-black font-medium  lg:px-[6rem] px-[2rem] pt-5 text-[15px]">
            {testimonyText}
          </p>
          {commentImage && (
            <div>
              <div className="pr-[6rem] pt-5">
                <hr />
              </div>
              <div className="px-[2rem] text-sm text-[#474747]">
                <p>Comments</p>
                <img src={commentImage} className="w-[23rem]" />
              </div>
            </div>
          )}
        </div>
        <div className="mx-[1rem] lg:mx-0">
          <img src={testimonyVideo} className="w-[65rem]" />
        </div>
      </div>

      {/* previous and next part */}
      <div className="mt-[2rem] flex justify-between lg:mx-[6rem] mx-[2rem]">
        <div className="bg-[#004ba5] py-2 text-lg px-10 text-white inline-flex rounded-full">
          <p>Previous</p>
        </div>
        <div className="bg-[#004ba5] py-2 text-lg px-10 text-white inline-flex rounded-full">
          <p>Next</p>
        </div>
      </div>

      {/* form */}
      <div className="mt-[2rem]">
        <ProjectForm />
      </div>
    </div>
  );
};

export default ProjectDetail;

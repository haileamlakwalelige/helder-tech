import MainTitle from "../reusables/MainTitle";
import homeServiceImg1 from "../../assets/homeServiceImg1.png";
import homeServiceImg2 from "../../assets/homeServiceImg2.png";
import homeServiceIcon1 from "../../assets/homeServiceIcon1.png";
import homeServiceIcon2 from "../../assets/homeServiceIcon2.png";

const HomeProjects = () => {
  return (
    <div className="w-full p-[20px] bg-secondary relative">
      <MainTitle title="PROJECTS" />
      <img src={homeServiceIcon2} alt="" className="absolute top-12 left-[172px]" />

      <div className="w-full text-black flex items-center justify-center">
        <div className="w-[48%] px-[25px] py-[50px] bg-white flex flex-col items-start justify-center gap-[30px] relative">
          <h2 className="z-10 text-[24px] text-titleFont font-semibold font-['Crimson_Text']">Our Projects</h2>
          <p className="z-10 text-[20px] leading-[25px] tracking-[2%]">
            At Helder Technologies, we pride ourselves on our diverse portfolio
            of successful projects spanning various industries. From innovative
            software solutions to captivating digital marketing campaigns and
            stunning graphic design creations, our experience encompasses a wide
            array of client needs and objectives.
          </p>
          <img src={homeServiceIcon1} width="161px" height="121px" className="z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" alt="" />
        </div>
        
        <div className="w-[48%] min-h-[510px] bg-white p-[20px] flex items-center justify-center relative">
            <img src={homeServiceImg2} alt="" className="z-10 relative bottom-32 left-20" />
            <img src={homeServiceImg1} alt="" className="z-10" />
            <img src={homeServiceIcon1} alt="" className="z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;

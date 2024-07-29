import Button from "../reusables/Button";
import MainTitle from "../reusables/MainTitle";
import aboutUsImg from "../../assets/aboutUs.jpg";
import decorationIcon from "../../assets/decorationIcon.png";

const HomeAbout = () => {
  return (
    <div className="px-[20px] py-[40px] bg-secondary">
      <MainTitle title="ABOUT US" />
      <div className="w-[97%] h-[350px] m-auto p-[24px] bg-white flex items-center justify-between gap-[12px] relative">
        <div className="text-justify flex flex-col items-start justify-center gap-[20px]">
          <h2 className="text-titleFont text-[24px] font-semibold">Welcome to Our Company</h2>
          <p className="w-[47%] text-[20px] text-[#3a3a3a] leading-[25px] tracking-[2%]">
            We are a team of passionate professionals with a mission to help
            business grow and succeed in today's digital age. Our core services
            include website development, mobile app and desktop development,
            system software development digital marketing and graphic design.
            With our work of with different industries client and expertise, we
            have successfully delivered top-quality solutions to our clients who
            span accross different industries
          </p>

          <Button />
        </div>

        <img src={aboutUsImg} alt="" className="z-10 absolute right-0" />
        <img src={decorationIcon} alt="" className="z-0 absolute bottom-0 left-[50%] translate-x-[-70%]" />
      </div>
    </div>
  );
};

export default HomeAbout;

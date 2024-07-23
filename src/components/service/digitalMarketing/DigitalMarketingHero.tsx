import heroImg from "../../../assets/digitalMarketingHero.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const DigitalMarketingHero = () => {
  return (
    <div className="w-screen text-white">
      <img
        src={heroImg}
        alt=""
        className="w-[100%] lg:min-h-[636px] min-h-[480px] object-cover"
      />

      <div className="absolute lg:top-[306px] top-[100px] lg:left-[76px] flex flex-col lg:items-start items-center md:gap-[28px] gap-[10px]">
        <h1 className="lg:text-[55px] text-[20px] font-[800]">
          Digital Marketing
        </h1>
        <p className="w-[73%] lg:text-[24px] text-[14px] leading-[25px] tracking-[2%] lg:text-justify text-center font-[400]">
          Digital marketing has become an essential component of any effective
          marketing strategy in today's digital age. At Helder Technologies, we
          specialize in leveraging digital channels to help businesses reach
          their target audience, drive engagement, and achieve their marketing
          objectives.
        </p>
        <button className="p-[10px] bg-titleFont text-white text-[18px] flex items-center justify-center gap-[10px] rounded-[36px]">
          contact us <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingHero;

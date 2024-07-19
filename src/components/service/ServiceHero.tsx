import heroImg from "../../assets/serviceHeroImg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceHero = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="w-screen text-white">
        <img src={heroImg} alt="" className="w-[100%]" />

        <div className="absolute top-[306px] left-[76px] flex flex-col items-start gap-[28px]">
          <h1 className="text-[55px] font-[800]">SOFTWARE DEVELOPMENT</h1>
          <p className="w-[73%] text-[24px] leading-[25px] tracking-[2%] text-justify font-[400]">
            At Helder Technologies, we specialize in creating custom software
            solutions tailored to your specific needs. Our team of experienced
            developers utilizes the latest technologies and best practices to
            deliver high-quality software that empowers your business.
          </p>
          <button className="p-[10px] bg-titleFont text-white text-[18px] flex items-center justify-center gap-[10px] rounded-[36px]">contact us <FaArrowRightLong /></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

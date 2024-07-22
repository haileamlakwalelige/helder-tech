import heroImg from "../../assets/serviceHeroImg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceHero = () => {
  return (
    <div className="mb-[20px] w-screen">
      <div className="w-screen text-white">
        <img src={heroImg} alt="" className="w-[100%] lg:min-h-[636px] min-h-[480px] object-cover" />

        <div className="absolute lg:top-[306px] top-[100px] lg:left-[76px] flex flex-col lg:items-start items-center gap-[28px]">
          <h1 className="lg:text-[55px] text-[20px] font-[800]">SOFTWARE DEVELOPMENT</h1>
          <p className="w-[73%] lg:text-[24px] text-[14px] leading-[25px] tracking-[2%] lg:text-justify text-center font-[400]">
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

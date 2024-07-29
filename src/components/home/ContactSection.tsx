import { FaArrowRightLong } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="w-screen py-[35px] bg-footer flex flex-col items-center justify-center gap-[20px]">
      <p className="w-[82%] text-white text-[30px] text-center font-['Crimson_Text']">
        Ready to revolutionize your digital presence and propel your business
        forward? Connect with Helder Technologies today to explore tailored
        solutions in software development, digital marketing, and graphic
        design. Let's collaborate to transform your vision into a digital
        success story.
      </p>

      <button className="w-[151px] h-[41px] bg-white text-titleFont flex items-center justify-between rounded-[36px] hover:bg-titleFont hover:text-white transition-colors duration-300">
        <h2 className="text-[18px] tracking-[2%] relative left-[10px]">
          Contact us
        </h2>
        <div className="w-[41px] h-[41px] bg-titleFont rounded-[50%] flex items-center justify-center text-white font-semibold">
          <FaArrowRightLong />
        </div>
      </button>
    </div>
  );
};

export default ContactSection;

import img from "../../assets/Rectangle 12.png";
import quote from "../../assets/quote.png";

const TestimonyCard = () => {
  return (
    <div className="w-[280px] h-[329px] p-[10px] flex flex-col items-center justify-between carousel-item rounded-box">
      <div className="flex flex-col items-center justify-center gap-[25px]">
        <div className="relative">
          <img src={img} alt="" className="w-full" />
          <img
            src={quote}
            alt=""
            width="36px"
            height="36px"
            className="absolute bottom-0 left-[10%] translate-y-[50%]"
          />
        </div>

        <p className="w-[95%] text-[16px] text-justify font-['Crimson_Text'] leading-[19px]">
          “without me traveling to Ethiopia, they turn  my ambition of building
          a digital library system for my school into reality”
        </p>
      </div>

      <div className="w-[90%] flex flex-col items-start justify-center ">
        <h2 className="text-titleFont text-[16px] font-['Crimson_Text'] font-bold">
          Mr. Abraham W Alemu
        </h2>
        <h2 className="text-[14px] text-[#2CCF00]">BMJ highschool, USA</h2>
      </div>
    </div>
  );
};

export default TestimonyCard;

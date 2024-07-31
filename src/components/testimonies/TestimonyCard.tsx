import quote from "../../assets/quote.png";

interface testimonyData {
  img: string;
  testimony: string;
  name: string;
  position: string;
}

interface props {
  data: testimonyData;
}

const TestimonyCard: React.FC<props> = (props) => {
  return (
    <div className="w-[280px] min-h-[329px] z-10 p-[10px] flex flex-col items-center justify-between carousel-item rounded-box">
      <div className="flex flex-col items-center justify-center gap-[25px]">
        <div className="relative">
          <img src={props.data.img} alt="" className="w-[279px] h-[179px] object-cover rounded-[8px]" />
          <img
            src={quote}
            alt=""
            width="36px"
            height="36px"
            className="absolute bottom-0 left-[10%] translate-y-[50%]"
          />
        </div>

        <p className="w-[95%] text-[16px] text-justify font-['Crimson_Text'] leading-[19px]">
          {props.data.testimony}
        </p>
      </div>

      <div className="w-[90%] flex flex-col items-start justify-center ">
        <h2 className="text-titleFont text-[16px] font-['Crimson_Text'] font-bold">
          {props.data.name}
        </h2>
        <h2 className="text-[14px] text-[#2CCF00]">{props.data.position}</h2>
      </div>
    </div>
  );
};

export default TestimonyCard;

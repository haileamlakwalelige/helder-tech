interface props {
  img: string;
  title: string;
  description: string[];
}

const Card1: React.FC<props> = (props) => {
  return (
    <div className="md:w-[329px] w-[300px] md:h-[305px] h-[275px] mb-[20px] p-[40px] bg-[#f9f9f9] rounded-[18px] flex flex-col items-center justify-center gap-[40px]">
      <div className="w-[100%] flex items-center justify-evenly gap-3 relative md:right-[20%] right-[10%]">
        <img src={props.img} alt="" />
        <h2 className="text-primary text-[24px] text-center font-[600]">{props.title}</h2>
      </div>

      <ul className="text-[#6f6f6f] text-[20px] leading-[25px] tracking-[2%] list-disc">
        <li>{props.description[0]}</li>
        <li>{props.description[1]}</li>
        <li>{props.description[2]}</li>
        <li>{props.description[3]}</li>
      </ul>
    </div>
  );
};

export default Card1;

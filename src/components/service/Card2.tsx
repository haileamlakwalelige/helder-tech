interface props {
  img: string;
  title: string;
  description: string;
}

const Card2: React.FC<props> = (props) => {
  return (
    <div className="p-[20px] bg-white flex items-center justify-evenly rounded-[18px]">
      <img src={props.img} alt="" />

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[24px] text-[#006cff] font-[600px]">{props.title}</h2>
        <p className="w-[75%] text-[12px] text-[#6f6f6f] font-[400] ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card2;

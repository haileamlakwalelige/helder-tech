interface props {
  img: string;
  title: string;
  description: string;
}

const Card2: React.FC<props> = (props) => {
  return (
    <div className="lg:w-[100%] w-[80%] p-[20px] bg-white grid md:grid-cols-2 sm:grid-cols-1 place-items-center rounded-[18px] gap-[20px]">
      <img src={props.img} alt="" />

      <div className="w-[100%] text-center flex flex-col md:items-start items-center justify-center gap-[10px]">
        <h2 className="md:text-[24px] text-[18px] text-[#006cff] font-[600]">{props.title}</h2>
        <p className="text-[12px] text-[#6f6f6f] text-justify font-[400] ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card2;

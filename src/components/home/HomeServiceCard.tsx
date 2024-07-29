interface props {
  img: string;
  title: string;
  description: string;
}

const HomeServiceCard: React.FC<props> = (props) => {
  return (
    <div className="w-[20%] p-[15px] flex flex-col items-center justify-center gap-[20px] hover:bg-[url('/hoverImg.png')] hover:bg-cover">
      <div className="w-full h-[200px] shadow-md flex items-center justify-center">
        <img src={props.img} alt="" />
      </div>

      <h2 className="text-[20px] text-titleFont font-bold text-center">
        {props.title}
      </h2>
      <p className="text-[16px] text-[#3a3a3a] text-center leading-[130%] tracking-[2%]">
        {props.description}
      </p>
    </div>
  );
};

export default HomeServiceCard;

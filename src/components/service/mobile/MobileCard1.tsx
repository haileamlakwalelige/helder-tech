interface props {
  title: string;
  description: string;
}

const MobileCard1: React.FC<props> = (props) => {
  return (
    <div className="md:w-[329px] w-[300px] md:h-[305px] h-[275px] mb-[20px] p-[40px] bg-[#f9f9f9] rounded-[18px] flex flex-col items-center justify-center gap-[40px]">
      <h2 className="w-full text-primary text-[24px] text-center font-[600]">
        {props.title}
      </h2>
      <p className="text-normalFont text-[16px] text-justify font-[400]">
        {props.description}
      </p>
    </div>
  );
};

export default MobileCard1;

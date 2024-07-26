interface detailItem {
  title: string;
  description: string;
}

interface props {
  img: string;
  title: string;
  detail: detailItem[];
}

const BenefitItem: React.FC<props> = (props) => {
  return (
    <div className="lg:w-[30%] w-[80%] p-[40px] lg:min-h-[450px] bg-white flex flex-col items-center justify-center gap-[20px] rounded-[18px]">
      <div className="w-full flex xl:flex-row flex-col items-center justify-center xl:gap-[5px] gap-[20px]">
        <img src={props.img} alt="" />
        <h2 className="w-[110%] md:text-[24px] text-[20px] text-titleFont text-center font-[600]">
          {props.title}
        </h2>
      </div>

      <ul className="list-disc text-justify">
        {props.detail.map((item) => (
          <li key={item.title} className="text-titleFont text-[14px] leading-[25px] tracking-[2%]">
            <span className="font-[700]">{item.title}</span>
            <span className="text-normalFont font-[400]">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitItem;

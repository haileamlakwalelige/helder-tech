interface detailItem {
    title: string;
    description: string;
}

interface serviceData {
  img: string;
  title: string;
  detail: detailItem[];
}

interface props {
  data: serviceData;
}

const ServiceCard: React.FC<props> = (props) => {
  return (
    <div className="w-[100%] md:h-[250px] min-h-[250px] p-[30px] bg-secondary flex flex-col items-center justify-center gap-[10px] rounded-[18px]">
      <div className="w-full grid lg:grid-cols-[10%_90%] md:grid-cols-[20%_80%] place-items-center md:gap-[0px] gap-[20px]">
        <img src={props.data.img} alt="" />
        <h2 className="text-[24px] text-titleFont md:text-justify text-center font-[600]">
          {props.data.title}
        </h2>
      </div>

      <ul className="w-[95%] text-justify list-disc">
        {props.data.detail.map((item) => (
          <li className="text-[14px] text-titleFont font-[400] leading-[16.41px]">
            <span className="font-[700]">{item.title} </span>
            <span className="text-normalFont">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;

import Card2 from "./Card2";

interface sectionData {
  img: string;
  title: string;
  description: string;
}

interface props {
  data: sectionData[];
}

const ServiceSection2: React.FC<props> = (props) => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="w-screen min-h-[525px] bg-secondary mt-[35px] md:py-[40px] py-[30px] md:px-[150px]">
        <h2 className="mb-[45px] text-[#006CFF] md:text-[32px] text-[20px] text-center font-[700]">
          Web Frameworks We Use
        </h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center md:gap-x-[10%] lg:gap-y-[65px] gap-y-[30px]">
          {props.data.map((item) => (
            <Card2
              key={item.title}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <img
          src="serviceDecoration1.png"
          alt=""
          className="z-0 absolute top-[5%] left-0 md:visible invisible"
        />
        <img
          src="serviceDecoration2.png"
          alt=""
          className="z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <img
          src="serviceDecoration3.png"
          alt=""
          className="z-0 absolute bottom-0 right-0 md:visible invisible"
        />
    </div>
  );
};

export default ServiceSection2;

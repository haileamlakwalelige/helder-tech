import Card2 from "./Card2";

interface frameworkData {
  img: string;
  title: string;
  description: string;
}

interface props {
  data: frameworkData[];
}

const ServiceSection2: React.FC<props> = (props) => {
  return (
    <div className="w-screen min-h-[525px] bg-secondary mt-[35px] py-[30px] px-[150px]">
        <h2 className="mb-[45px] text-[#006CFF] text-[32px] text-center font-[700]">Web Frameworks We Use</h2>
      <div className="grid grid-cols-2 place-items-center gap-x-[10%] gap-y-[20%]">
        {props.data.map(item => <Card2 key={item.title} img={item.img} title={item.title} description={item.description} />)}
      </div>
    </div>
  );
};

export default ServiceSection2;

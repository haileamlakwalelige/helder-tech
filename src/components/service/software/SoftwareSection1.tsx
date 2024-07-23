import Card1 from "./Card1";

interface engagementModelData {
  img: string;
  title: string;
  description: string[];
}

interface props {
  data: engagementModelData[];
}

const SoftwareSection1: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-[35px] md:text-[32px] text-[25px] text-primary text-center font-[700]">
        Engagement Models
      </h2>

      <div className="w-screen flex lg:flex-row flex-col items-center justify-evenly">
        {props.data.map((item) => (
          <Card1
            key={item.title}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SoftwareSection1;

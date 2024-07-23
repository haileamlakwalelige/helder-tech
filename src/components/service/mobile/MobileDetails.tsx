import MobileCard1 from "./MobileCard1";

interface mobileServices {
  title: string;
  description: string;
}

interface props {
  data: mobileServices[];
}

const MobileDetails: React.FC<props> = (props) => {
  return (
    <div>
      <h2 className="my-[35px] md:text-[32px] text-[25px] text-primary text-center font-[700]">
        Our Services Include
      </h2>
      <div className="w-screen flex lg:flex-row flex-col items-center justify-evenly">
        {props.data.map(item => <MobileCard1 title={item.title} description={item.description} />)}
      </div>
    </div>
  );
};

export default MobileDetails;

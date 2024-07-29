import Button from "../reusables/Button";
import MainTitle from "../reusables/MainTitle";
import HomeServiceCard from "./HomeServiceCard";

const homeServiceData = [
  {
    img: "homeServiceImg1.png",
    title: "Software Development",
    description:
      "We provide a Full Stack Website, Mobile app and Desktop Dev't, AWS Cloud Service.",
  },
  {
    img: "homeServiceImg2.png",
    title: "Digital Marketing",
    description:
      "Our digital marketing service Social Media ads, branding, social media marketing, Content Marketing",
  },
  {
    img: "homeServiceImg3.png",
    title: "Graphic Design",
    description:
      "Our graphic design service are Printing design, logo design, Social Media Graphics, branding, 2D & 3D animation",
  },
  {
    img: "homeServiceImg4.png",
    title: "Training",
    description:
      "we provide a training in python programming, Basic Computer Skills, Digital Marketing and Full stack website development",
  },
];

const Services = () => {
  return (
    <div className="w-screen p-[20px]">
      <MainTitle title="OUR SERVICES" />
      <div className="w-full flex items-center justify-evenly">
        {homeServiceData.map((item) => (
          <HomeServiceCard img={item.img} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="w-full mt-[30px] flex items-center justify-center"><Button /></div>
    </div>
  );
};  

export default Services;

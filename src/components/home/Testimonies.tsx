import MainTitle from "../reusables/MainTitle";
import homeServiceIcon2 from "../../assets/homeServiceIcon2.png";
import quote from "../../assets/quote.png";
import TestimonyCard from "../testimonies/TestimonyCard";
import testimonyIcon from "../../assets/testimonyIcon1.png";

const testimonyData = [
  {
    img: "testimonyImg1.png",
    testimony:
      "“without me traveling to Ethiopia, they turn  my ambition of building a digital library system for my school into reality”",
    name: "Mr. Abraham W Alemu",
    position: "BMJ highschool, USA",
  },
  {
    img: "testimonyImg2.png",
    testimony:
      "“They provide a service for our Local NGO organization of Website development, graphic design which help us to serve our community digitally.”",
    name: "Mr. Tefera Hailu",
    position: "CFSEthiopia, AA",
  },
  {
    img: "testimonyImg3.png",
    testimony:
      "“they are a trusted partner who we rely on for timely work in graphic design and website update”",
    name: "Mrs. Haimanot G/Meriam ",
    position: "Mintu Export Manager",
  },
];

const Testimonies = () => {
  return (
    <div className="w-full p-[20px] bg-white relative text-black">
      <MainTitle title="TESTIMONIES" />
      <img
        src={homeServiceIcon2}
        alt=""
        className="absolute top-12 left-[192px]"
      />

      <img
        src={testimonyIcon}
        alt=""
        className="w-[248px] z-10 absolute top-[30%] left-[60%]"
      />

      <div className="w-[95%] min-h-[429px] m-auto bg-secondary flex items-center justify-center gap-[25px] relative">
        <img src={quote} alt="" className="absolute top-[-40px] left-[-40px]" />

        <div className="w-[30%] flex flex-col items-center justify-center gap-[25px] relative">
          <img src={testimonyIcon} alt="" className="z-0 absolute top-[60%]" />

          <h2 className="z-10 text-[24px] text-titleFont text-center font-semibold font-['Crimson_Text']">
            Building Sustainable Client Relationships
          </h2>

          <p className="z-10 text-[16px] text-justify font-['Crimson_Text']">
            Helder Technologies fosters strong connections with our clients,
            ensuring sustainable relationships built on trust and collaboration.
            Our dedication to understanding and fulfilling their needs is the
            cornerstone of our success.
          </p>
        </div>

        <div className="w-[64%] carousel carousel-center">
          {testimonyData.map((item) => (
            <TestimonyCard data={item} />
          ))}
          {testimonyData.map((item) => (
            <TestimonyCard data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

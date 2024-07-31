import MainTitle from "../reusables/MainTitle";
import homeServiceIcon2 from "../../assets/homeServiceIcon2.png";
import quote from "../../assets/quote.png";
import TestimonyCard from "../testimonies/TestimonyCard";

const Testimonies = () => {
  return (
    <div className="w-full p-[20px] bg-secondary relative text-black">
      <MainTitle title="TESTIMONIES" />
      <img
        src={homeServiceIcon2}
        alt=""
        className="absolute top-12 left-[192px]"
      />

      <div className="w-[95%] min-h-[429px] m-auto bg-white flex items-center justify-center gap-[25px] relative">
        <img src={quote} alt="" className="absolute top-[-40px] left-[-40px]" />

        <div className="w-[30%] flex flex-col items-center justify-center gap-[25px]">
          <h2 className="text-[24px] text-titleFont text-center font-semibold font-['Crimson_Text']">
            Building Sustainable Client Relationships
          </h2>

          <p className="text-[16px] text-justify font-['Crimson_Text']">
            Helder Technologies fosters strong connections with our clients,
            ensuring sustainable relationships built on trust and collaboration.
            Our dedication to understanding and fulfilling their needs is the
            cornerstone of our success.
          </p>
        </div>

        <div className="w-[64%] carousel carousel-center">
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

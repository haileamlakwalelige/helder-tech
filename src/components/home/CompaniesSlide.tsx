import emontiel from "../../assets/emontiel.png";
import frontline from "../../assets/frontline.png";
import mpower from "../../assets/mpower.png";
import fewis from "../../assets/fewis.png";
import osiri from "../../assets/osiri.png";
import lawOffice from "../../assets/lawOffice.png";
import agolbach from "../../assets/agolbach.png";

const CompaniesSlide = () => {
  return (
    <div className="w-full h-[200px] p-[30px] bg-secondary carousel carousel-center gap-[70px]">
      <img src={emontiel} alt="" className="carousel-item" />
      <img src={frontline} alt="" className="carousel-item" />
      <img src={mpower} alt="" className="carousel-item" />
      <img src={fewis} alt="" className="carousel-item" />
      <img src={osiri} alt="" className="carousel-item" />
      <img src={lawOffice} alt="" className="carousel-item" />
      <img src={agolbach} alt="" className="carousel-item" />
    </div>
  );
};

export default CompaniesSlide;

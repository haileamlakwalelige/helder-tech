import emontiel from "../../assets/emontiel.png";
import frontline from "../../assets/frontline.png";
import mpower from "../../assets/mpower.png";
import fewis from "../../assets/fewis.png";
import osiri from "../../assets/osiri.png";
import lawOffice from "../../assets/lawOffice.png";
import agolbach from "../../assets/agolbach.png";
import Marquee from "react-fast-marquee";
import decorationIcon from "../../assets/decorationIcon.png";
import homeServiceIcon from "../../assets/homeServiceIcon1.png";

const CompaniesSlide = () => {
  return (
    <div className="w-full bg-secondary  relative">
    <img src={decorationIcon} alt="" className="w-[128px] absolute top-0 left-0" />
    <img src={homeServiceIcon} alt="" className="w-[168px] absolute bottom-0 right-0" />
      <Marquee>
        <div className="h-[311px] p-[30px] carousel carousel-center items-center gap-[70px]">
          <img src={emontiel} alt="" className="h-[150px] z-20 carousel-item" />
          <img src={frontline} alt="" className="h-[150px] z-20 carousel-item" />
          <img src={mpower} alt="" className="h-[150px] z-20 carousel-item" />
          <img src={fewis} alt="" className="h-[150px] z-20 carousel-item" />
          <img src={osiri} alt="" className="h-[150px] z-20 carousel-item" />
          <img src={lawOffice} alt="" className="h-[150px] z-20 carousel-item" />
          <img src={agolbach} alt="" className="h-[150px] z-20 carousel-item" />
        </div>
      </Marquee>
    </div>
  );
};

export default CompaniesSlide;

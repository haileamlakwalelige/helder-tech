import ServiceHero from "../components/service/ServiceHero";
import ServiceSection1 from "../components/service/ServiceSection1";
import ServiceSection2 from "../components/service/ServiceSection2";
import GetNewProject from "../components/service/GetNewProject";

const Service = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceSection1 />
      <ServiceSection2 />
      <div className="w-screen flex items-center justify-center">
        <GetNewProject />
      </div>
    </div>
  );
};

export default Service;

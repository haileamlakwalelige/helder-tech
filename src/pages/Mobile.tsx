import MobileHero from "../components/service/mobile/MobileHero";
import MobileDetails from "../components/service/mobile/MobileDetails";
import Section2 from "../components/reusables/Section2";
import GetNewProject from "../components/reusables/GetNewProject";

const mobileServices = [
  {
    title: "Native App Development",
    description:
      "Creating mobile applications specifically tailored to iOS or Android platforms, providing optimal performance and user experience.",
  },
  {
    title: "Hybrid App Development",
    description:
      "Developing mobile applications that combine the elements of both native and web applications, offering cross-platform compatibility and cost-effectiveness.",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Building mobile applications that can run on multiple platforms using a single codebase, ensuring consistent user experience across different devices.",
  },
];

const keyFeaturesData = [
  {
    img: "./keyFeatures1.png",
    title: "User-Centric Design",
    description:
      "We prioritize user experience and design intuitive interfaces that engage and delight users.",
  },
  {
    img: "./keyFeatures2.png",
    title: "Cutting-Edge Technologies",
    description:
      "We leverage the latest tools and technologies to build scalable, secure, and feature-rich mobile applications.",
  },
  {
    img: "./keyFeatures3.png",
    title: "Continuous Communication",
    description:
      "We maintain open and transparent communication throughout the development process, keeping you informed and involved at every stage.",
  },
  {
    img: "./keyFeatures4.png",
    title: "Post-Launch Support",
    description:
      "We provide ongoing support and maintenance services to ensure that your mobile app continues to perform optimally and meets evolving business needs.",
  },
];

const Mobile = () => {
  return (
    <div className="w-screen min-h-screen">
      <MobileHero />
      <MobileDetails data={mobileServices} />
      <Section2 data={keyFeaturesData} />
      <GetNewProject />
    </div>
  );
};

export default Mobile;

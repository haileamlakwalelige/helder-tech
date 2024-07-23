import ServiceHero from "../components/service/software/SoftwareHero";
import SoftwareSection1 from "../components/service/software/SoftwareSection1";
import SoftwareSection2 from "../components/reusables/Section2";
import GetNewProject from "../components/reusables/GetNewProject";

const engagementModelData = [
  {
    img: "./scrum.png",
    title: "Scrum",
    description: [
      "Quick start",
      "Unclear requirements",
      "Custom flow",
      "Real-time updates",
    ],
  },
  {
    img: "./waterfall.png",
    title: "Waterfall",
    description: [
      "MVP & Startups",
      "Clear requirements",
      "Fixed deadlines",
      "Fixed budget",
    ],
  },
  {
    img: "./kanban.png",
    title: "Kanban",
    description: [
      "Complex projects",
      "Change requests",
      "Custom flow",
      "Greater client control",
    ],
  },
];

const frameworkData = [
  {
    img: "./logos_nodejs.png",
    title: "Node JS Development",
    description:
      "Node JS is a javascript-based server-side runtime environment, offering unmatched superiority with unified code for both frontend and backend.",
  },
  {
    img: "./react.png",
    title: "React JS Development",
    description:
      "React JS empowers business applications to handle highly volatile data while running a big app ecosystem, making it the preferred choice for large enterprises.",
  },
  {
    img: "./flutter.png",
    title: "Flutter Development",
    description:
      "React JS empoFlutter lets you create Apps for both iOS and Android, offering unmatched stability and cross-platform compatibility, making it the first choice for startups and small businesses.",
  },
  {
    img: "./angular.png",
    title: "Angular Development",
    description:
      "Angular JS enables you to write quick & responsive web applications, offering a reliable client-side MVW framework with a rich library and great support & updates ecosystem.",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center gap-0">
      <ServiceHero />
      <SoftwareSection1 data={engagementModelData} />
      <SoftwareSection2 data={frameworkData} />
      <div className="w-screen flex items-center justify-center">
        <GetNewProject />
      </div>
    </div>
  );
};

export default Service;

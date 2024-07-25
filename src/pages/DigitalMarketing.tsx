import DigitalMarketingHero from "../components/service/digitalMarketing/DigitalMarketingHero";
import ServiceCard from "../components/service/digitalMarketing/ServiceCard";
import Benefits from "../components/service/digitalMarketing/Benefits";
import GetNewProject from "../components/reusables/GetNewProject";

const serviceData = [
  {
    img: "cm.png",
    title: "Content Marketing & SEO",
    detail: [
      {
        title: "Content Marketing:",
        description:
          "Creating and distributing valuable, relevant content to attract and retain your target audience, driving profitable customer action.",
      },
      {
        title: "Search Engine Optimization (SEO): ",
        description:
          "Optimizing your website to improve its visibility and ranking on search engine results pages (SERPs), driving organic traffic and increasing conversions.",
      },
    ],
  },

  {
    img: "smm.png",
    title: "Social Media Marketing (SMM)",
    detail: [
      {
        title: "Social Media Marketing (SMM):",
        description:
          "Leveraging social media platforms to promote your brand, engage with your audience, and drive website traffic and conversions.",
      },
    ],
  },

  {
    img: "pa.png",
    title: "Paid Advertising",
    detail: [
      {
        title: "Pay-Per-Click (PPC) Advertising:",
        description:
          "Running targeted advertising campaigns on search engines and social media platforms to drive traffic, leads, and sales.",
      },
    ],
  },

  {
    img: "rm.png",
    title: "Relationship Marketing",
    detail: [
      {
        title: "Email Marketing:",
        description:
          "Sending personalized and targeted email campaigns to nurture leads, retain customers, and drive conversions.",
      },
      {
        title: "Mobile Marketing:",
        description:
          "Optimizing your digital marketing efforts for mobile devices to reach and engage mobile users effectively.",
      },
    ],
  },
];

const benefitData = [
  {
    img: "ptpt.png",
    title: "Precise Targeting and Performance Tracking",
    details: [
      {
        title: "Targeted Reach: ",
        description:
          "Reach your target audience with precision targeting and personalized messaging.",
      },
      {
        title: "Measurable Results:  ",
        description:
          "Track and analyze campaign performance in real-time to measure ROI and optimize strategies for better results.",
      },
    ],
  },

  {
    img: "cess.png",
    title: "Cost-Effective Solutions and Scalability",
    details: [
      {
        title: "Cost-Effectiveness: ",
        description:
          "Maximize your marketing budget with cost-effective digital marketing solutions that deliver tangible results.",
      },
      {
        title: "Scalability:  ",
        description:
          " Scale your digital marketing efforts up or down based on your business needs and objectives.",
      },
    ],
  },

  {
    img: "ebva.png",
    title: "Enhanced Brand Visibility and Authority",
    details: [
      {
        title: "Brand Awareness: ",
        description:
          " Increase brand visibility and awareness across digital channels, establishing your brand as an authority in your industry.",
      },
    ],
  },
];

const DigitalMarketing = () => {
  return (
    <div>
      <DigitalMarketingHero />

      <div className="w-full relative">
        <h2 className="my-[35px] text-titleFont text-[32px] text-center font-[700]">
          Our Service Include
        </h2>
        <div className="w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 place-items-center md:gap-x-[9.7%] gap-[40px]">
          {serviceData.map((item) => (
            <ServiceCard key={item.img} data={item} />
          ))}
        </div>

        <img
          src="serviceDecoration1.png"
          alt=""
          className="z-0 absolute lg:top-[-5%] top-0 left-0 md:visible invisible"
        />
        <img
          src="serviceDecoration2.png"
          alt=""
          className="z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <img
          src="serviceDecoration3.png"
          alt=""
          className="z-0 absolute bottom-[-5%] right-0 md:visible invisible"
        />
      </div>

      <Benefits data={benefitData} />
      <GetNewProject />
    </div>
  );
};

export default DigitalMarketing;

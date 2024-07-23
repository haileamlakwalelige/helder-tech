import DigitalMarketingHero from "../components/service/digitalMarketing/DigitalMarketingHero";
import ServiceCard from "../components/service/digitalMarketing/ServiceCard";

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

const DigitalMarketing = () => {
  return (
    <div>
      <DigitalMarketingHero />
      <h2 className="mt-[35px] text-titleFont text-[32px] text-center font-[700]">
        Our Service Include
      </h2>
      <div className="w-[80%] my-[35px] mx-auto grid lg:grid-cols-2 grid-cols-1 place-items-center md:gap-[9.7%] gap-[40px]">
        {serviceData.map(item => <ServiceCard data={item} />)}
      </div>
    </div>
  );
};

export default DigitalMarketing;

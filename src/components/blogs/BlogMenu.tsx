import { useState } from "react";

const BlogMenu = () => {
  const inactiveColor = "bg-titleFont text-white";
  const activeColor = "bg-white text-titleFont";

  const [insightsStyle, setInsightsStyle] = useState(activeColor);
  const [industryStyle, setIndustryStyle] = useState(inactiveColor);
  const [newsStyle, setNewsStyle] = useState(inactiveColor);

  const insightsHandler = () => {
    setInsightsStyle(activeColor);
    setIndustryStyle(inactiveColor);
    setNewsStyle(inactiveColor);
  };
  const industryHandler = () => {
    setIndustryStyle(activeColor);
    setInsightsStyle(inactiveColor);
    setNewsStyle(inactiveColor);
  };
  const newsHandler = () => {
    setNewsStyle(activeColor);
    setInsightsStyle(inactiveColor);
    setIndustryStyle(inactiveColor);
  };

  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <div className="relative left-[5%]">
        <button
          className={`w-[120px] h-[60px] transition-colors duration-300 ${insightsStyle}`}
          onClick={insightsHandler}
        >
          Insights
        </button>
        <button
          className={`w-[120px] h-[60px] transition-colors duration-300 ${industryStyle}`}
          onClick={industryHandler}
        >
          Industry
        </button>
        <button
          className={`w-[120px] h-[60px] transition-colors duration-300 ${newsStyle}`}
          onClick={newsHandler}
        >
          News
        </button>
      </div>
      <div className="w-full h-[3px] bg-titleFont"></div>
    </div>
  );
};

export default BlogMenu;

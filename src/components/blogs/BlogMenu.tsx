import { useState } from "react";

interface props {
  onGetBlogCategory: Function;
}

const BlogMenu: React.FC<props> = (props) => {
  const inactiveColor = "bg-titleFont text-white";
  const activeColor = "bg-white text-titleFont";

  const [insightsStyle, setInsightsStyle] = useState(activeColor);
  const [industryStyle, setIndustryStyle] = useState(inactiveColor);
  const [newsStyle, setNewsStyle] = useState(inactiveColor);

  const insightsHandler = () => {
    setInsightsStyle(activeColor);
    setIndustryStyle(inactiveColor);
    setNewsStyle(inactiveColor);
    props.onGetBlogCategory("insight");
  };
  const industryHandler = () => {
    setIndustryStyle(activeColor);
    setInsightsStyle(inactiveColor);
    setNewsStyle(inactiveColor);
    props.onGetBlogCategory("industry");
  };
  const newsHandler = () => {
    setNewsStyle(activeColor);
    setInsightsStyle(inactiveColor);
    setIndustryStyle(inactiveColor);
    props.onGetBlogCategory("news");
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

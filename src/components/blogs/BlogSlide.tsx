import BlogMenu from "./BlogMenu";
import BlogCard from "./BlogCard";
import BlogNav from "./BlogNav";
import { useState, useEffect } from "react";

const insight = {
  image: "./blogCardImg 1.png",
  description: "Getting the most out of your team.",
  author: "Alemu K.",
};

const industry = {
  image: "./blogCardImg 2.svg",
  description: "The New Feature in React.js",
  author: "Abiy S.",
};

const news = {
  image: "./blogCardImg 3.avif",
  description: "What's new in AI?",
  author: "Haileamlak W.",
};

const BlogSlide = () => {
  const [placeholderContent, setPlaceholderContent] = useState("insight");
  const [slideData, setSlideData] = useState({
    image: "./blogCardImg 1.png",
    description: "Getting the most out of your team.",
    author: "Alemu K.",
  });

  useEffect(() => {
    placeholderContent === "insight"
      ? setSlideData(insight)
      : placeholderContent === "industry"
      ? setSlideData(industry)
      : setSlideData(news);
  });

  const getBlogCategory = (category: string) => {
    setPlaceholderContent((prev: string) => (prev = category));
  };

  console.log(placeholderContent);

  return (
    <div className="w-screen pb-8 bg-[rgba(217,217,217,0.25)]">
      <BlogMenu onGetBlogCategory={getBlogCategory} />
      <div className="w-[90%] m-auto p-[20px]">
        <h2 className="md:text-[32px] text-[22px] text-titleFont max-sm:text-center font-bold">
          Get {placeholderContent} From The Experts
        </h2>

        <div className="w-full mt-[20px]">
          <form
            className="flex md:flex-row flex-col items-center justify-evenly md:gap-0 gap-4"
            action=""
          >
            <input
              type="text"
              className="h-[50px] md:w-[80%] w-[90%] p-2 bg-white text-[rgba(0,108,255,0.85)] placeholder-[rgba(0,108,255,0.85)] text-[18px] font-bold rounded-[10px]"
              placeholder={`search ${placeholderContent} blogs here...`}
            />
            <button className="w-[110px] h-[50px] bg-titleFont text-white rounded-[10px]">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="w-[90%] m-auto grid md:grid-cols-3 grid-cols-1 place-items-center">
        <BlogCard data={slideData} />
        <BlogCard data={slideData} />
        <BlogCard data={slideData} />
        <BlogCard data={slideData} />
        <BlogCard data={slideData} />
        <BlogCard data={slideData} />
      </div>

      <BlogNav />
    </div>
  );
};

export default BlogSlide;

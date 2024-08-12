import BlogMenu from "./BlogMenu";
import BlogCard from "./BlogCard";
import BlogNav from "./BlogNav";
import { useState } from "react";

const BlogSlide = () => {
  const [placeholderContent, setPlaceholderContent] = useState("insight"); 
  
  const getBlogCategory = (category: string) => {
    setPlaceholderContent((prev: string) => prev = category)
  }

  console.log(placeholderContent);

  return (
    <div className="w-screen pb-8 bg-[rgba(217,217,217,0.25)]">
      <BlogMenu onGetBlogCategory={getBlogCategory} />
      <div className="w-[90%] m-auto p-[20px]">
        <h2 className="text-[32px] text-titleFont font-bold">
          Get {placeholderContent} From The Experts
        </h2>

        <div className="w-full mt-[20px]">
          <form className="flex items-center justify-evenly" action="">
            <input
              type="text"
              className="h-[50px] w-[80%] p-2 bg-white text-[rgba(0,108,255,0.85)] placeholder-[rgba(0,108,255,0.85)] text-[18px] font-bold rounded-[10px]"
              placeholder={`search ${placeholderContent} blogs here...`}
            />
            <button className="w-[110px] h-[50px] bg-titleFont text-white rounded-[10px]">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="w-[90%] m-auto grid grid-cols-3 place-items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <BlogNav />
    </div>
  );
};

export default BlogSlide;

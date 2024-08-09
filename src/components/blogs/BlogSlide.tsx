import BlogMenu from "./BlogMenu";
import BlogCard from "./BlogCard";

const BlogSlide = () => {
  return (
    <div className="w-screen bg-[rgba(217,217,217,0.25)]">
      <BlogMenu />
      <div className="w-[90%] m-auto p-[20px]">
        <h2 className="text-[32px] text-titleFont font-bold">
          Get Insights From The Experts
        </h2>

        <div className="w-full mt-[20px]">
          <form className="flex items-center justify-evenly" action="">
            <input
              type="text"
              className="h-[50px] w-[80%] p-2 bg-white text-[rgba(0,108,255,0.85)] placeholder-[rgba(0,108,255,0.85)] text-[18px] font-bold rounded-[10px]"
              placeholder="search insight blogs here..."
            />
            <button className="w-[110px] h-[50px] bg-titleFont text-white rounded-[10px]">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogSlide;

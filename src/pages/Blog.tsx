import BlogHero from "../components/blogs/BlogHero";
import BlogIntro from "../components/blogs/BlogIntro";
import BlogSlide from "../components/blogs/BlogSlide";

const Blog = () => {
  return (
    <div className="w-screen min-h-screen">
      <BlogHero />
      <BlogIntro />
      <BlogSlide />
    </div>
  );
};

export default Blog;

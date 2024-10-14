import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
  IoCalendarNumberOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import BlogNav from "./BlogNav";
import BlogCard from "./BlogCard";
import BlogRelated from "./BlogRelated";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import SocialShare from "../reusables/SocialShare";
// import SocialShare from "../reusables/SocialShare";

// Get the blog ID from the URL
const insightBlogs = [
  {
    image: "/blogCardImg1.png",
    title: "Getting the most out of your team.",
    date: "7/6/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "1",
  },
  {
    image: "/blogCardImg2.svg",
    title: "The Impact of Leadership in Tech Teams.",
    date: "26/8/2027",
    author: "John Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "2",
  },
  {
    image: "/blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "3",
  },
  {
    image: "/blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "4",
  },
  {
    image: "/blogCardImg1.png",
    title:
      "Getting the most out of your team hdshbhsd jsjllanc jjadcjal knld jjlsdnkl anakln kandkl nadklnklad.",
    date: "7/6/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "5",
  },
  {
    image: "/blogCardImg2.svg",
    title: "The Impact of Leadership in Tech Teams.",
    date: "26/8/2027",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "6",
  },
  {
    image: "/blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "7",
  },
  {
    image: "/blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "8",
  },
];

const industryBlogs = [
  {
    image: "/blogCardImg1.png",
    title: "The New Feature in React.js",
    date: "10/2/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "9",
  },
  {
    image: "/blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "10",
  },
];

const newsBlogs = [
  {
    image: "/blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "11",
  },
  {
    image: "/blogCardImg1.png",
    title: "Latest Developments in Quantum Computing",
    date: "9/3/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "12",
  },
  {
    image: "/blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "13",
  },
];

const BlogDetail = () => {
  const { id, type } = useParams<{ id: string; type: string }>(); // Fetch type from URL
  const [currentBlog, setCurrentBlog] = useState<any | null>(null);

  console.log("id: ", id);
  console.log("type: ", type);

  // Function to get blogs based on type
  const getBlogsByType = () => {
    switch (type) {
      case "Insight":
        return insightBlogs;
      case "Industry":
        return industryBlogs;
      case "News":
        return newsBlogs;
      default:
        return [];
    }
  };

  // Effect to find the current blog based on id and type
  useEffect(() => {
    if (!id || !type) console.log("no id or type"); // Return early if id or type are empty

    const blogs = getBlogsByType(); // Get the relevant blogs for the current type
    const foundBlog = blogs.find((blog) => blog.id === id); // Find blog by id

    if (foundBlog) {
      setCurrentBlog(foundBlog);
    } else {
      setCurrentBlog(null); // If not found, set to null or show an error message
    }
  }, [id, type]);

  return (
    <div>
      {currentBlog ? (
        <div className="mt-[6.2rem]">
          <img
            src={currentBlog.image}
            className="w-full h-[18rem] object-cover rounded-none"
            alt={currentBlog.title}
          />
          <div className="text-black mt-[2rem] gap-2 lg:mx-[7rem] mx-[2rem] flex-wrap flex items-center">
            <p>Home</p>
            <FaChevronRight size={12} />
            <p>SocialMinds</p>
            <FaChevronRight size={12} />
            <p>{type}</p>
            <FaChevronRight size={12} />
            <p className="lg:font-semibold lg:text-[1rem] text-[2rem]">{currentBlog.title}</p>
          </div>
          <div className="text-black lg:flex items-center gap-2 lg:mx-[7rem] mx-[2rem] mt-10">
            <div className="flex lg:gap-0 gap-2">
            <IoPersonOutline size={20} />
            <p className="text-lg mr-[7rem]">{currentBlog.author}</p>
            </div>
            <div className="flex lg:mt-0 mt-2 lg:gap-0 gap-2">
            <IoCalendarNumberOutline size={25} />
            <p className="text-lg mr-[7rem]">{currentBlog.date}</p>
            </div>
            <div className="flex lg:mt-0 mt-2 lg:gap-0 gap-2">
            <IoTimeOutline size={27} />
            <p className="text-lg mr-[7rem]">{currentBlog.postedTime} min</p>
            </div>
          </div>
          <h1 className="text-black lg:block hidden text-[3rem] mx-[7rem] my-[3rem] ">
            {currentBlog.title}
          </h1>
          <p
            className="lg:mx-[7rem] mx-[2rem] lg:mt-0 mt-2 text-black"
            dangerouslySetInnerHTML={{ __html: currentBlog.description }}
          />
          <div className="lg:mx-8 mt-8">
            <BlogNav />
          </div>
          <div className="bg-slate-600 pt-4">
            <div className="lg:justify-end flex flex-wrap items-center lg:text-end text-center justify-center">
              <p className="text-white text-[1.5rem] font-semibold">
                Share on social
              </p>
              <RiArrowRightDoubleFill size={30} color="white" />
              <SocialShare />
            </div>
            <div className="bg-slate-300 ">
              <p className="text-[2rem] lg:mx-[7rem] mx-[2rem] text-black font-semibold pt-5">
                Like this? Read more
              </p>
              <div className="w-[90%] m-auto grid md:grid-cols-3 s-3 gap-0 grid-cols-1 place-items-center">
                {insightBlogs
                  .filter((blog) => blog.id !== id) 
                  .slice(0, 3) 
                  .map((blog, index) => (
                    <Link to={`/insight/${blog.id}/${type}`} key={index}>
                      <BlogRelated data={blog} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetail;

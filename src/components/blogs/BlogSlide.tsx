import BlogMenu from "./BlogMenu";
import BlogCard from "./BlogCard";
import BlogNav from "./BlogNav";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const insightBlogs = [
  {
    image: "./blogCardImg1.png",
    title:
      "Getting the most out of your team hdshbhsd jsjllanc jjadcjal knld jjlsdnkl anakln kandkl nadklnklad.",
    date: "7/6/2024",
  },
  {
    image: "./blogCardImg2.svg",
    title: "The Impact of Leadership in Tech Teams.",
    date: "26/8/2027",
  },
  {
    image: "./blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
  },
  {
    image: "./blogCardImg1.png",
    title:
      "Getting the most out of your team hdshbhsd jsjllanc jjadcjal knld jjlsdnkl anakln kandkl nadklnklad.",
    date: "7/6/2024",
  },
  {
    image: "./blogCardImg2.svg",
    title: "The Impact of Leadership in Tech Teams.",
    date: "26/8/2027",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
  },
  {
    image: "./blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
  },
];

const industryBlogs = [
  {
    image: "./blogCardImg1.png",
    title: "The New Feature in React.js",
    date: "10/2/2024",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
  },
];

const newsBlogs = [
  {
    image: "./blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
  },
  {
    image: "./blogCardImg1.png",
    title: "Latest Developments in Quantum Computing",
    date: "9/3/2024",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
  },
];

const BlogSlide = () => {
  const [placeholderContent, setPlaceholderContent] = useState("Insight");
  const [blogData, setBlogData] = useState(insightBlogs);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // Number of blog cards per page

  useEffect(() => {
    if (placeholderContent === "Insight") {
      setBlogData(insightBlogs);
    } else if (placeholderContent === "Industry") {
      setBlogData(industryBlogs);
    } else {
      setBlogData(newsBlogs);
    }
    setCurrentPage(1); // Reset to page 1 on category change
  }, [placeholderContent]);

  // Calculate total pages based on the number of blog cards and cards per page
  const totalPages = Math.ceil(blogData.length / cardsPerPage);

  // Get the cards for the current page
  const currentCards = blogData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePageChange = (direction: string) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className="w-screen pb-8 bg-[rgba(217,217,217,0.25)]">
        <BlogMenu onGetBlogCategory={setPlaceholderContent} />
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
                className="h-[50px] md:w-[80%] w-[90%] p-2 bg-white shadow-xl text-[rgba(0,108,255,0.85)] 
                placeholder-[rgba(180,180,180,0.85)] text-[18px] font-bold rounded-[10px]"
                placeholder={`search ${placeholderContent} blogs here...`}
              />
              <button className="w-[110px] h-[50px] bg-titleFont text-white rounded-[10px]">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Display the current page's blog cards */}
        <div className="w-[90%] m-auto grid md:grid-cols-4 gap-10 grid-cols-1 place-items-center">
          {currentCards.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="w-full mt-[50px] flex items-center justify-center">
          <div className="text-titleFont text-[30px] font-bold flex items-center justify-between gap-[70px]">
            <FaChevronLeft
              onClick={() => handlePageChange("prev")}
              className={`cursor-pointer ${
                currentPage === 1 ? "text-gray-400" : "text-black"
              }`}
            />
            <h2 className="text-[20px]">
              Page {currentPage} of {totalPages}
            </h2>
            <FaChevronRight
              onClick={() => handlePageChange("next")}
              className={`cursor-pointer ${
                currentPage === totalPages ? "text-gray-400" : "text-black"
              }`}
            />
          </div>
        </div>
      </div>
      <p className="text-black mx-[5rem] mt-[2rem] text-[5rem] font-semibold font-serif">{placeholderContent}</p>
      <BlogNav />
    </div>
  );
};

export default BlogSlide;

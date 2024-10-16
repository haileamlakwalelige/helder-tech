import BlogMenu from "./BlogMenu";
import BlogCard from "./BlogCard";
import BlogNav from "./BlogNav";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const insightBlogs = [
  {
    image: "./blogCardImg1.png",
    title:
      "Getting the most out of your team hdshbhsd jsjllanc jjadcjal knld jjlsdnkl anakln kandkl nadklnklad.",
    date: "7/6/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "1",
  },
  {
    image: "./blogCardImg2.svg",
    title: "The Impact of Leadership in Tech Teams.",
    date: "26/8/2027",
    author: "John Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "2",
  },
  {
    image: "./blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "3",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "4",
  },
  {
    image: "./blogCardImg1.png",
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
    image: "./blogCardImg2.svg",
    title: "The Impact of Leadership in Tech Teams.",
    date: "26/8/2027",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "6",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "7",
  },
  {
    image: "./blogCardImg2.svg",
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
    image: "./blogCardImg1.png",
    title: "The New Feature in React.js",
    date: "10/2/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "9",
  },
  {
    image: "./blogCardImg3.avif",
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
    image: "./blogCardImg2.svg",
    title: "What's new in AI?",
    date: "11/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "11",
  },
  {
    image: "./blogCardImg1.png",
    title: "Latest Developments in Quantum Computing",
    date: "9/3/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "12",
  },
  {
    image: "./blogCardImg3.avif",
    title: "How AI is Disrupting the Industry",
    date: "4/8/2024",
    author: "Michael",
    postedTime: "5",
    description:
      "Let’s talk about self-awareness for a second.If you don’t even know who you are as a brand, how can you expect anyone else to do the same?And if that sounds like therapy speak, then welcome to Brand Rehab. Come on in, take a seat. Let’s unpack that, shall we?A wise man (our strategist Kieran Hughes) once said: “Self-awareness isn’t a singular, absolute truth. It’s a delicate balancing act between two distinct, and sometimes even competing, viewpoints.'On one hand, you have your brand’s internal perception of itself – the shiny, idealised version that you present to the world.On the other hand, you have the external view – how your customers and the rest of the world perceive your brand.  ",
    id: "13",
  },
];

const BlogSlide = () => {
  const [placeholderContent, setPlaceholderContent] = useState("Insight");
  const [blogData, setBlogData] = useState(insightBlogs);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // Number of blog cards per page
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter blog data based on the search query (title, description, or author)
  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages based on the number of blog cards and cards per page
  const totalPages = Math.ceil(blogData.length / cardsPerPage);

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredBlogs.slice(indexOfFirstCard, indexOfLastCard);

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

          <div className="mt-[20px] h-[50px] mx-auto rounded-lg shadow-xl md:w-[80%] justify-between items-center flex w-[90%] bg-white shadow-xl ">
            <input
              type="text"
              className="h-[50px] md:w-[80%] w-[90%] outline-none mt-4 bg-white shadow-xl text-[rgba(0,108,255,0.85)] 
                placeholder-[rgba(180,180,180,0.85)] text-[18px] font-bold rounded-[10px]"
              placeholder={`search ${placeholderContent} blogs here...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: "8px", marginBottom: "20px" }}
            />
            <FiSearch size={30} color="blue" />
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="w-full mt-[50px] flex items-center justify-center">
            <h2 className="text-titleFont text-[20px] font-bold">
              No information found
            </h2>
          </div>
        ) : (
          <>
            {/* Display the current page's blog cards */}
            <div className="w-[90%] m-auto grid md:grid-cols-4 gap-10 grid-cols-1 place-items-center">
              {currentCards.map((blog, index) => (
                <Link to={`/insight/${blog.id}/${placeholderContent}`}>
                  <BlogCard key={index} data={blog} />
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="w-full mt-[50px] flex items-center justify-center">
              <div className="text-titleFont text-[30px] font-bold flex items-center justify-between gap-[70px]">
                {/* Previous Button */}
                <FaChevronLeft
                  onClick={() => handlePageChange("prev")}
                  className={`cursor-pointer ${
                    currentPage === 1 ? "text-gray-400" : "text-black"
                  }`}
                />

                {/* Page Indicator */}
                <h2 className="text-[20px]">
                  Page {currentPage} of {totalPages}
                </h2>

                {/* Next Button */}
                <FaChevronRight
                  onClick={() => handlePageChange("next")}
                  className={`cursor-pointer ${
                    currentPage === totalPages ? "text-gray-400" : "text-black"
                  }`}
                />
              </div>
            </div>
          </>
        )}

        <p className="text-black lg:mx-[5rem] mx-[2rem] mt-[2rem] text-[5rem] font-semibold font-serif">
          {placeholderContent}
        </p>
        <BlogNav />
      </div>
    </div>
  );
};

export default BlogSlide;

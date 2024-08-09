import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const BlogNav = () => {
  return (
    <div className="w-full mt-[50px] flex items-center justify-center">
      <div className="text-titleFont text-[30px] font-bold flex items-center justify-between gap-[70px]">
        <FaChevronLeft />
        <h2 className="text-[20px]">Page 1 Of 7</h2>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default BlogNav;

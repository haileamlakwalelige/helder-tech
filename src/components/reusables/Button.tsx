import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <button className="p-[10px] bg-titleFont text-center text-white flex items-center justify-center gap-[10px] rounded-[36px]">
      <h2>Read more</h2> <FaArrowRight />
    </button>
  );
};

export default Button;

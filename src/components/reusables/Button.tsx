import { FaArrowRight } from "react-icons/fa";

interface props {
   buttonTitle: string;
}

const Button: React.FC<props> = (props) => {
  return (
    <button className="p-[10px] bg-titleFont text-center text-white flex items-center justify-center gap-[10px] rounded-[36px]">
      <h2>{props.buttonTitle}</h2> <FaArrowRight />
    </button>
  );
};

export default Button;

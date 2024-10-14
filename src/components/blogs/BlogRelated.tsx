// import blogCardImg from "../../assets/blogCardImg 1.png";

import { Link, useNavigate } from "react-router-dom";

interface props {
  data: {
    image: string;
    title: string;
    date: string;
    id: string;
    author: string;
    postedTime: string;
    description: string;
  };
}

const BlogRelated: React.FC<props> = (props) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     // Pass the full blog data including extra details
//     navigate(`/blog-detail/${props.data.id}`, { state: props.data });
//   };

  return (
    
      <div
        className="my-[20px] justify-between shadow-xl bg-[white]  w-[17rem] h-[19rem] flex flex-col  hover:shadow-3xl hover:shadow-[#3a3521]/40 rounded-2xl gap-[20px] "
        // onClick={handleCardClick}
      >
        <img
          src={props.data.image}
          alt=""
          className="w-[270px] h-[172px] rounded-[20px] object-cover"
        />
        <h2 className="text-titleFont px-2 text-[18px] w-[14rem] lg:text-justify text-start font-bold line-clamp-2">
          {props.data.title}
        </h2>
        <h2 className="text-black px-2 text-start justify-start text-[16px] font-bold">
          {props.data.date}
        </h2>
      </div>
   
  );
};

export default BlogRelated;

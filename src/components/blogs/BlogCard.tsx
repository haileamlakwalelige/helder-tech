// import blogCardImg from "../../assets/blogCardImg 1.png";

interface props {
  data: {
    image: string;
    title: string;
    date: string;
  };
}

const BlogCard: React.FC<props> = (props) => {
  return (
    <div className="my-[20px] justify-between shadow-xl  w-[17rem] h-[19rem] flex flex-col  hover:shadow-3xl hover:shadow-[#cfb559]/60 rounded-2xl gap-[20px]">
      <img
        src={props.data.image}
        alt=""
        className="w-[270px] h-[172px] rounded-[20px] object-cover"
      />
      <h2 className="text-titleFont px-2 text-[18px] w-[14rem] lg:text-justify text-center font-bold line-clamp-2">
        {props.data.title}
      </h2>
      <h2 className="text-black px-2 text-start justify-start text-[16px] font-bold">
        {props.data.date}
      </h2>
    </div>
  );
};

export default BlogCard;

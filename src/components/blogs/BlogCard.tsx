// import blogCardImg from "../../assets/blogCardImg 1.png";

interface props {
    data: {
        image: string;
        description: string;
        author: string;
    }
}

const BlogCard: React.FC<props> = (props) => {
    return (
        <div className="m-[20px] flex flex-col items-center justify-center gap-[20px]">
            <img src={props.data.image} alt="" className="w-[314px] h-[196px] rounded-[20px] object-cover" />
            <h2 className="text-titleFont text-[20px] lg:text-justify text-center font-bold">{props.data.description}</h2>
            <h2 className="text-titleFont text-[16px] font-bold">By {props.data.author}</h2>
        </div>
    );
}

export default BlogCard;
import blogCardImg from "../../assets/blogCardImg 1.png";

const BlogCard = () => {
    return (
        <div className="m-[20px] flex flex-col items-center justify-center gap-[20px]">
            <img src={blogCardImg} alt="" />
            <h2 className="text-titleFont text-[20px] font-bold">Getting The Most Out Of Your Team.</h2>
            <h2 className="text-titleFont text-[16px] font-bold">By Alemu K.</h2>
        </div>
    );
}

export default BlogCard;
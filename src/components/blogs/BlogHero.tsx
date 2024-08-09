import blogImg from "../../assets/blogImg.png";

const BlogHero = () => {
    return (
        <div>
           <img src={blogImg} className="w-screen h-[376px]" alt="" /> 
           <div className="w-screen h-[376px] bg-[rgba(0,0,0,0.5)] absolute top-0"></div>
        </div>
    );
}

export default BlogHero;
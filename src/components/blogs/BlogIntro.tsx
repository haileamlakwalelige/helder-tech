import gif from "../../assets/TeamInnovation-ezgif.com-optimize.gif";
import Button from "../reusables/Button";

const BlogIntro = () => {
  return (
    <div className="mb-4">
      <div className="w-[90%] m-auto flex lg:flex-row flex-col-reverse items-center justify-evenly">
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="text-titleFont text-bold lg:text-[48px] text-[20px] text-center">
            Expand Your Knowledge
          </p>
          <p className="w-[90%] lg:m-0 lg:mb-5 text-normalFont text-[17px] text-justify  tracking-[2%]">
          Welcome to our blog! As a top web design and development agency, we're excited to share tips, trends, and insights with you. Our team is passionate about crafting engaging, user-friendly websites that help your business thrive online. Whether you're a startup or an established company, you'll find practical advice, case studies, and inspiration here. Join us as we explore ways to elevate your online presence. Let's dive in!
          </p>
          <Button buttonTitle="Join Our Community" />
        </div>
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default BlogIntro;

import gif from "../../assets/TeamInnovation-ezgif.com-optimize.gif";

const BlogIntro = () => {
  return (
    <div className="w-[90%] m-auto flex items-center justify-evenly">
      <div className="flex flex-col items-start justify-center gap-[50px]">
        <h2 className="text-titleFont text-bold text-[48px]">
          Expand Your Knowledge. Explore
        </h2>
        <p className="w-[90%] text-normalFont text-[20px] text-justify leading-[25px] tracking-[2%]">
          Welcome to our blog! We're one of the leading web design and
          development agencies and are super excited to be able to share our
          knowledge, tips, and the latest trends in the sphere of web design
          with you. Our experienced designers and skilled developers are
          enthusiastic about creating engaging and user-friendly websites that
          give your business the best chance for success online. Whether you're
          a small startup or an enterprise looking to rev up, we know
          that—today—getting your digital mark can come with its own set of
          challenges. This will be a blog that contains practical advice, case
          studies, and inspiration on how to take your website to the next step.
          Share with us your journey through an evolving world of web design as
          we uncover how to make your online presence shine. Let's dive in!
        </p>
      </div>
      <img src={gif} alt="" />
    </div>
  );
};

export default BlogIntro;

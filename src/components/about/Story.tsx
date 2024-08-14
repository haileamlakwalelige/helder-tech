import storyImg from "../../assets/aboutUs.jpg";

const Story = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto flex items-center justify-center gap-[30px]">
        <img src={storyImg} alt="" />
        <div className="flex flex-col items-start justify-center gap-[30px]">
          <h2 className="text-titleFont text-[24px] font-semibold">
            The Story of Helder Technologies
          </h2>
          <p className="text-normalFont text-[18px] text-justify">
            Founded by Ashenafi Belete, a highly motivated youth driven to
            innovate through technology, Helder Technologies embarked on a
            mission to revolutionize businesses. With a heart full of passion
            and a commitment to helping others, Ashenafi envisioned a team
            dedicated to creating new solutions and serving customers in various
            tech-related fields. From website and mobile app development to
            digital marketing, graphics, AI, and more, Helder Technologies
            strives to set new standards of excellence while continuously
            adapting to technological advancements. Today, under Ashenafi's
            leadership, Helder stands as a beacon of innovation, dedicated to
            fulfilling client needs and fostering lasting partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
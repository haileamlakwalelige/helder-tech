import scrumImg from "../../assets/scrum.png";

const Card1 = () => {
  return (
    <div className="p-[60px] bg-[#f9f9f9] rounded-[18px] flex flex-col items-center justify-center gap-[40px]">
      <div className="w-[100%] flex items-center justify-evenly relative right-[20%]">
        <img src={scrumImg} alt="" />
        <h2 className="text-primary text-[24px] text-center font-[600]">Scrum</h2>
      </div>

      <ul className="text-[#6f6f6f] text-[20px] leading-[25px] tracking-[2%] list-disc">
        <li>Quick start</li>
        <li>Unclear Requirements</li>
        <li>Custom Flow</li>
        <li>Real-time updates</li>
      </ul>
    </div>
  );
};

export default Card1;

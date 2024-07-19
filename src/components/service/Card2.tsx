const Card2 = () => {
  return (
    <div className="p-[20px] bg-white flex items-center justify-evenly rounded-[18px]">
      <img src="./logos_nodejs.png" alt="" />

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[24px] text-[#006cff] font-[600px]">Node JS Development</h2>
        <p className="w-[75%] text-[12px] text-[#6f6f6f] font-[400] ">
          Node JS is a javascript-based server-side runtime environment,
          offering unmatched superiority with unified code for both frontend and
          backend.
        </p>
      </div>
    </div>
  );
};

export default Card2;

const BlogNav = () => {
  return (
    <div className="mx-[5rem] mb-[2rem]">
      <p className="text-[#383838] text-[3rem] ">
        Get updates delivered straight to your inbox
      </p>
      <form className="mt-[3rem]">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="First name*"
            className="bg-white border-b pb-3 w-[37rem] outline-none border-black placeholder-[#383838] placeholder:font-semibold "
          />
          <input
            type="text"
            placeholder="Surname*"
            className="bg-white border-b pb-3 w-[37rem] outline-none border-black placeholder-[#383838] placeholder:font-semibold "
          />
        </div>
        <input
          type="text"
          placeholder="Your email*"
          className="bg-white border-b pb-3 w-full mt-[2rem] outline-none border-black placeholder-[#383838] placeholder:font-semibold "
        />
        <div className="flex gap-5 mt-[2rem]">
          <input
            type="text"
            placeholder="Job title*"
            className="bg-white border-b pb-3 w-[37rem] outline-none border-black placeholder-[#383838] placeholder:font-semibold "
          />
          <input
            type="text"
            placeholder="Company*"
            className="bg-white border-b pb-3 w-[37rem] outline-none border-black placeholder-[#383838] placeholder:font-semibold "
          />
        </div>
        <p className="text-[#383838]">Where did you hear about us?</p>
        <select className="bg-white outline-none border-b pb-3 border-black w-full mt-[1rem] text-[#383838] font-semibold">
          <option className="bg-white" disabled selected>Please Select</option>
          <option className="bg-white font-semibold" >Google</option>
          <option className="bg-white font-semibold" >LinkedIn</option>
          <option className="bg-white font-semibold" >Email</option>
          <option className="bg-white font-semibold" >SocialMinds</option>
          <option className="bg-white font-semibold" >Referral</option>
          <option className="bg-white font-semibold" >Press</option>
          <option className="bg-white font-semibold" >Other</option>
        </select>
        <input type="submit" className="text-white hover:bg-[#cfb559] hover:text-black hover:font-semibold bg-titleFont p-[0.7rem] rounded-lg mt-[2rem]" value="Join the community" />
      </form>
    </div>
  );
};

export default BlogNav;

// import React from 'react'

export default function ProjectForm() {
  return (
    <div className="flex items-center gap-10 bg-[#F3F3F3]">
      <div>
        <img src="/Call.png" className="w-[43rem]" />
      </div>
      <div>
        <form>
          <div className="bg-white w-full rounded-full">
            <input
              type="text"
              placeholder="Full name"
              className="bg-white py-4 px-10 rounded-full placeholder:text-[13px] w-[37rem] placeholder:text-[#797979]"
            />
          </div>
          <br />
          <div className="bg-white w-full rounded-full">
            <input
              type="text"
              placeholder="Email..."
              className="bg-white py-4 px-10 rounded-full placeholder:text-[13px] w-[37rem] placeholder:text-[#797979]"
            />
          </div>
          <br />
          <div className="bg-white w-full rounded-full">
            <input
              type="text"
              placeholder="Services"
              className="bg-white py-4 px-10 rounded-full placeholder:text-[13px] w-[37rem] placeholder:text-[#797979]"
            />
          </div>
          <br />
          <div className="bg-white w-full rounded-full">
            <input
              type="text"
              placeholder="Message"
              className="bg-white py-10 px-10 rounded-lg placeholder:text-[13px] w-[37rem] placeholder:text-[#797979]"
            />
          </div>
          <div className="flex mt-6 justify-center">
            <input type="submit" value="Submit" className="bg-[#004ba5] text-white w-[15rem] py-2 rounded-full"/>
          </div>
        </form>
      </div>
    </div>
  );
}

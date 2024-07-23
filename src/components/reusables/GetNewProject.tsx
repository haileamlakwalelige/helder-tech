import { FaArrowRightLong } from "react-icons/fa6";

const GetNewProject = () => {
    return (
        <div className="m-[30px] flex flex-col items-center justify-center gap-[25px]">
            <h2 className="md:text-[40px] text-[25px] text-titleFont text-center font-[600]">Get New Project?</h2>
            <h2 className="text-normalFont lg:text-[24px] text-[16px] text-center font-[400]">Call Us For Fast Support To This Number</h2>
            <h2 className="lg:text-[48px] text-[28px] text-normalFont text-center font-[400]">+251 901 29 99 02</h2>
            <button className="p-[10px] bg-titleFont text-white text-[18px] flex items-center justify-center gap-[10px] rounded-[36px]">send message <FaArrowRightLong /></button>
        </div>
    );
}

export default GetNewProject;
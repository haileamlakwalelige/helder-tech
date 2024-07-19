import Card2 from "./Card2";

const ServiceSection2 = () => {
  return (
    <div className="w-screen min-h-[525px] bg-secondary mt-[35px] py-[30px] px-[150px]">
        <h2 className="mb-[45px] text-[#006CFF] text-[32px] text-center font-[700]">Web Frameworks We Use</h2>
      <div className="grid grid-cols-2 place-items-center gap-x-[10%] gap-y-[20%]">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
};

export default ServiceSection2;

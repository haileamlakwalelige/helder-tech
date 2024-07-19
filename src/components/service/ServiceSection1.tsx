import Card1 from "./Card1";

const ServiceSection1 = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="mb-[35px] text-[32px] text-primary text-center font-[700]">Engagement Models</h2>
            
            <div className="w-[100%] flex items-center justify-evenly">
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}

export default ServiceSection1;
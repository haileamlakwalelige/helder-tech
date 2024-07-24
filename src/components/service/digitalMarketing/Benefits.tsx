import BenefitItem from "./BenefitItem";

interface detailItem {
    title: string;
    description: string;
}

interface benefitData {
    img: string;
    title: string;
    details: detailItem[];
}

interface props {
    data: benefitData[];
}

const Benefits: React.FC<props> = (props) => {
    return (
        <div className="w-screen min-h-[477px] my-[50px] p-[30px] bg-secondary flex flex-col items-center justify-center">
            <h2 className="mb-[20px] text-titleFont text-[32px] text-center font-[700] relative bottom-[20px]">Key Benefits</h2>
            
            <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-[30px]">
                {props.data.map(item => <BenefitItem img={item.img} title={item.title} detail={item.details} />)}
            </div>
        </div>
    );
}

export default Benefits;
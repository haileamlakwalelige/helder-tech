import React from "react";

interface props {
    title: string;
}

const MainTitle: React.FC<props> = (props) => {
  return (
    <h2 className="mb-[40px] text-specialTitleFont text-[32px] font-bold">
      {props.title}
    </h2>
  );
};

export default MainTitle;

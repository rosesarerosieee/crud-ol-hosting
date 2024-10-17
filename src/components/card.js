import React from "react";

const CardContainer = ({ title, children, onSubmit }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[whitesmoke]">
      <div className="flex items-center justify-start flex-col w-[300px] h-[50vh] bg-[#e1d9d7] xl:w-[90%] xl:h-[75vh] xl:justify-center">
        <h2 className="text-black font-extrabold text-[2rem]">{title}</h2>
        <form
          onSubmit={onSubmit}
          className="flex items-center justify-center flex-col pt-[20px]"
        >
          {children}
        </form>
      </div>
    </div>
  );
};

export default CardContainer;

import React from "react";
import { useLocation } from "react-router";

const Info = () => {
  const { state } = useLocation();
  let { data } = state;
  
  console.log(data);
  return (
    <div className="lg:justify-between max-w-7xl mx-auto mt-4 px-4">
      <div className="lg:flex lg:items-center ">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {data.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Info;

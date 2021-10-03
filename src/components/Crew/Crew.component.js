import React from "react";

const Crew = (props) => {
  return (
    <>
    <div className="flex flex-col items-center">
      <div className="w-32 h-32">
        <img src={props.image} alt="crew member" className="w-full h-full rounded-full"
        />
        </div>
        <h1 className="text-base text-gray-800">{props.crewName}</h1>
        <h5 className="text-sm text-gray-600">as {props.work}</h5>
    </div>

    </>
  );
};

export default Crew;

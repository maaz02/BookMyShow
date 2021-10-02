import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
    <div
    className=""
    style =  { {...props.style ,  fontSize: "40px", display: 'block', right:"-2px", top: "160px",zIndex:"15", height:"40px", width:"40px", opacity:"0.55", color:"whitesmoke", backgroundColor:"black", position:"absolute", borderRadius: "4px", paddingRight:"5px"  } }
    onClick = {props.onClick}
    >
    <span><IoIosArrowForward className="text-white text-3xl cursor-pointer opacity-100" /></span>
    </div>
    </>
  )
};

export const PrevArrow = (props) => {
  return (
    <>
    <div
    className=""
    style =  { {...props.style ,  fontSize: "40px", display: 'block', left:"-3px", top: "160px",zIndex:"15", height:"40px", width:"40px", opacity:"0.55", color:"whitesmoke", backgroundColor:"black", position:"absolute", borderRadius: "4px", paddingLeft:"4px"} }
    onClick = {props.onClick}
    >
    <span><IoIosArrowBack className="text-white text-3xl cursor-pointer opacity-100" /></span>
    </div>
    </>
  )
};

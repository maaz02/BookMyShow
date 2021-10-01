import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

export const Premier = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0
  };

const PremierImages = [
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
    alt: "ZSJL",
    title: "Zack Snyder's Justice League",
    subtitle: "Action/Adventure",
  },
]

  return (<>
    <Slider {...settings}>
    {PremierImages.map((image)=> (
      <Poster {...image} />
    ))}
    </Slider>
    </>);
};

export default Premier;

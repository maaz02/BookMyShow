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
    <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiere</h3>
    <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
    {PremierImages.map((image)=> (
      <Poster {...image} isDark/>
    ))}
    </Slider>
    </>);
};

export default Premier;

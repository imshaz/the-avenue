import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import slide_one from "../../assets/images/slide_one.jpg";
import slide_two from "../../assets/images/slide_two.jpg";
import slide_three from "../../assets/images/slide_three.jpg";


export default function FeaCarousel() {

  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="image-slide">

    <Carousel style ={{height:`${window.innerHeight}px`}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img src={slide_one} alt="slide-one" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide_two} alt="slide-two" />
      </Carousel.Item>
      <Carousel.Item>
        <img  src={slide_three} alt="slide-three" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}



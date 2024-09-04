import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../Portfolio/portfolio.scss";

export const Carousel = ({ data, onSlideChange }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(slide);
    }
  }, [slide, onSlideChange]);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      <div className="border-slide">
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}
      </div>
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
    </div>
  );
};


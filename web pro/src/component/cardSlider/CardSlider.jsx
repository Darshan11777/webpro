import React, { useState, useEffect, useRef } from "react";
import CardBrandSection from "../CardBrandSection";
import './index.css'

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    <CardBrandSection key={1} />,
    <CardBrandSection key={2} />,
    <CardBrandSection key={3} />,
    <CardBrandSection key={4} />,
    <CardBrandSection key={5} />,
    <CardBrandSection key={6} />,
    <CardBrandSection key={7} />,
    // Add more CardBrandSection components as needed
  ];

  useEffect(() => {
    let intervalId;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - 2));
        }, 3000); 
      } else {
        clearInterval(intervalId);
      }
    });

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      clearInterval(intervalId);
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, [slides.length]); 

  return (
    <div className=" ">
      <div className="container float-right">
        <div
          className="card-slider card-container"
          ref={sliderRef} 
        >
          {slides.map((slide, index) => (
            <div
              className="brand_card"
              key={index}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

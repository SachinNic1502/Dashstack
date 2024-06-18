// CarouselComponent.js
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const slides = [
    {
      date: "September 12-22",
      message: "Enjoy free home delivery in this summer",
      imageUrl: "https://via.placeholder.com/800x400", // Replace with your image URL
    },
    {
      date: "October 5-15",
      message: "Get 20% off on all items",
      imageUrl: "https://via.placeholder.com/800x400", // Replace with another image URL
    },
    // Add more slides if needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center bg-black bg-opacity-50">
            <div className="text-left ml-20">
              <p className="text-white text-xl mb-2">{slide.date}</p>
              <h2 className="text-white text-3xl mb-4">{slide.message}</h2>
              <button className="bg-orange-500 text-white py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 ml-2 transform -translate-y-1/2 bg-[#F4F4F4] text-black p-2 w-10 h-10 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 mr-2 transform -translate-y-1/2 bg-[#F4F4F4] text-black p-2 w-10 h-10 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};
export default CarouselComponent;

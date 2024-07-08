import React, { useState } from "react";
import { FaHeart, FaStar, FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import { LiaHeart } from "react-icons/lia";

const CardComponent = ({ product, onEdit }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="border rounded-lg shadow-md p-4 w-full max-w-sm">
      <div className="relative h-64 overflow-hidden rounded-lg mx-2">
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaArrowRight />
            </button>
          </>
        )}
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h2 className="text-[18px] font-semibold">{product.name}</h2>
          <div className="mt-2 text-[16px] text-[#4880FF]">{product.price}</div>
        </div>
        {product.isFavorite ? (
          <FaHeart className="text-[#F93C65] cursor-pointer text-3xl" />
        ) : (
          <LiaHeart className="text-gray-400 cursor-pointer text-3xl" />
        )}
      </div>
      <div className="mt-2 flex items-center">
        {[...Array(5)].map((star, index) => (
          <FaStar
            key={index}
            className={
              index < product.rating ? "text-[#FF9500]" : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-[14px]">({product.totalRatings})</span>
      </div>
      <button
        className="mt-4 bg-[#E2EAF8] text-black py-2 px-4 rounded flex items-center"
        onClick={() => onEdit(product)}
      >
        <FaEdit className="mr-2" /> Edit Product
      </button>
    </div>
  );
};

export default CardComponent;

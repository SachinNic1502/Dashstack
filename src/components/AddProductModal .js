import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";

const AddProductModal = ({ onClose, onSave, product }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    subCategory: "",
    price: "",
    discountedPrice: "",
    rating: "",
    reviews: [],
    specifications: [],
    images: [],
    videos: [],
    features: [],
    warranty: "",
    returnPolicy: "",
    availability: "",
  });

  useEffect(() => {
    if (product) {
        console.log(product);
      setProductData(product);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(productData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{product ? "Edit Product" : "Add Product"}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <AddProductForm
          product={productData}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mr-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          >
            {product ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;

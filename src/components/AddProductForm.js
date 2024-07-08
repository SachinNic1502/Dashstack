import React, { useState, useEffect } from "react";

const AddProductForm = ({ product, onSubmit }) => {
  const [newProduct, setNewProduct] = useState({
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
      setNewProduct(product);
    }
  }, [product]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newProduct);
    setNewProduct({
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSpecificationChange = (index, event) => {
    const updatedSpecifications = newProduct.specifications.map(
      (spec, specIndex) =>
        specIndex === index ? { ...spec, [event.target.name]: event.target.value } : spec
    );
    setNewProduct({ ...newProduct, specifications: updatedSpecifications });
  };

  const addSpecification = () => {
    setNewProduct({
      ...newProduct,
      specifications: [...newProduct.specifications, { key: "", value: "" }],
    });
  };

  const removeSpecification = (index) => {
    const updatedSpecifications = newProduct.specifications.filter(
      (_, specIndex) => specIndex !== index
    );
    setNewProduct({ ...newProduct, specifications: updatedSpecifications });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-h-[80vh] overflow-y-auto p-4 bg-white rounded-lg shadow-md"
    >
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Name:
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
            Description:
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
            Brand:
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="brand"
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
            Category:
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="subCategory" className="block text-sm font-medium leading-6 text-gray-900">
            Sub Category:
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              value={newProduct.subCategory}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
            Price:
          </label>
          <div className="mt-2">
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="discountedPrice" className="block text-sm font-medium leading-6 text-gray-900">
            Discounted Price:
          </label>
          <div className="mt-2">
            <input
              type="number"
              id="discountedPrice"
              name="discountedPrice"
              value={newProduct.discountedPrice}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
            Rating:
          </label>
          <div className="mt-2">
            <input
              type="number"
              id="rating"
              name="rating"
              value={newProduct.rating}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <h3 className="text-lg font-semibold">Specifications:</h3>
        {newProduct.specifications.map((spec, index) => (
          <div key={index} className="flex items-end gap-4">
            <label className="block flex-grow">
              <span className="text-gray-700">Key:</span>
              <input
                type="text"
                name="key"
                value={spec.key}
                onChange={(event) => handleSpecificationChange(index, event)}
                className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </label>
            <label className="block flex-grow">
              <span className="text-gray-700">Value:</span>
              <input
                type="text"
                name="value"
                value={spec.value}
                onChange={(event) => handleSpecificationChange(index, event)}
                className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </label>
            <button
              type="button"
              onClick={() => removeSpecification(index)}
              className="self-end bg-red-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSpecification}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
        >
          Add Specification
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <label htmlFor="warranty" className="block text-sm font-medium leading-6 text-gray-900">
          Warranty:
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="warranty"
            name="warranty"
            value={newProduct.warranty}
            onChange={handleChange}
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <label htmlFor="returnPolicy" className="block text-sm font-medium leading-6 text-gray-900">
          Return Policy:
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="returnPolicy"
            name="returnPolicy"
            value={newProduct.returnPolicy}
            onChange={handleChange}
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <label htmlFor="availability" className="block text-sm font-medium leading-6 text-gray-900">
          Availability:
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="availability"
            name="availability"
            value={newProduct.availability}
            onChange={handleChange}
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          {product ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;

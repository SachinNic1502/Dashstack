import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProductStock() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "Product 1",
      category: "Category 1",
      price: "$10.00",
      piece: "10",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Product 2",
      category: "Category 2",
      price: "$20.00",
      piece: "5",
      colors: ["#00ff00", "#ff00ff"],
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      name: "Product 3",
      category: "Category 3",
      price: "$30.00",
      piece: "8",
      colors: ["#0000ff", "#ff0000"],
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedProduct(null);
  };
  const handleDeleteClick = (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      // setProducts(products.filter((product) => product.id !== productId));
      alert("Product deleted");
    }
  };
  return (
    <section className="flex-grow p-4 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[32px] text-[#202224] font-bold">Product Stock</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">Image</th>
              <th scope="col" className="px-4 py-2">Product Name</th>
              <th scope="col" className="px-4 py-2">Category</th>
              <th scope="col" className="px-4 py-2">Price</th>
              <th scope="col" className="px-4 py-2">Piece</th>
              <th scope="col" className="px-4 py-2">Colors</th>
              <th scope="col" className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.piece}</td>
                <td className="px-4 py-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      style={{ backgroundColor: color }}
                      className="inline-block w-4 h-4 rounded-full mr-1"
                    ></span>
                  ))}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => handleEditClick(product)}
                  >
                    <FaEdit />
                  </button>
                  <button className="text-red-500"
                  onClick={() => handleDeleteClick(product.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showEditModal && selectedProduct && (
        <EditProductModal
          isOpen={showEditModal}
          onRequestClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </section>
  );
}

const EditProductModal = ({ isOpen, onRequestClose, product }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Product Modal"
      className="modal bg-white rounded-lg p-6 w-[500px]"
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="modal-content">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            defaultValue={product.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            defaultValue={product.category}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            defaultValue={product.price}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Piece
          </label>
          <input
            type="text"
            defaultValue={product.piece}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Colors
          </label>
          <div className="flex">
            {product.colors.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: color }}
                className="inline-block w-6 h-6 rounded-full mr-2 border border-gray-300"
              ></span>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onRequestClose}
          >
            Update
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            onClick={onRequestClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductStock;

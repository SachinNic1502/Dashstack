import React, { useState, useEffect } from "react";
import CardComponent from './CardComponent';
import productsData from '../product.json'; 
import AddProductModal from "./AddProductModal ";


function Favorite() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setProducts(productsData); 
  }, []);

  const openModal = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const saveProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
    closeModal();
  };

  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-[32px] text-[#202224] font-bold mb-4">Favorite</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mt-5">

        {products.map((product, index) => (
          <CardComponent key={index} product={product} onEdit={openModal} />
        ))}
      </div>
      {showModal && (
        <AddProductModal
          onClose={closeModal}
          onSave={saveProduct}
          product={editingProduct}
        />
      )}
    </section>
  );
}

export default Favorite;

// import React, { useState } from "react";
// import CardComponent from './CardComponent';
// import AddProductModal from "./AddProductModal ";

// function Favorite() {
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const openModal = (product) => {
//     setEditingProduct(product);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingProduct(null);
//   };

//   const [products, setProducts] = useState([
//     {
//       name: "Sample Product 1",
//       price: "$99.99",
//       rating: 4,
//       totalRatings: 120,
//       isFavorite: true,
//       images: [
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
//         "https://st3.depositphotos.com/8711490/31871/i/450/depositphotos_318710218-stock-photo-close-gray-wrist-watches-isolated.jpg",
//         "https://burst.shopifycdn.com/photos/stone-finish-analogue-watch.jpg?width=1000&format=pjpg&exif=0&iptc=0"
//       ]
//     },
//     {
//       name: "Sample Product 2",
//       price: "$79.99",
//       rating: 4.5,
//       totalRatings: 150,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+4",
//         "https://via.placeholder.com/400x300?text=Product+Image+5",
//         "https://via.placeholder.com/400x300?text=Product+Image+6"
//       ]
//     },
//     {
//       name: "Sample Product 3",
//       price: "$49.99",
//       rating: 4.2,
//       totalRatings: 100,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+7",
//         "https://via.placeholder.com/400x300?text=Product+Image+8",
//         "https://via.placeholder.com/400x300?text=Product+Image+9"
//       ]
//     },
//     {
//       name: "Sample Product 4",
//       price: "$129.99",
//       rating: 4.8,
//       totalRatings: 200,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+10",
//         "https://via.placeholder.com/400x300?text=Product+Image+11",
//         "https://via.placeholder.com/400x300?text=Product+Image+12"
//       ]
//     },
//     {
//       name: "Sample Product 5",
//       price: "$69.99",
//       rating: 4.1,
//       totalRatings: 130,
//       isFavorite: true,

//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+13",
//         "https://via.placeholder.com/400x300?text=Product+Image+14",
//         "https://via.placeholder.com/400x300?text=Product+Image+15"
//       ]
//     },
//     {
//       name: "Sample Product 6",
//       price: "$89.99",
//       rating: 4.6,
//       totalRatings: 160,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+16",
//         "https://via.placeholder.com/400x300?text=Product+Image+17",
//         "https://via.placeholder.com/400x300?text=Product+Image+18"
//       ]
//     },
//     {
//       name: "Sample Product 7",
//       price: "$39.99",
//       rating: 4.3,
//       totalRatings: 110,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+19",
//         "https://via.placeholder.com/400x300?text=Product+Image+20",
//         "https://via.placeholder.com/400x300?text=Product+Image+21"
//       ]
//     },
//     {
//       name: "Sample Product 8",
//       price: "$149.99",
//       rating: 4.9,
//       totalRatings: 220,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+22",
//         "https://via.placeholder.com/400x300?text=Product+Image+23",
//         "https://via.placeholder.com/400x300?text=Product+Image+24"
//       ]
//     },
//     {
//       name: "Sample Product 9",
//       price: "$59.99",
//       rating: 4.4,
//       totalRatings: 140,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+25",
//         "https://via.placeholder.com/400x300?text=Product+Image+26",
//         "https://via.placeholder.com/400x300?text=Product+Image+27"
//       ]
//     },
//     {
//       name: "Sample Product 10",
//       price: "$179.99",
//       rating: 4.7,
//       totalRatings: 250,
//       isFavorite: true,
//       images: [
//         "https://via.placeholder.com/400x300?text=Product+Image+28",
//         "https://via.placeholder.com/400x300?text=Product+Image+29",
//         "https://via.placeholder.com/400x300?text=Product+Image+30"
//       ]
//     }
//   ]);
//   const saveProduct = (updatedProduct) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.name === updatedProduct.name ? updatedProduct : product
//       )
//     );
//     closeModal();
//   };
  
//   return (
//     <section className="flex-grow p-4 overflow-auto">
//     <h3 className="text-[32px] text-[#202224] font-bold mb-4">Favorite </h3>
//     <div className="flex flex-wrap mx-4 mt-5">
//       {products.map((product, index) => (
//         <CardComponent key={index} product={product} onEdit={openModal} />
//       ))}
//     </div>  
//     {showModal && (
//         <AddProductModal
//           onClose={closeModal}
//           onSave={saveProduct}
//           product={editingProduct}
//         />
//       )}
//     </section>
//   );
// }

// export default Favorite;

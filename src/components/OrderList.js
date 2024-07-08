import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import orderData from "../orderList.json";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [filterType, setFilterType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    // Simulate fetching data from orderList.json
    setOrders(orderData);
  }, []);

  const handleEditStatus = (order) => {
    setSelectedOrder(order);
    setShowStatusModal(true);
    setNewStatus(order.status); // Set initial status in the modal
  };

  const handleCloseModal = () => {
    setShowStatusModal(false);
    setSelectedOrder(null);
    setNewStatus(""); // Clear new status on modal close
  };

  const updateOrderStatus = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status: newStatus } : order
      )
    );
    handleCloseModal();
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleResetFilter = () => {
    setFilterType("");
    setStartDate("");
    setEndDate("");
    setStatusFilter("");
  };

  const filteredOrders = orders.filter((order) => {
    if (filterType && order.orderType !== filterType) {
      return false;
    }
    if (startDate && order.date < startDate) {
      return false;
    }
    if (endDate && order.date > endDate) {
      return false;
    }
    if (statusFilter && order.status !== statusFilter) {
      return false;
    }
    return true;
  });

  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-[32px] text-[#202224] font-bold mb-4">
        Order Lists
      </h3>
      <div className="overflow-x-auto">
        {/* Filter section */}
        <div className="flex items-center justify-between mb-4 w-full h-20 border border-1">
          <div className="flex items-center justify-around w-full">
            <div className="w-1/4 h-full flex items-center justify-center">
              <span className="text-sm">Filter By Order Type:</span>{" "}
              <select
                value={filterType}
                onChange={handleFilterChange}
                className="ml-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion & Beauty">Fashion & Beauty</option>
                <option value="Home & Garden">Home & Garden</option>
                <option value="Books">Books</option>
                <option value="Sports">Sports</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Movies & Music">Movies & Music</option>
                <option value="Home Improvement">Home Improvement</option>
                <option value="Health & Wellness">Health & Wellness</option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
              </select>
            </div>
            <div className="w-1/4 h-full flex items-center justify-center">
              <span className="text-sm">Filter By Date:</span>{" "}
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="ml-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {" - "}
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                className="mx-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="w-1/4 h-full flex items-center justify-center">
              <span className="text-sm">Filter By Status:</span>{" "}
              <select
                value={statusFilter}
                onChange={handleStatusFilterChange}
                className="ml-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">All</option>
                <option value="Completed">Completed</option>
                <option value="Processing">Processing</option>
                <option value="In Transit">In Transit</option>
                <option value="On Hold">On Hold</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="w-1/4 h-full flex items-center justify-center text-red-600">
              <button
                onClick={handleResetFilter}
                className="mr-2 cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table section */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">
                ID
              </th>
              <th scope="col" className="px-4 py-2">
                Address
              </th>
              <th scope="col" className="px-4 py-2">
                Name
              </th>
              <th scope="col" className="px-4 py-2">
                Date
              </th>
              <th scope="col" className="px-4 py-2">
                Order Type
              </th>
              <th scope="col" className="px-4 py-2">
                Status
              </th>
              <th scope="col" className="px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.orderType}</td>
                <td className="px-4 py-2">
                  {order.status === "Completed" && (
                    <span className="bg-green-100 font-semibold text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      {order.status}
                    </span>
                  )}
                  {order.status === "Processing" && (
                    <span className="bg-purple-100 font-semibold text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                      {order.status}
                    </span>
                  )}
                  {order.status === "In Transit" && (
                    <span className="bg-orange-100 font-semibold text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
                      {order.status}
                    </span>
                  )}
                  {order.status === "On Hold" && (
                    <span className="bg-yellow-100 font-semibold text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                      {order.status}
                    </span>
                  )}
                  {order.status === "Rejected" && (
                    <span className="bg-red-100 font-semibold text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                      {order.status}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEditStatus(order)}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for editing status */}
      <Modal
        isOpen={showStatusModal}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Status Modal"
      >
         <div className="p-4 bg-white rounded-md shadow-md">
    <h3 className="text-lg font-semibold mb-4">Edit Order Status</h3>
    {selectedOrder && (
      <div>
        <div className="flex items-center mb-4">
          <span className="text-sm w-1/4">Order Status:</span>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="w-3/4 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="In Transit">In Transit</option>
            <option value="On Hold">On Hold</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="mb-4">
          <span className="text-sm">Product Name:</span>{" "}
          <span className="font-semibold">{selectedOrder.name}</span>
        </div>
        <div className="mb-4">
          <span className="text-sm">Address:</span>{" "}
          <span className="font-semibold">{selectedOrder.address}</span>
        </div>
        <div className="mb-4">
          <span className="text-sm">Date:</span>{" "}
          <span className="font-semibold">{selectedOrder.date}</span>
        </div>
        <div className="mb-4">
          <span className="text-sm">Order Type:</span>{" "}
          <span className="font-semibold">{selectedOrder.orderType}</span>
        </div>
      </div>
    )}
    <div className="flex justify-end">
      <button
        onClick={updateOrderStatus}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none mr-2"
      >
        Update
      </button>
      <button
        onClick={handleCloseModal}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
      >
        Cancel
      </button>
    </div>
  </div>
      </Modal>
    </section>
  );
}

export default OrderList;










// import React, { useState } from "react";
// import { ImFilter } from "react-icons/im";
// import { GrPowerReset } from "react-icons/gr";
// import { FaAngleDown } from "react-icons/fa6";
// import Modal from 'react-modal';

// function OrderList() {
//   const [showDateModal, setShowDateModal] = useState(false);
//   const [showOrderTypeModal, setShowOrderTypeModal] = useState(false);
//   const [showOrderStatusModal, setShowOrderStatusModal] = useState(false);


//   const handleDateClick = () => {
//     setShowDateModal(true);
//   };

//   const handleOrderTypeClick = () => {
//     setShowOrderTypeModal(true);
//   };

//   const handleOrderStatusClick = () => {
//     setShowOrderStatusModal(true);
//   };
//   const handleCloseModals = () => {
//     setShowDateModal(false);
//     setShowOrderTypeModal(false);
//     setShowOrderStatusModal(false);
//   };
//   const orders = [
//     {
//       id: 1,
//       name: "John Doe",
//       address: "123 Main St",
//       date: "2024-06-07",
//       orderType: "Electronics",
//       status: "Processing",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       address: "456 Elm St",
//       date: "2024-06-06",
//       orderType: "Fashion & Beauty",
//       status: "Completed",
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       address: "789 Oak St",
//       date: "2024-06-05",
//       orderType: "Home & Living",
//       status: "In Transit",
//     },
//     {
//       id: 4,
//       name: "Bob Brown",
//       address: "101 Pine St",
//       date: "2024-06-04",
//       orderType: "Mobile & Phone",
//       status: "On Hold",
//     },
//     {
//       id: 5,
//       name: "Emily Davis",
//       address: "222 Maple St",
//       date: "2024-06-03",
//       orderType: "Health & Medicine",
//       status: "Rejected",
//     },
//     {
//       id: 6,
//       name: "David Wilson",
//       address: "333 Cedar St",
//       date: "2024-06-02",
//       orderType: "Services & Industry",
//       status: "Completed",
//     },
//     {
//       id: 7,
//       name: "Sophia Miller",
//       address: "444 Birch St",
//       date: "2024-06-01",
//       orderType: "Accessories",
//       status: "Processing",
//     },
//     {
//       id: 8,
//       name: "Olivia Martinez",
//       address: "555 Oak St",
//       date: "2024-05-31",
//       orderType: "Book & Stationary",
//       status: "In Transit",
//     },
//     {
//       id: 9,
//       name: "Liam Anderson",
//       address: "666 Elm St",
//       date: "2024-05-30",
//       orderType: "Fashion & Beauty",
//       status: "Completed",
//     },
//     {
//       id: 10,
//       name: "Ethan Taylor",
//       address: "777 Pine St",
//       date: "2024-05-29",
//       orderType: "Home & Living",
//       status: "Processing",
//     },
//   ];
//   return (
//     <section className="flex-grow p-4 overflow-auto">
//       <h3 className="text-[32px] text-[#202224] font-bold mb-4">
//         Order Lists
//       </h3>
//       <div className="overflow-x-auto">
//         <div className="flex items-center justify-between mb-4 w-full h-20 border border-1">
//           <div className="flex items-center justify-around w-full">
//             <div className="w-1/5 h-full flex items-center justify-center">
//               <ImFilter className="text-2xl mr-1" />
//               <span className="text-sm">Filter By</span>
//             </div>
//             <div className="w-1/5 h-full flex items-center justify-center">
//               <span className="text-sm">Date</span>{" "}
//               <FaAngleDown
//                 onClick={handleDateClick}
//                 className="ml-1 cursor-pointer"
//               />
//             </div>
//             <div className="w-1/5 h-full flex items-center justify-center">
//               <span className="text-sm">Order Type</span>{" "}
//               <FaAngleDown
//                 onClick={handleOrderTypeClick}
//                 className="ml-1 cursor-pointer"
//               />
//             </div>
//             <div className="w-1/5 h-full flex items-center justify-center">
//               <span className="text-sm">Order Status</span>{" "}
//               <FaAngleDown
//                 onClick={handleOrderStatusClick}
//                 className="ml-1 cursor-pointer"
//               />
//             </div>
//             <div className="w-1/5 h-full flex items-center justify-center text-red-600">
//               <GrPowerReset className="mr-2 cursor-pointer" /> Reset Filter
//             </div>
//           </div>
//         </div>

//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-4 py-2">
//                 ID
//               </th>
//               <th scope="col" className="px-4 py-2">
//                 Address
//               </th>
//               <th scope="col" className="px-4 py-2">
//                 Name
//               </th>
//               <th scope="col" className="px-4 py-2">
//                 Date
//               </th>
//               <th scope="col" className="px-4 py-2">
//                 Order Type
//               </th>
//               <th scope="col" className="px-4 py-2">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr
//                 key={order.id}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//               >
//                 <td className="px-4 py-2">{order.id}</td>
//                 <td className="px-4 py-2">{order.name}</td>
//                 <td className="px-4 py-2">{order.address}</td>
//                 <td className="px-4 py-2">{order.date}</td>
//                 <td className="px-4 py-2">{order.orderType}</td>
//                 <td className="px-4 py-2 ">
//                   {order.status === "Completed" && (
//                     <span className="bg-green-100 font-semibold text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
//                       {order.status}
//                     </span>
//                   )}
//                   {order.status === "Processing" && (
//                     <span className="bg-purple-100 font-semibold text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
//                       {order.status}
//                     </span>
//                   )}
//                   {order.status === "In Transit" && (
//                     <span className="bg-orange-100 font-semibold text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
//                       {order.status}
//                     </span>
//                   )}
//                   {order.status === "On Hold" && (
//                     <span className="bg-yellow-100 font-semibold text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
//                       {order.status}
//                     </span>
//                   )}
//                   {order.status === "Rejected" && (
//                     <span className="bg-red-100 font-semibold text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
//                       {order.status}
//                     </span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <Modal
//         isOpen={showDateModal}
//         onRequestClose={() => setShowDateModal(false)}
//         contentLabel="Date Modal"
//       >
//         <div>
//           <input type="date" />
//           <button onClick={handleCloseModals}>Close</button>
//         </div>
//       </Modal>

//       {/* Order Type Modal */}
//       <Modal
//         isOpen={showOrderTypeModal}
//         onRequestClose={() => setShowOrderTypeModal(false)}
//         contentLabel="Order Type Modal"
//         style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           },
//           content: {
//             width: '30%', // Adjust the width as needed
//             height: '30%', // Adjust the height as needed
//             margin: 'auto',
//             borderRadius: '8px',
//             border: 'none',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             overflow: 'auto',
//           }
//         }}
//       >
//         <div>
//           {/* Order Type Modal Content */}
//           <button onClick={handleCloseModals}>Close</button>
//         </div>
//       </Modal>

//       {/* Order Status Modal */}
//       <Modal
//         isOpen={showOrderStatusModal}
//         onRequestClose={() => setShowOrderStatusModal(false)}
//         contentLabel="Order Status Modal"
//       >
//         <div>
//           {/* Order Status Modal Content */}
//           <button onClick={handleCloseModals}>Close</button>
//         </div>
//       </Modal>
//       </div>
//     </section>
//   );
// }

// export default OrderList;

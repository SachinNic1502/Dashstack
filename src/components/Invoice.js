import React from "react";
import { FiSend } from "react-icons/fi";
import { AiFillPrinter } from "react-icons/ai";

const Invoice = () => {
  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-[32px] text-[#202224] font-bold mb-4">
        Invoice
      </h3>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p><strong>Invoice From:</strong></p>
            </div>
            <div>
              <p><strong>Invoice To:</strong></p>
            </div>
            <div>
              <p><strong>Invoice Date:</strong> 12 Nov 2019</p>
            </div>
          </div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p>Virginia Walker</p>
              <p>9694 Krajcik Locks Suite 635</p>
            </div>
            <div>
              <p>Austin Miller</p>
              <p>Brookview</p>
            </div>
            <div>
              <p>Due Date: 25 Dec 2019</p>
            </div>
          </div>
        </div>

        <table className="w-full text-left border-collapse mb-4">
          <thead>
            <tr>
              <th className="border-b-2 p-2">Serial No.</th>
              <th className="border-b-2 p-2">Description</th>
              <th className="border-b-2 p-2">Quantity</th>
              <th className="border-b-2 p-2">Base Cost</th>
              <th className="border-b-2 p-2">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">1</td>
              <td className="border-b p-2">Item A</td>
              <td className="border-b p-2">2</td>
              <td className="border-b p-2">$50.00</td>
              <td className="border-b p-2">$100.00</td>
            </tr>
            <tr>
              <td className="border-b p-2">2</td>
              <td className="border-b p-2">Item B</td>
              <td className="border-b p-2">1</td>
              <td className="border-b p-2">$150.00</td>
              <td className="border-b p-2">$150.00</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-bold">Total: $250.00</div>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
              <AiFillPrinter className="mr-2" /> Print
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700">
              <FiSend className="mr-2" /> Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;

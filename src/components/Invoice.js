import React from "react";
import { FiSend } from "react-icons/fi";
import { AiFillPrinter } from "react-icons/ai";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Invoice = () => {
  const handlePrint = () => {
    const input = document.getElementById("invoice-pdf");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 size
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    });
  };

  const handleSend = () => {
    // Implement sending functionality here (e.g., email the invoice)
    alert("Sending invoice...");
  };

  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-3xl text-gray-900 font-bold mb-4">
        Invoice
      </h3>
      <div
        id="invoice-pdf"
        className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mb-4"
      >
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p>
                <strong>Invoice From:</strong>
              </p>
              <p>Virginia Walker</p>
              <p>9694 Krajcik Locks Suite 635</p>
            </div>
            <div>
              <p>
                <strong>Invoice To:</strong>
              </p>
              <p>Austin Miller</p>
              <p>Brookview</p>
            </div>
            <div>
              <p>
                <strong>Invoice Date:</strong> 12 Nov 2019
              </p>
              <p>
                <strong>Due Date:</strong> 25 Dec 2019
              </p>
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
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          onClick={handlePrint}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          <AiFillPrinter className="mr-2" /> Print
        </button>
        <button
          onClick={handleSend}
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          <FiSend className="mr-2" /> Send
        </button>
      </div>
    </section>
  );
};

export default Invoice;

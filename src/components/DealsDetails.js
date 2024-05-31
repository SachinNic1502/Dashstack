import React, { useState } from 'react';

const DealsDetails = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const dealsData = [
    { productName: 'Product A', productLocation: 'Location 1', dateTime: '2024-01-15 14:30', amount: '$100', status: 'Delivered', imgUrl: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png' },
    { productName: 'Product B', productLocation: 'Location 2', dateTime: '2024-02-20 10:00', amount: '$150', status: 'Ship', imgUrl: 'https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png' },
    { productName: 'Product C', productLocation: 'Location 3', dateTime: '2024-03-05 16:45', amount: '$200', status: 'Place Order', imgUrl: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png' },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-900 text-white font-bold';
      case 'Ship':
        return 'bg-orange-900 text-white font-bold';
      case 'Place Order':
        return 'bg-purple-900 text-white font-bold';
      default:
        return '';
    }
  };

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Deals Details</h3>
        <div>
          <label htmlFor="month" className="mr-2 font-semibold text-gray-600">Month:</label>
          <select
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
        <thead className='text-xs text-gray-700 uppercase bg-[#f1f4f9] rounded-lg dark:bg-gray-700 dark:text-gray-400 '>
          <tr>
            <th className="px-4 py-2 border-b">Product Name</th>
            <th className="px-4 py-2 border-b">Product Location</th>
            <th className="px-4 py-2 border-b">Date-Time</th>
            <th className="px-4 py-2 border-b">Amount</th>
            <th className="px-4 py-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {dealsData.map((deal, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b flex items-center text-center">
                <img className="w-10 h-10 border border-1 rounded mr-2" src={deal.imgUrl} alt={deal.productName} />
                {deal.productName}
              </td>
              <td className="px-4 py-2 border-b">{deal.productLocation}</td>
              <td className="px-4 py-2 border-b">{deal.dateTime}</td>
              <td className="px-4 py-2 border-b">{deal.amount}</td>
              <td className={`px-4 py-2 border-b`}><p className={`rounded-lg text-center ${getStatusClass(deal.status)}`}>{deal.status}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DealsDetails;

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesDetailsChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthData = {
    January: { completion: [20, 40, 60, 80, 100], sales: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000] },
    February: { completion: [30, 50, 70, 90, 110], sales: [6000, 12000, 18000, 24000, 30000, 36000, 42000, 48000, 54000, 60000, 66000, 72000] },
    March: { completion: [25, 45, 65, 85, 105], sales: [7000, 14000, 21000, 28000, 35000, 42000, 49000, 56000, 63000, 70000, 77000, 84000] },
    April: { completion: [35, 55, 75, 95, 115], sales: [8000, 16000, 24000, 32000, 40000, 48000, 56000, 64000, 72000, 80000, 88000, 96000] },
    May: { completion: [40, 60, 80, 100, 120], sales: [9000, 18000, 27000, 36000, 45000, 54000, 63000, 72000, 81000, 90000, 99000, 108000] },
    June: { completion: [50, 70, 90, 110, 130], sales: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000] },
    July: { completion: [45, 65, 85, 105, 125], sales: [11000, 22000, 33000, 44000, 55000, 66000, 77000, 88000, 99000, 110000, 121000, 132000] },
    August: { completion: [55, 75, 95, 115, 135], sales: [12000, 24000, 36000, 48000, 60000, 72000, 84000, 96000, 108000, 120000, 132000, 144000] },
    September: { completion: [60, 80, 100, 120, 140], sales: [13000, 26000, 39000, 52000, 65000, 78000, 91000, 104000, 117000, 130000, 143000, 156000] },
    October: { completion: [65, 85, 105, 125, 145], sales: [14000, 28000, 42000, 56000, 70000, 84000, 98000, 112000, 126000, 140000, 154000, 168000] },
    November: { completion: [70, 90, 110, 130, 150], sales: [15000, 30000, 45000, 60000, 75000, 90000, 105000, 120000, 135000, 150000, 165000, 180000] },
    December: { completion: [75, 95, 115, 135, 155], sales: [16000, 32000, 48000, 64000, 80000, 96000, 112000, 128000, 144000, 160000, 176000, 192000] },
  };

  const data = {
    labels: monthData[selectedMonth].sales.map(value => `${value / 1000}k`),
    datasets: [
      {
        label: 'Completion (%)',
        data: monthData[selectedMonth].completion,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sales',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Completion (%)',
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Sales Details</h2>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="ml-2 p-1 border rounded-md">
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesDetailsChart;

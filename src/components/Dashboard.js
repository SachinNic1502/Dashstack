import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import {  FaUserFriends } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { RiBox3Fill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import SalesDetailsChart from "./SalesDetailsChart";
import DealsDetails from "./DealsDetails";

const Dashboard = () => {
  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-[32px] text-[#202224] font-bold mb-4">Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="text-[16px] font-bold text-gray-700">Total User</h4>
            <div className="bg-[#e4e4fe] p-3 rounded-md">
              <FaUserFriends className="text-[#8280FF] text-2xl"/>
            </div>
          </div>
          <h3 className="text-3xl font-semibold my-4">40,689</h3>
          <div className="flex items-center text-green-600">
            <FaArrowTrendUp className="mr-1" />
            <span className="flex items-center">
              <span className="text-green-600">8.5 %</span>
              <span className="text-gray-600 ml-1">Up from yesterday</span>
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="text-[16px] font-bold text-gray-700">Total Order</h4>
            <div className="bg-[#fef3d5] p-3 rounded-md">
              <RiBox3Fill className="text-[#ffc53d] text-2xl"/>
            </div>
          </div>
          <h3 className="text-3xl font-semibold my-4">10293</h3>
          <div className="flex items-center text-green-600">
            <FaArrowTrendUp className="mr-1" />
            <span className="flex items-center">
              <span className="text-green-600">1.3 %</span>
              <span className="text-gray-600 ml-1">Up from past week</span>
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold text-gray-700">Total Sales</h4>
            <div className="bg-[#d8f7e8] p-3 rounded-md">
              <BsGraphUpArrow className="text-[#49d991] text-2xl"/>
            </div>
          </div>
          <h3 className="text-3xl font-semibold my-4">$89,000</h3>
          <div className="flex items-center text-red-600">
            <FaArrowTrendDown className="mr-1" />
            <span className="flex items-center">
              <span className="text-red-600">4.3%</span>
              <span className="text-gray-600 ml-1"> Down from yesterday</span>
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold text-gray-700">Total Pending</h4>
            <div className="bg-[#ffddd1] p-3 rounded-md">
              <RxCountdownTimer className="text-[#FF9066] text-2xl"/>
            </div>
          </div>
          <h3 className="text-3xl font-semibold my-4">Total Pending</h3>
          <div className="flex items-center text-red-600">
            <FaArrowTrendDown className="mr-1" />
            <span className="flex items-center">
              <span className="text-red-600">1.8%</span>
              <span className="text-gray-600 ml-1"> Up from yesterday</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <SalesDetailsChart />
      </div>
      <div className="mt-8">
        <DealsDetails/>
      </div>
    </section>
  );
};

export default Dashboard;

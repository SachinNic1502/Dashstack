import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { RiBox3Fill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import SalesDetailsChart from "./SalesDetailsChart";
import DealsDetails from "./DealsDetails";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "40,689",
      percentage: "8.5%",
      trend: "up",
      trendColor: "text-green-600",
      icon: <FaUserFriends className="text-[#8280FF] text-2xl md:text-3xl" />,
      bgColor: "bg-[#e4e4fe]",
    },
    {
      title: "Total Orders",
      value: "10,293",
      percentage: "1.3%",
      trend: "up",
      trendColor: "text-green-600",
      icon: <RiBox3Fill className="text-[#ffc53d] text-2xl md:text-3xl" />,
      bgColor: "bg-[#fef3d5]",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      percentage: "4.3%",
      trend: "down",
      trendColor: "text-red-600",
      icon: <BsGraphUpArrow className="text-[#49d991] text-2xl md:text-3xl" />,
      bgColor: "bg-[#d8f7e8]",
    },
    {
      title: "Total Pending",
      value: "1,293",
      percentage: "1.8%",
      trend: "up",
      trendColor: "text-red-600",
      icon: <RxCountdownTimer className="text-[#FF9066] text-2xl md:text-3xl" />,
      bgColor: "bg-[#ffddd1]",
    },
  ];

  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#202224] font-bold mb-4">
        Dashboard
      </h3>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h4 className="text-sm md:text-base lg:text-lg font-bold text-gray-700">
                {stat.title}
              </h4>
              <div className={`${stat.bgColor} p-3 rounded-md`}>{stat.icon}</div>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-4">{stat.value}</h3>
            <div className={`flex items-center ${stat.trendColor}`}>
              {stat.trend === "up" ? <FaArrowTrendUp className="mr-1" /> : <FaArrowTrendDown className="mr-1" />}
              <span className="flex items-center text-xs md:text-sm lg:text-base">
                <span>{stat.percentage}</span>
                <span className="text-gray-600 ml-1">Up from yesterday</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Details */}
      <div className="mt-8">
        <SalesDetailsChart />
      </div>
      <div className="mt-8">
        <DealsDetails />
      </div>
    </section>
  );
};

export default Dashboard;

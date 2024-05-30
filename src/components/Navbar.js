import React, { useState } from 'react';
import { FaBars, FaSearch, FaBell, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-gray-800">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <FaBars className="text-xl text-[#202224]" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-200 text-gray-800 rounded-full border border-gray-300 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-xl text-blue-600" />
          
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 bg-red-600 text-white rounded-full text-xs">
              {notificationCount}
            </span>
          )}
        </div>
        
        <div className="relative">
          <select
            className="bg-white text-gray-800 py-2 pl-3 pr-8 rounded-lg border border-gray-300 appearance-none"
            value={selectedCountry.code}
            onChange={(e) =>
              setSelectedCountry(
                countries.find((country) => country.code === e.target.value)
              )
            }
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
            <FaUserCircle className="text-2xl text-gray-800" />
            <div>
              <span className="font-bold">Username</span>
              <span className="block text-sm text-gray-500">Admin</span>
            </div>
            <FaChevronDown className="text-gray-800" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-10">
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

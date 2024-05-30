import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Dropdown = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (item.path) {
      setSelectedItem(item);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
        {trigger(selectedItem)}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-black z-10">
          <div className={`overflow-y-auto ${items.length > 5 ? 'h-48' : ''}`}>
            {items.map((item, index) => (
              <div key={index} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleItemClick(item)}>
                {item.path ? (
                  <Link to={item.path} className="flex items-center w-full">
                    <img src={item.img} className="inline w-6 h-6 rounded-full mr-2" />
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <div className="flex items-center w-full">
                    <img src={item.img} className="inline w-6 h-6 rounded-full mr-2" />
                    <span>{item.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string, // Path is optional
    })
  ).isRequired,
};

export default Dropdown;

import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";

const Settings = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="flex-grow p-4 overflow-auto">
      <h3 className="text-[32px] text-[#202224] font-bold mb-8">General Settings</h3>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Logo Upload Section */}
        <div className="flex flex-col items-center mb-8 border p-8 rounded-lg">
          <div className="relative mb-4 w-24 h-24">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded Logo"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <AiOutlineCamera className="text-gray-500 text-3xl" />
              </div>
            )}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <label htmlFor="file-upload" className="text-blue-700 font-bold cursor-pointer">
            Upload Logo
          </label>
        </div>

        {/* Settings Form */}
        <div className="grid grid-cols-2 gap-8">
          {/* First Row */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="site-name">
              Site Name
            </label>
            <input
              type="text"
              id="site-name"
              name="site-name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter site name"
              value="Bright Web"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="copy-right">
              Copy Right
            </label>
            <input
              type="text"
              id="copy-right"
              name="copy-right"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter copy right text"
              value="All rights Reserved@brightweb"
            />
          </div>

          {/* Second Row */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seo-title">
              SEO Title
            </label>
            <input
              type="text"
              id="seo-title"
              name="seo-title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter SEO title"
              value="Bright web is a hybrid dashboard"
            />
          </div>
          <div className="mb-4 row-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seo-description">
              SEO Description
            </label>
            <textarea
              id="seo-description"
              name="seo-description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter SEO description"
              style={{ height: "160px" }}
              rows="4"
            >Bright web is a hybrid dashboard</textarea>
          </div>

          {/* Third Row */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seo-keywords">
              SEO Keywords
            </label>
            <input
              type="text"
              id="seo-keywords"
              name="seo-keywords"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter SEO keywords"
              value="CEO"
            />
          </div>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white w-[160px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;

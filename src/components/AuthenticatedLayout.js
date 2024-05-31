import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-[250px]">
        <Navbar />
        <main className="flex-grow overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;

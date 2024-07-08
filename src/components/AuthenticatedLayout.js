import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AuthenticatedLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'} overflow-y-auto`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
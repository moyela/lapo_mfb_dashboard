import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      <div className="h-screen overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 h-screen overflow-y-auto">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 
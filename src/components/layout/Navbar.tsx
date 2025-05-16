import React from 'react';
import { useLocation } from 'react-router-dom';
import { dashboardItem, menuItems } from './sidebarMenu';

const Navbar: React.FC = () => {
  const location = useLocation();
  // Find the matching sidebar item for the current route
  const allItems = [dashboardItem, ...menuItems];
  const current = allItems.find(item => location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))) || dashboardItem;
  const Icon = current.icon;

  return (
    <header className="w-full bg-white border-b flex items-center justify-between px-6 py-4 h-16 font-[Satoshi]">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-gray-800" />
        <span className="text-lg font-semibold text-gray-800">{current.label}</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <span className="sr-only">View notifications</span>
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        {/* Profile Icon (same as bell, same color, no border/background) */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
            <div className="flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        </button>

      </div>
    </header>
  );
};

export default Navbar; 


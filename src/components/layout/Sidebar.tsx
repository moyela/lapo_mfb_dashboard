import React from 'react';
import lapo_logo from '../../assets/images/lapo_logo_2.svg';
import cardinfra_logo from '../../assets/images/cardinfra_logo.png';
import { Link, useLocation } from 'react-router-dom';
import { dashboardItem, menuItems } from './sidebarMenu';
import {
  HomeIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  UserIcon,
  CreditCardIcon,
  IdentificationIcon,
  DocumentPlusIcon,
  ArchiveBoxIcon,
  RectangleStackIcon,
  LockClosedIcon,
  KeyIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  QueueListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const isDashboardActive = location.pathname === dashboardItem.path;

  return (
    <div className="w-64 bg-[#00205B] text-white h-screen flex flex-col font-[Satoshi]">
      <div className="p-6 flex-shrink-0 flex items-center gap-2">
        <img src={lapo_logo} alt="LAPO Logo" className="h-10" />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        <nav className="px-2">
          <Link
            to={dashboardItem.path}
            className={`group flex items-center gap-3 px-4 py-2 my-1 rounded-lg transition-colors text-sm font-medium mb-2 font-[Satoshi]
              ${isDashboardActive ? 'bg-white text-[#00205B] border-l-4 border-[#3B82F6]' : 'hover:bg-blue-900/60 text-[#D0D5DD]'}
            `}
          >
            <dashboardItem.icon className="w-5 h-5 transition-colors text-inherit" />
            <span>{dashboardItem.label}</span>
          </Link>
        </nav>
        <div className="px-6 text-xs text-blue-100 tracking-widest mb-2 mt-2 font-[Satoshi]">MAIN MENU</div>
        <nav className="px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-3 px-4 py-2 my-1 rounded-lg transition-colors text-sm font-medium font-[Satoshi]
                  ${isActive ? 'bg-white text-[#00205B] border-l-4 border-[#3B82F6]' : 'hover:bg-blue-900/60 text-[#D0D5DD]'}
                `}
              >
                <Icon className="w-5 h-5 transition-colors text-inherit" />
                <span>{item.label}</span>
              </Link>
            );
          })}
            <div className="mt-6">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-[#D0D5DD] bg-transparent hover:bg-blue-900/60 text-[16px] font-medium focus:outline-none border-0 shadow-none group font-[Satoshi]">
                <ArrowLeftStartOnRectangleIcon className="w-5 h-5 transition-colors text-inherit" />
                <span>Logout</span>
            </button>
            </div>
        </nav>

        <div className="p-6 flex-shrink-0 font-[Satoshi]">
          <div className="text-xs text-blue-100 mb-2 font-[Satoshi]">POWERED BY</div>
          <img src={cardinfra_logo} alt="Cardinfra Logo" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 
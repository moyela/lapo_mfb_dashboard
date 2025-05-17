import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRightIcon, ArrowTrendingUpIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';

const monthlyIssuanceData = [
  { name: 'May', Personalized: 15, Instant: 35, total: 50 },
  { name: 'Jun', Personalized: 25, Instant: 45, total: 70 },
  { name: 'Jul', Personalized: 10, Instant: 20, total: 30 },
  { name: 'Aug', Personalized: 20, Instant: 30, total: 50 },
  { name: 'Sep', Personalized: 15, Instant: 25, total: 40 },
  { name: 'Oct', Personalized: 30, Instant: 40, total: 70 },
  { name: 'Nov', Personalized: 20, Instant: 35, total: 55 },
];

const weeklyIncomeData = [
  { name: 'Mon', value: 35 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 30 },
  { name: 'Thu', value: 60 },
  { name: 'Fri', value: 50 },
  { name: 'Sat', value: 75 },
  { name: 'Sun', value: 65 },
];

const cardStatusData = [
  { name: 'Active', value: 1800, color: '#00C49F' },
  { name: 'Expired', value: 300, color: '#FFBB28' },
  { name: 'Inactive', value: 200, color: '#0088FE' },
  { name: 'Blocked', value: 100, color: '#8884d8' },
  { name: 'Lost', value: 50, color: '#FF6384' },
];

const recentRequests = [
  { branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready', action: 'View' },
  { branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'In Progress', action: 'View' },
  { branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'Acknowledged', action: 'View' },
  { branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Pending', action: 'View' },
];

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="space-y-6 font-[Satoshi]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Hi Nazeer, what would you like to do today?</h1>
          <p className="text-gray-600 mt-1">Last login: 26/11/2024 14:39:58</p>
        </div>
        <div className="flex items-center gap-3 border rounded-lg px-3 py-2 divide-x">
          <span className="text-gray-600 pr-3">Today</span>
          <span className="text-gray-800 pl-3">{formattedDate}</span>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Your Quick Access</h2>
        <div className="grid grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 bg-[#F5F8FF] rounded-lg hover:bg-blue-100 transition group">
            <div className="p-2 bg-[#2970FF] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#1849A9] group-hover:text-blue-800">Manage a Card</span>
            <svg className="w-5 h-5 text-[#2970FF] ml-auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83301 14.1667L14.1663 5.83337M14.1663 5.83337H5.83301M14.1663 5.83337V14.1667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="flex items-center gap-3 p-4 bg-[#F5F8FF] rounded-lg hover:bg-blue-100 transition group">
            <div className="p-2 bg-[#2970FF] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#1849A9] group-hover:text-blue-800">Issue Instant Card</span>
            <svg className="w-5 h-5 text-[#2970FF] ml-auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83301 14.1667L14.1663 5.83337M14.1663 5.83337H5.83301M14.1663 5.83337V14.1667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="flex items-center gap-3 p-4 bg-[#F5F8FF] rounded-lg hover:bg-blue-100 transition group">
            <div className="p-2 bg-[#2970FF] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15M9 15H12L20 7L17 4L9 12V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#1849A9] group-hover:text-blue-800">Issue Personalized Card</span>
            <svg className="w-5 h-5 text-[#2970FF] ml-auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83301 14.1667L14.1663 5.83337M14.1663 5.83337H5.83301M14.1663 5.83337V14.1667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="flex items-center gap-3 p-4 bg-[#F5F8FF] rounded-lg hover:bg-blue-100 transition group">
            <div className="p-2 bg-[#2970FF] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#1849A9] group-hover:text-blue-800">Review Card Requests</span>
            <svg className="w-5 h-5 text-[#2970FF] ml-auto" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83301 14.1667L14.1663 5.83337M14.1663 5.83337H5.83301M14.1663 5.83337V14.1667" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Analytics</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Total Active Cards */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex flex-col items-start gap-2 mb-2">
              <div className="p-2 bg-[#ECFDF3] rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ECFDF3"/>
                  <path d="M15.5 9L11.5 13L9.5 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#12B76A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Total Active Cards</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">26,478</span>
              <span className="text-sm text-green-600">+9% this month</span>
            </div>
          </div>

          {/* Total Personalized Cards */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex flex-col items-start gap-2 mb-2">
              <div className="p-2 bg-[#F9F5FF] rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#F9F5FF"/>
                  <path d="M8 12.5L11 15.5L16 9.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#9E77ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Total Personalized Cards</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">15,703</span>
              <span className="text-sm text-green-600">8.5% this month</span>
            </div>
          </div>

          {/* Today's Revenue */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex flex-col items-start gap-2 mb-2">
              <div className="p-2 bg-[#EFF8FF] rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#EFF8FF"/>
                  <path d="M12 8V16M9 12L12 15L15 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Today's Revenue</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">₦9.3M</span>
              <span className="text-sm text-green-600">+6% vs yesterday</span>
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex flex-col items-start gap-2 mb-2">
              <div className="p-2 bg-[#FFF6ED] rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#FFF6ED"/>
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F79009" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Pending Requests</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">38</span>
              <span className="text-sm text-orange-600">Requires attention</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Issuance Chart */}
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Monthly Issuance</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronUpDownIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyIssuanceData} barSize={40}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, name === 'Instant' ? 'Instant Cards' : 'Personalized Cards']}
                />
                <Bar 
                  dataKey="Personalized" 
                  stackId="a" 
                  fill="#1849A9"
                  radius={[0, 0, 4, 4]}
                />
                <Bar 
                  dataKey="Instant" 
                  stackId="a" 
                  fill="#84ADFF"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1849A9]" />
              <span className="text-sm text-gray-600">Personalized Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#84ADFF]" />
              <span className="text-sm text-gray-600">Instant Cards</span>
            </div>
          </div>
        </div>

        {/* Recent Card Requests */}
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Card Requests</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronUpDownIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
          <div className="h-[300px] overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-2">Branch</th>
                  <th className="pb-2">Card Type</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((request, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3">{request.branch}</td>
                    <td>{request.cardType}</td>
                    <td>{request.quantity}</td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs
                        ${request.status === 'Ready' ? 'bg-green-100 text-green-800' :
                          request.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          request.status === 'Acknowledged' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                        {request.status}
                      </span>
                    </td>
                    <td>
                      <button className="text-blue-600 hover:text-blue-800">{request.action}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* This Week's Income */}
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">This Week's Income</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronUpDownIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyIncomeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#12B76A" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: '#12B76A' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card Status Distribution */}
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Card Status Distribution</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronUpDownIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
          <div className="h-[300px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cardStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cardStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-gray-600">Total Cards</div>
                <div className="text-2xl font-semibold">
                  {cardStatusData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {cardStatusData.map((status, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
                <span className="text-sm text-gray-600">{status.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
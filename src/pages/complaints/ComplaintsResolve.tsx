import React, { useState } from 'react';
import ComplaintsTable from '../../components/complaints/ComplaintsTable';
import FilterModal from '../../components/complaints/FilterModal';

const ComplaintsResolve = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'resolved'>('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="space-y-4 font-[Satoshi]">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Complaints: Resolve</h1>
        <p className="text-gray-600 mt-1">
          View and resolve pending complaints here.
        </p>
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'pending'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('pending')}
            >
              {activeTab === 'pending' && (
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
              )}
              Pending
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'resolved'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('resolved')}
            >
              Resolved
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search complaint"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-64 bg-gray-50 focus:bg-white font-[Satoshi]"
            style={{ backgroundColor: '#F9FAFB' }}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" /></svg>
          </span>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg flex items-center gap-2 bg-gray-50 hover:bg-gray-100">
            {/* Calendar SVG */}
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-gray-700">Date</span>
          </button>
          <button
            className="px-4 py-2 border rounded-lg flex items-center gap-2 bg-gray-50 hover:bg-gray-100"
            onClick={() => setShowFilter(true)}
          >
            {/* Filter SVG */}
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-3.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" /></svg>
            <span className="text-gray-700">Filter</span>
          </button>
        </div>
      </div>

      <ComplaintsTable status={activeTab} searchQuery={searchQuery} basePath="resolve" />
      {showFilter && <FilterModal onClose={() => setShowFilter(false)} />}
    </div>
  );
};

export default ComplaintsResolve; 
import React from 'react';
import { createPortal } from 'react-dom';

interface FilterModalProps {
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/70 backdrop-blur-sm font-[Satoshi]">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-auto p-0 relative animate-fade-in">
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center pt-8 pb-2">
          <div className="mb-2">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-3.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" /></svg>
          </div>
          <div className="font-semibold text-lg">Filter</div>
          <div className="text-gray-500 text-sm mb-4">Select conditions and apply</div>
        </div>
        <form className="space-y-4 px-8 pb-8">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Category</label>
            <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 font-[Satoshi]">
              <option value="">Select category from dropdown</option>
              <option value="Card Dispute">Card Dispute</option>
              <option value="Fraud">Fraud</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Account Number</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 font-[Satoshi]"
              placeholder="0123456789"
              defaultValue="0123456789"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Customer Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 font-[Satoshi]"
              placeholder="Nazeer Ajibola"
              defaultValue="Nazeer Ajibola"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold text-base mt-2 hover:bg-blue-800 transition font-[Satoshi] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-3.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" /></svg>
            Apply
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default FilterModal; 
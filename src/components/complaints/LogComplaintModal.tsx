import React, { useRef } from 'react';

interface LogComplaintModalProps {
  onClose: () => void;
}

const LogComplaintModal: React.FC<LogComplaintModalProps> = ({ onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
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
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 9h8M8 13h6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="font-semibold text-lg">Log Complaint</div>
          <div className="text-gray-500 text-sm mb-4">Select category and fill in details</div>
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
            <label className="block text-sm text-gray-700 mb-1">Account Number*</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 font-[Satoshi]"
              placeholder="0123456789"
              defaultValue="0123456789"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Customer Name*</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 font-[Satoshi]"
              placeholder="Nazeer Ajibola"
              defaultValue="Nazeer Ajibola"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Complaint Details*</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 min-h-[80px] bg-gray-50 font-[Satoshi]"
              placeholder="Describe complaint...."
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Upload File (optional)</label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 transition"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5 5 5M12 5v12" /></svg>
                <div className="text-blue-600 font-medium cursor-pointer">Click to upload</div>
                <div className="text-xs text-gray-400">or drag and drop<br />PDF, JPG (max. 10mb)</div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold text-base mt-2 hover:bg-blue-800 transition font-[Satoshi]"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogComplaintModal; 
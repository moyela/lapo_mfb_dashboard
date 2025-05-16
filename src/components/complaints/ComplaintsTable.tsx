import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ComplaintsTableProps {
  status: 'pending' | 'resolved';
  searchQuery: string;
  basePath?: 'log' | 'resolve';
}

// Dummy data for demonstration
const dummyComplaints = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  accountNumber: '1100105514',
  customerName: 'Wemi Moyela',
  submissionDate: '16/05/2025 10:27:43',
  category: 'Card Dispute',
}));

const ComplaintsTable: React.FC<ComplaintsTableProps> = ({ status, searchQuery, basePath }) => {
  const navigate = useNavigate();
  const path = basePath || (status === 'pending' || status === 'resolved' ? 'resolve' : 'log');

  return (
    <div>
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-left">
            <th className="py-3 px-4 font-bold text-gray-700 border-b border-r border-gray-200">Account Number</th>
            <th className="py-3 px-4 font-bold text-gray-700 border-b border-r border-gray-200">Customer Name</th>
            <th className="py-3 px-4 font-bold text-gray-700 border-b border-r border-gray-200">Submission Date</th>
            <th className="py-3 px-4 font-bold text-gray-700 border-b border-gray-200">Category</th>
          </tr>
        </thead>
        <tbody>
          {dummyComplaints.map((complaint) => (
            <tr
              key={complaint.id}
              className="hover:bg-gray-50 cursor-pointer border-b border-gray-200"
              onClick={() => navigate(`/complaints/${path}/${complaint.id}`)}
            >
              <td className="py-3 px-4 border-r border-gray-200 text-[#475467]">{complaint.accountNumber}</td>
              <td className="py-3 px-4 border-r border-gray-200 text-[#475467]">{complaint.customerName}</td>
              <td className="py-3 px-4 border-r border-gray-200 text-[#475467]">{complaint.submissionDate}</td>
              <td className="py-3 px-4 text-[#475467]">{complaint.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">Page 1 of 20</div>
        <div className="flex gap-2 ml-auto">
          <button className="px-5 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition">Previous</button>
          <button className="px-5 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsTable; 
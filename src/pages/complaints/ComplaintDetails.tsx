import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ComplaintDetailsProps {
  type: 'log' | 'resolve';
}

// Dummy data for demonstration
const dummyComplaints = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  category: 'Card Dispute',
  accountNumber: '0123456789',
  branch: 'Head Office',
  customerName: 'Nazeer',
  details: 'Complaint Details......',
  submissionDate: '11/14/2024 10:27:43',
  status: i % 2 === 0 ? 'Resolved' : 'Pending',
  resolvedBy: i % 2 === 0 ? 'Manager' : '-',
  resolutionDate: i % 2 === 0 ? '11/14/2024 10:27:43' : '-',
  attachment: 'None',
}));

const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({ type }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const complaint = dummyComplaints.find((c) => c.id === id) || dummyComplaints[0];

  return (
    <div className="space-y-4 font-[Satoshi]">
      <button
        className="mb-2 px-4 py-2 bg-white border rounded-lg text-blue-700 hover:bg-blue-50"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Complaints: {type === 'log' ? 'Log' : 'Resolve'}</h1>
        <p className="text-gray-600 mt-1">
          View details of logged complaints and log new ones here.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-8">
        <div className="mb-6">
          <div className="font-semibold text-lg mb-4">Complaint Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Complaint Category</label>
              <input className="w-full border rounded-lg px-3 py-2 bg-gray-100" value={complaint.category} readOnly />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Branch</label>
              <input className="w-full border rounded-lg px-3 py-2 bg-gray-100" value={complaint.branch} readOnly />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Account Number</label>
              <input className="w-full border rounded-lg px-3 py-2 bg-gray-100" value={complaint.accountNumber} readOnly />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Customer Name</label>
              <input className="w-full border rounded-lg px-3 py-2 bg-gray-100" value={complaint.customerName} readOnly />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Complaint Details</label>
              <textarea className="w-full border rounded-lg px-3 py-2 bg-gray-100" value={complaint.details} readOnly />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-2">
              <span className="block text-sm text-gray-600">Submission Date</span>
              <span>{complaint.submissionDate}</span>
            </div>
            <div className="mb-2">
              <span className="block text-sm text-gray-600">Resolved By</span>
              <span>{complaint.resolvedBy}</span>
            </div>
            <div className="mb-2">
              <span className="block text-sm text-gray-600">Resolution Date</span>
              <span>{complaint.resolutionDate}</span>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <span className="block text-sm text-gray-600">Status</span>
              {complaint.status === 'Resolved' ? (
                <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm ml-2">Resolved</span>
              ) : (
                <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm ml-2">Pending</span>
              )}
            </div>
            <div className="mb-2">
              <span className="block text-sm text-gray-600">Attachment</span>
              <span>{complaint.attachment}</span>
            </div>
          </div>
        </div>
        {type === 'resolve' && complaint.status === 'Pending' && (
          <div className="mt-8">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800">Resolve</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintDetails; 
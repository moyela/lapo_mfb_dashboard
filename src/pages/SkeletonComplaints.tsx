import React from 'react';

const SkeletonComplaints = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div>
        <div className="h-7 w-56 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-80 bg-gray-100 rounded" />
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex gap-4">
            <div className="h-8 w-20 bg-gray-100 rounded" />
            <div className="h-8 w-20 bg-gray-100 rounded" />
          </div>
          <div className="h-8 w-32 bg-gray-100 rounded" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-64 bg-gray-100 rounded" />
            <div className="flex gap-2">
              <div className="h-10 w-20 bg-gray-100 rounded" />
              <div className="h-10 w-20 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-3 px-4"><div className="h-4 w-24 bg-gray-100 rounded" /></th>
                  <th className="py-3 px-4"><div className="h-4 w-32 bg-gray-100 rounded" /></th>
                  <th className="py-3 px-4"><div className="h-4 w-32 bg-gray-100 rounded" /></th>
                  <th className="py-3 px-4"><div className="h-4 w-24 bg-gray-100 rounded" /></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(12)].map((_, i) => (
                  <tr key={i}>
                    <td className="py-3 px-4"><div className="h-4 w-24 bg-gray-100 rounded" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-32 bg-gray-100 rounded" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-32 bg-gray-100 rounded" /></td>
                    <td className="py-3 px-4"><div className="h-4 w-24 bg-gray-100 rounded" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm">
            <div className="h-4 w-24 bg-gray-100 rounded" />
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-gray-100 rounded" />
              <div className="h-8 w-20 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonComplaints; 
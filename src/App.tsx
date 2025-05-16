import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ComplaintsLog from './pages/complaints/ComplaintsLog';
import ComplaintsResolve from './pages/complaints/ComplaintsResolve';
import SkeletonComplaints from './pages/SkeletonComplaints';
import ComplaintDetails from './pages/complaints/ComplaintDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SkeletonComplaints />} />
          <Route path="complaints/log" element={<ComplaintsLog />} />
          <Route path="complaints/log/:id" element={<ComplaintDetails type="log" />} />
          <Route path="complaints/resolve" element={<ComplaintsResolve />} />
          <Route path="complaints/resolve/:id" element={<ComplaintDetails type="resolve" />} />
          <Route path="*" element={<SkeletonComplaints />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
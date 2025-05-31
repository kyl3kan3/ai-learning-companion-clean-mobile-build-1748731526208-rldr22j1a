import React, { useState } from 'react';


export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="mobile-converted">
      <span className="mobile-converted">🎓 AI Learning Companion</span>
      <button onClick={() => setCurrentPage('dashboard')}>
        <span>📊 Dashboard</span>
      </button>
      <div className="mobile-converted" style={{overflowY: "auto"}}>
        <span>Content Area</span>
      </div>
    </div>
  );
}


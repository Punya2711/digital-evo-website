import React from 'react';

export const CircuitBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Vertical lines */}
          <line x1="20" y1="0" x2="20" y2="50" stroke="#F5D300" strokeWidth="1" className="circuit-line" />
          <line x1="50" y1="30" x2="50" y2="80" stroke="#F5D300" strokeWidth="1" className="circuit-line" style={{ animationDelay: '0.5s' }} />
          <line x1="80" y1="10" x2="80" y2="60" stroke="#F5D300" strokeWidth="1" className="circuit-line" style={{ animationDelay: '1s' }} />
          
          {/* Horizontal lines */}
          <line x1="0" y1="30" x2="50" y2="30" stroke="#F5D300" strokeWidth="1" className="circuit-line" style={{ animationDelay: '0.3s' }} />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#F5D300" strokeWidth="1" className="circuit-line" style={{ animationDelay: '0.8s' }} />
          <line x1="50" y1="80" x2="100" y2="80" stroke="#F5D300" strokeWidth="1" className="circuit-line" style={{ animationDelay: '1.2s' }} />
          
          {/* Connection points */}
          <circle cx="20" cy="50" r="2" fill="#F5D300" />
          <circle cx="50" cy="30" r="2" fill="#F5D300" />
          <circle cx="50" cy="80" r="2" fill="#F5D300" />
          <circle cx="80" cy="50" r="2" fill="#F5D300" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
};

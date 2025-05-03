import React from "react";

const DropdownArrow = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20" // Standard viewbox for many icon sets
      fill="currentColor" // Inherits the text color
      className={`w-5 h-5 text-black ${className}`} // Base styles + allows overrides
      aria-hidden="true" // Hide from screen readers if purely decorative
    >
      {/* Path for a chevron down shape */}
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DropdownArrow;

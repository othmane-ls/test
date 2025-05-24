import React from "react";
import { MdWarningAmber } from "react-icons/md";

interface Warning {
  text: string;
}

const Warnings: React.FC<{ warnings: Warning[] }> = ({ warnings }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Sub-navbar */}
      <div className="bg-orange-100 text-orange-800 rounded-t-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <MdWarningAmber className="mr-2" />
          <h2 className="text-lg font-bold">Warnings</h2>
        </div>
      </div>

      {/* Warning Boxes */}
      <div className="grid grid-cols-1 gap-4 mt-4">
        {warnings.map((warning, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-md p-4 text-gray-800 border border-orange-200"
          >
            {warning.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warnings;

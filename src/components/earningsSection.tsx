import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

interface Earning {
  label: string;
  value: string | number;
  change?: string;
}

const EarningsSection: React.FC<{ earnings: Earning[] }> = ({ earnings }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Sub-navbar */}
      <div className="bg-yellow-100 text-yellow-800 rounded-t-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaMoneyBillWave className="mr-2" />
          <h2 className="text-lg font-bold">Earnings</h2>
        </div>
        <IoIosArrowForward />
      </div>

      {/* Earnings Boxes */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {earnings.map((earning, index) => (
          <div
            key={index}
            className="bg-yellow-50 rounded-md p-4 text-center border border-yellow-200"
          >
            <h2 className="text-xl font-bold text-gray-800">{earning.value}</h2>
            <p className="text-sm text-gray-600">{earning.label}</p>
            {earning.change && (
              <p className="text-sm text-green-600 font-bold">
                {earning.change}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsSection;

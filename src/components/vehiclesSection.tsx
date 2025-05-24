import React from "react";
import { IoCarSportSharp } from "react-icons/io5"; // For the vehicle icon
import { IoIosArrowForward } from "react-icons/io"; // For the arrow icon
import { useDispatch } from "react-redux";
import { setValue } from "../redux/counterSlice";

interface Metric {
  label: string;
  value: string | number;
}

const VehicleSection: React.FC<{ metrics: Metric[] }> = ({ metrics }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Sub-navbar */}
      <div className="bg-orange-500 text-white rounded-t-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <IoCarSportSharp className="mr-2" />
          <h2 className="text-lg font-bold">Vehicles</h2>
        </div>
        <button
          onClick={() => {
            dispatch(setValue("Vehicles"));
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Metric boxes */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md p-4 text-center border border-gray-300"
          >
            <h2 className="text-2xl font-bold">{metric.value}</h2>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSection;

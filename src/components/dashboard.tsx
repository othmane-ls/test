import React from "react";
import BookingSection from "./bookingSection";
import CustomerSection from "./customerSection";
import VehicleSection from "./vehiclesSection";
import Warnings from "./warnings";
import EarningsSection from "./earningsSection";

const DashboardPage: React.FC = () => {
  const bookingMetrics = [
    { label: "Today", value: 540 },
    { label: "Yesterday", value: 486 },
    { label: "Daily Average", value: 597 },
  ];

  const customerMetrics = [
    { label: "New Today", value: 345 },
    { label: "Daily Average", value: 367 },
  ];

  const vehicleMetrics = [
    { label: "Available", value: 654 },
    { label: "In Use", value: 127 },
    { label: "Maintenance", value: 120 },
  ];

  const warningData = [
    { text: "Car N 432 booking was canceled!" },
    { text: "Client N 1234 has issues with tires!" },
  ];

  const earningMetrics = [
    { label: "Bookings today", value: "790,568 MAD", change: "+2,8%" },
    { label: "Bookings yesterday", value: "570,208 MAD" },
    { label: "Top-up today", value: "890,910 MAD", change: "+5%" },
    { label: "Top-up yesterday", value: "834,457 MAD" },
  ];

  return (
    <div className="pt-10 p-6 bg-gray-100 h-full">
      {/* Sections Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Bookings Section */}
        <BookingSection metrics={bookingMetrics} />

        {/* Customers Section */}
        <CustomerSection metrics={customerMetrics} />

        {/* Vehicles Section */}
        <VehicleSection metrics={vehicleMetrics} />
      </div>

      {/* Warnings and Earnings */}
      <div className="grid grid-cols-2 gap-6 pt-20">
        {/* Warnings */}
        <Warnings warnings={warningData} />

        {/* Earnings */}
        <EarningsSection earnings={earningMetrics} />
      </div>
    </div>
  );
};

export default DashboardPage;

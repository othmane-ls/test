import React from "react";
import DataTable from "./dataTable";
import { tableConfigurations } from "./tableConfig";

// Example dataset
const rows = [
  {
    bookingId: "ID 00001",
    clientName: "Yassine Dhioui",
    registrationCode: "12345 | B | 56",
    startDate: "10 January 2025 | 10:15 PM",
    endDate: "21 January 2025 | 10:15 PM",
    status: "On going",
    totalPrice: "5640 MAD",
    details: {
      location: "Marrakech, Daoudiate",
      paymentMethod: "TPE",
      status: "Complete",
      amountPaid: "5000 MAD",
      balanceRemaining: "0 MAD",
      guarantyAmount: "5000 MAD",
      pickupAndReturn: "350 MAD",
      insurance: "350 MAD",
      additionalKilometrage: "1200 KM",
      additionalDriver: "N/A",
      carModel: "Dacia",
    },
  },
  {
    bookingId: "ID 00002",
    clientName: "Ilias Aabbassi",
    registrationCode: "12345 | B | 56",
    startDate: "10 January 2025 | 06:15 PM",
    endDate: "21 January 2025 | 02:15 PM",
    status: "Finished",
    totalPrice: "3250 MAD",
    details: {
      location: "Marrakech, Daoudiate",
      paymentMethod: "TPE",
      status: "Complete",
      amountPaid: "5000 MAD",
      balanceRemaining: "0 MAD",
      guarantyAmount: "5000 MAD",
      pickupAndReturn: "350 MAD",
      insurance: "350 MAD",
      additionalKilometrage: "1200 KM",
      additionalDriver: "N/A",
      carModel: "Mercedes-benz",
    },
  },
  {
    bookingId: "ID 00003",
    clientName: "Ilias Aabbassi",
    registrationCode: "12345 | B | 56",
    startDate: "11 January 2025 | 01:15 AM",
    endDate: "21 January 2025 | 01:15 AM",
    status: "Draft",
    totalPrice: "7450 MAD",
    details: {
      location: "Marrakech, Daoudiate",
      paymentMethod: "TPE",
      status: "Complete",
      amountPaid: "5000 MAD",
      balanceRemaining: "0 MAD",
      guarantyAmount: "5000 MAD",
      pickupAndReturn: "350 MAD",
      insurance: "350 MAD",
      additionalKilometrage: "1200 KM",
      additionalDriver: "N/A",
      carModel: "Audi",
    },
  },
];

const BookingPage: React.FC = () => {
  const { columns, keys } = React.useMemo(() => tableConfigurations["Booking"], []);
  return (
    <div className="pt-10 p-6 bg-gray-100 h-full">
      <div style={{ margin: "20px" }}>
        <DataTable rows={rows} columns={columns} keys={keys}/>
      </div>
    </div>
  );
};

export default BookingPage;

import React from "react";
import { tableConfigurations } from "./tableConfig";
import DataTable from "./dataTable";

const vehicleRows = [
  {
    matricule: "ID 00001",
    make: "Mercedes",
    model: "S Class",
    licensePlate: "12345 | B | 56",
    dailyRate: "700 MAD",
    status: "Booked",
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
    },
  },
  {
    matricule: "ID 00002",
    make: "Audi",
    model: "A7",
    licensePlate: "12345 | B | 56",
    dailyRate: "1100 MAD",
    status: "Available",
    details: {
      location: "Casablanca, Maarif",
      paymentMethod: "Cash",
      status: "In Progress",
      amountPaid: "2500 MAD",
      balanceRemaining: "2000 MAD",
      guarantyAmount: "5000 MAD",
      pickupAndReturn: "500 MAD",
      insurance: "400 MAD",
      additionalKilometrage: "800 KM",
      additionalDriver: "John Doe",
    },
  },
  {
    matricule: "ID 00003",
    make: "Mercedes",
    model: "CLA",
    licensePlate: "12345 | B | 56",
    dailyRate: "750 MAD",
    status: "In Maintenance",
    details: {
      location: "Casablanca, Maarif",
      paymentMethod: "Cash",
      status: "Complete",
      amountPaid: "2500 MAD",
      balanceRemaining: "2000 MAD",
      guarantyAmount: "5000 MAD",
      pickupAndReturn: "500 MAD",
      insurance: "400 MAD",
      additionalKilometrage: "800 KM",
      additionalDriver: "John Doe",
    },
    // MoreDetails: {...}
  },
];

const VehiclePage: React.FC = () => {
  const { columns, keys } = tableConfigurations["Vehicles"];
  return (
    <div className="pt-10 p-6 bg-gray-100 h-full">
      <DataTable rows={vehicleRows} columns={columns} keys={keys} />
    </div>
  );
};

export default VehiclePage;

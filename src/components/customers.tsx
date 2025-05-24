import React from "react";
import DataTable from "./dataTable";
import { tableConfigurations } from "./tableConfig";

const customerRows = [
  {
    clientId: "ID00001",
    clientName: "Yassine Dhioui",
    phone: "+212 771218042",
    email: "dhioui.yassine@gmail.com",
    lastBookingDate: "10 January 2025 | 10:15 PM",
    status: "VIP",
  },
  {
    clientId: "ID00002",
    clientName: "Ilias Aabbassi",
    phone: "+212 771218043",
    email: "aabbassi.ilias@gmail.com",
    lastBookingDate: "15 January 2025 | 03:00 PM",
    status: "Active",
  },
  {
    clientId: "ID00003",
    clientName: "Sarah Benaissa",
    phone: "+212 771218044",
    email: "benaissa.sarah@gmail.com",
    lastBookingDate: "20 January 2025 | 09:30 AM",
    status: "Inactive",
  },
];


const CustomersPage: React.FC = () => {
  const { columns, keys } = tableConfigurations["Clients"];
  return (
    <div className="pt-10 p-6 bg-gray-100 h-full">
      <DataTable rows={customerRows} columns={columns} keys={keys} />
    </div>
  );
};

export default CustomersPage;

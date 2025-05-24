import React from "react";
import { useSelector } from "react-redux";
import DashboardPage from "./dashboard";
import BookingPage from "./booking";
import VehiclePage from "./vehicle";
import CustomersPage from "./customers";

const DynamicPage: React.FC = () => {
  const pageName = useSelector(
    (state: any) => state.counterSlice.componentName
  );

  switch (pageName) {
    case "Dashboard":
      return <DashboardPage />;
    case "Booking":
      return <BookingPage />;
    case "Vehicles":
      return <VehiclePage />;
    case "Customers":
      return <CustomersPage />;
    // case "Analytics":
    //     return <Analytics />;
    // case "Earnings":
    //     return <Earnings />;
    // case "More":
    //     return <More />;
    // default:
    //   return <div>Page not found</div>;
    default:
        return <DashboardPage />;
  }
};

export default DynamicPage;

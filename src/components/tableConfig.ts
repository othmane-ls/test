export const tableConfigurations: { [key: string]: { columns: string[]; keys: string[] } } = {
    Booking: {
      columns: ["Booking ID", "Client Name", "Registration Code", "Start Date", "End Date", "Status", "Total Price", "More"],
      keys: ["bookingId", "clientName", "registrationCode", "startDate", "endDate", "status", "totalPrice"],
    },
    Vehicles: {
      columns: ["Matricule", "Make", "Model", "License Plate", "Daily Rate", "Availability Status", "More"],
      keys: ["matricule", "make", "model", "licensePlate", "dailyRate", "status"],
    },
    Clients: {
      columns: ["Client ID", "Client Name", "Phone", "Email", "Last Booking Date", "Status", "More"],
      keys: ["clientId", "clientName", "phone", "email", "lastBookingDate", "status"],
    },
  };
  
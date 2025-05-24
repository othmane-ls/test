import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

// Vehicle Row Interface
interface VehicleRow {
  matricule: string;
  make: string;
  model: string;
  licensePlate: string;
  dailyRate: string;
  availabilityStatus: string;
}

interface VehicleTableProps {
  rows: VehicleRow[];
}

// Data interface for vehicles
interface VehiclePopUpRow {
    matricule: string;
    make: string;
    model: string;
    licensePlate: string;
    dailyRate: string;
    availabilityStatus: string;
    fuelType: string;
    odometer: string;
    insurance: string;
    vehicleType: string;
    year: string;
    additionalEquipment: string;
    vehicleNotes: string;
    images: string[];
  }
  
  const vehicleRows: VehiclePopUpRow[] = [
    {
      matricule: "ID 00001",
      make: "Mercedes",
      model: "S Class",
      licensePlate: "12345 | B | 56",
      dailyRate: "700 MAD",
      availabilityStatus: "Booked",
      fuelType: "Gasoline",
      odometer: "25,898 KM",
      insurance: "All risk",
      vehicleType: "Sedan",
      year: "2020",
      additionalEquipment: "None",
      vehicleNotes: "This vehicle has no specific issues.",
      images: [
        "/path-to-image1.jpg",
        "/path-to-image2.jpg",
        "/path-to-image3.jpg",
      ],
    },
    // Add more rows here...
  ];

const StatusIndicator: React.FC<{ status: string }> = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "Booked":
        return "#F9A825"; // Yellow
      case "Available":
        return "#43A047"; // Green
      case "In Maintenance":
        return "#757575"; // Gray
      default:
        return "#000";
    }
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        color: getColor(),
      }}
    >
      <span
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: getColor(),
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></span>
      {status}
    </span>
  );
};

const VehicleTable: React.FC<VehicleTableProps> = ({ rows }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<VehicleRow | null>(null);

  // Open Dialog Handler
  const handleDialogOpen = (row: VehicleRow) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedRow(null);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          {/* Table Header */}
          <TableHead sx={{ backgroundColor: "#FDFFA7" }}>
            <TableRow>
              <TableCell>Matricule</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>License Plate</TableCell>
              <TableCell>Daily Rate</TableCell>
              <TableCell>Availability Status</TableCell>
              <TableCell align="right">More</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.matricule}</TableCell>
                <TableCell>{row.make}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.licensePlate}</TableCell>
                <TableCell>{row.dailyRate}</TableCell>
                <TableCell>
                    <StatusIndicator status={row.availabilityStatus} />
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDialogOpen(row)}>
                    <KeyboardArrowDown />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Popup Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth>
        <DialogTitle>Vehicle Details</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <Box>
              <p>
                <strong>Matricule:</strong> {selectedRow.matricule}
              </p>
              <p>
                <strong>Make:</strong> {selectedRow.make}
              </p>
              <p>
                <strong>Model:</strong> {selectedRow.model}
              </p>
              <p>
                <strong>License Plate:</strong> {selectedRow.licensePlate}
              </p>
              <p>
                <strong>Daily Rate:</strong> {selectedRow.dailyRate}
              </p>
              <p>
                <strong>Availability Status:</strong>{" "}
                {selectedRow.availabilityStatus}
              </p>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VehicleTable;
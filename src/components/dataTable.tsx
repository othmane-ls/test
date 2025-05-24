import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import DetailsPopup from "./DetailsPopup";
import { useSelector } from "react-redux";
import { Collapse, Typography } from "@mui/material";

// Define the structure of the data
interface DataRow {
  bookingId: string;
  clientName: string;
  registrationCode: string;
  startDate: string;
  endDate: string;
  status: string;
  totalPrice: string;
}

interface DataTableProps {
  rows: any[]; // Array of row data
  columns: string[]; // Table column headers
  keys: string[]; // Data keys for mapping the row
}

const StatusIndicator: React.FC<{ status: string }> = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "On going":
        return "#F9A825"; // Yellow
      case "Booked":
        return "#F9A825"; // Yellow
      case "VIP":
        return "#F9A825"; // Yellow

      case "Finished":
        return "#43A047"; // Green
      case "Active":
        return "#43A047"; // Green
      case "Available":
        return "#43A047"; // Green

      case "In Maintenance":
        return "#757575"; // Gray
      case "Inactive":
        return "#757575"; // Gray
      case "Draft":
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

const DataTable: React.FC<DataTableProps> = React.memo(({ rows, columns, keys }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [openRows, setOpenRows] = useState<{ [key: string]: boolean }>({});
  const pageName = useSelector(
    (state: any) => state.counterSlice.componentName
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDialogOpen = (row: any) => {
    console.log('handleDialogOpen Called!');
    setSelectedRow(row);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    console.log('handleDialogClose Called!');
    setOpenDialog(false);
    setSelectedRow(null);
  };

  // Dynamic Filtering
  const filteredRows = rows.filter((row) =>
    keys.some((key) =>
      row[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const printingFunc = (needtobeprint: any) => {
    console.log(needtobeprint);
  }

  const toggleRow = (rowId: string) => {
    setOpenRows((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
  };

  return (
    <Box sx={{ padding: "16px" }}>
      {/* Search bar and Add Booking button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        {/* Search Bar */}
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: "85%",
            backgroundColor: "#fff",
          }}
        />

        {/* Add Booking Button */}
        <Button
          variant="contained"
          color="warning"
          onClick={handleDialogOpen}
          sx={{
            fontWeight: 900, // Increase font weight to make it very bold
            fontSize: "1rem", // Adjust font size if needed
            padding: "16px 32px", // Increase padding for larger button
            textTransform: "none", // Disable uppercase if you prefer
          }}
        >
          + Add Booking
        </Button>
        {/* {selectedRow && (
          <DetailsPopup
            details={selectedRow?.details}
            currentPage={pageName}
            open={openDialog}
            onClose={handleDialogClose}
          />
        )} */}
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          {/* Table Head */}
          <TableHead sx={{ backgroundColor: "#FDFFA7" }}>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell align="center" key={index}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {filteredRows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {/* Parent Row */}
                <TableRow>
                  {keys.map((key, cellIndex) => (
                    <TableCell align="center" key={cellIndex}>
                      {key === "status" ? (
                        <StatusIndicator status={row[key]} />
                      ) : (
                        row[key]
                      )}
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <IconButton
                      // onClick={() => toggleRow(row.bookingId)}
                      onClick={handleDialogOpen}
                      aria-label="expand row"
                      size="small"
                    >
                      {openRows[row.bookingId] ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* Expanded Row */}
                {/* {openRows[row.bookingId] && ( */}
                { selectedRow && (
                  <TableRow>
                    <DetailsPopup 
                      row={row}
                      currentPage={pageName}
                      open={openDialog}
                      onClose={handleDialogClose}
                    />
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Booking Details Popup */}
      {/* {selectedRow && (
        <DetailsPopup
          details={selectedRow?.details}
          currentPage={pageName}
          open={openDialog}
          onClose={handleDialogClose}
        />
      )} */}
    </Box>
  );
});

export default DataTable;


{/* <TableCell
style={{ paddingBottom: 0, paddingTop: 0 }}
colSpan={keys.length + 1}
>
<Collapse in={openRows[row.bookingId]} timeout="auto" unmountOnExit>
  <Box sx={{ margin: 2, padding: 2, border: "1px solid #e0e0e0", borderRadius: "8px" }}>
    <Typography variant="h6" gutterBottom>
      Details for Booking
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      
      <Typography variant="body1">
        <strong>Location:</strong> {row.details.location}
      </Typography>
      
      <Typography variant="body1">
        <strong>Payment Method:</strong> {row.details.paymentMethod}
      </Typography>
      <Typography variant="body1">
        <strong>Status:</strong>{" "}
        <span
          style={{
            color: row.details.status === "Complete" ? "#43A047" : "#F9A825",
          }}
        >
          {row.details.status}
        </span>
      </Typography>
      <Typography variant="body1">
        <strong>Amount Paid:</strong> {row.details.amountPaid}
      </Typography>
      <Typography variant="body1">
        <strong>Balance Remaining:</strong> {row.details.balanceRemaining}
      </Typography>
      <Typography variant="body1">
        <strong>Guaranty Amount:</strong> {row.details.guarantyAmount}
      </Typography>
      
      <Typography variant="body1">
        <strong>Pickup and Return:</strong> {row.details.pickupAndReturn}
      </Typography>
      <Typography variant="body1">
        <strong>Insurance:</strong> {row.details.insurance}
      </Typography>
      <Typography variant="body1">
        <strong>Kilometrage Supplémentaire:</strong>{" "}
        {row.details.additionalKilometrage}
      </Typography>
      <Typography variant="body1">
        <strong>Extra Driver:</strong> {row.details.additionalDriver}
      </Typography>
    </Box>
  </Box>
</Collapse> 
</TableCell>*/}
import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const BookingDetailsPopup: React.FC<{
  row: any;
  open: boolean;
  onClose: () => void;
}> = ({ row, open, onClose }) => {
  console.log("check row.location : ", row);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        Booking Details
      </DialogTitle>
      <DialogContent>
        {/* Main Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between", // Distribute blocks evenly
            alignItems: "flex-start", // Align blocks to the top
            gap: "24px", // Space between blocks
            padding: "20px",
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1 }}>
            {/* Lease Infos */}
            <Box sx={{ marginBottom: "24px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Lease Infos
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <LocationOnIcon fontSize="small" color="action" />
                <Typography variant="body1" color="textSecondary">
                  {row.details.location}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  justifyContent: "space-between",
                  borderTop: "1px solid #e0e0e0",
                  paddingTop: "12px",
                  marginTop: "12px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CalendarTodayIcon fontSize="small" color="action" />
                  <Typography variant="body2">{row.startDate}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CalendarTodayIcon fontSize="small" color="action" />
                  <Typography variant="body2">{row.endDate}</Typography>
                </Box>
              </Box>
            </Box>

            {/* Client Infos */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Client Infos
              </Typography>
              <Box sx={{ marginBottom: "16px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    paddingBottom: "5px",
                  }}
                >
                  Full Name
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {row.clientName}
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    width: "40%",
                    backgroundColor: "#e0e0e0",
                    marginTop: "8px",
                  }}
                />
              </Box>
            </Box>

            {/* Car Infos */}
            <Box sx={{ marginBottom: "24px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Car Infos
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      paddingBottom: "8px",
                    }}
                  >
                    Make & Model
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {row.details.carModel}
                  </Typography>
                  <Box
                    sx={{
                      height: "1px",
                      width: "100%",
                      maxWidth: "80px",
                      backgroundColor: "#e0e0e0",
                      marginTop: "8px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      paddingBottom: "8px",
                    }}
                  >
                    License Plate
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {row.registrationCode}
                  </Typography>
                  <Box
                    sx={{
                      height: "1px",
                      width: "100%",
                      maxWidth: "80px",
                      backgroundColor: "#e0e0e0",
                      marginTop: "8px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: 1 }}>
            {/* Car Infos */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Payment Infos
              </Typography>
              <Box sx={{ marginBottom: "16px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    paddingBottom: "5px",
                  }}
                >
                  Payment Method
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {row.details.paymentMethod}
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    width: "35%",
                    backgroundColor: "#e0e0e0",
                    marginTop: "8px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: "20px" }}>
        <Button
          onClick={onClose}
          variant="contained"
          color="warning"
          sx={{ fontWeight: "bold", padding: "10px 20px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDetailsPopup;

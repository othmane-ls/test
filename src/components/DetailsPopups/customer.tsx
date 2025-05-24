import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const CustomerDetailsPopup: React.FC<{
  details: any;
  open: boolean;
  onClose: () => void;
}> = ({ details, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Customer Details</DialogTitle>
      <DialogContent>
        {/* Popup Content */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDetailsPopup;
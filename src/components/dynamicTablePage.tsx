import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const BookingDetailsPopup: React.FC<{
  details: any;
  open: boolean;
  onClose: () => void;
}> = ({ details, open, onClose }) => (
  <Dialog open={open} onClose={onClose} fullWidth>
    <DialogTitle>Booking Details</DialogTitle>
    <DialogContent>
      <Box display="flex" gap="16px">
        {/* Lease Info */}
        <Box flex="1">
          <h3>Lease Infos</h3>
          <p><strong>Location:</strong> {details.location}</p>
          <p><strong>Start Date:</strong> {details.startDate}</p>
          <p><strong>End Date:</strong> {details.endDate}</p>
        </Box>

        {/* Payment Info */}
        <Box flex="1">
          <h3>Payment Infos</h3>
          <p><strong>Payment Method:</strong> {details.paymentMethod}</p>
          <p><strong>Status:</strong> {details.status}</p>
          <p><strong>Amount Paid:</strong> {details.amountPaid}</p>
          <p><strong>Balance Remaining:</strong> {details.balanceRemaining}</p>
          <p><strong>Guaranty Amount:</strong> {details.guarantyAmount}</p>
        </Box>

        {/* Additional Services */}
        <Box flex="1">
          <h3>Additional Services</h3>
          <p><strong>Pickup and Return:</strong> {details.pickupAndReturn}</p>
          <p><strong>Insurance:</strong> {details.insurance}</p>
          <p><strong>Kilometrage Supplémentaire:</strong> {details.additionalKilometrage}</p>
          <p><strong>Extra Driver:</strong> {details.additionalDriver}</p>
        </Box>
      </Box>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default BookingDetailsPopup;

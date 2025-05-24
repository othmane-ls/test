import BookingDetailsPopup from "./DetailsPopups/booking";

const DetailsPopup: React.FC<{
  row: any;
  currentPage: string;
  open: boolean;
  onClose: () => void;
}> = ({ row, currentPage, open, onClose }) => {
  console.log('Checking details in Booking Details Popup : ', row);
  return (
    <>
      {currentPage === "Booking" && (
        <BookingDetailsPopup row={row} open={open} onClose={onClose} />
      )}
    </>
  );
};

export default DetailsPopup;

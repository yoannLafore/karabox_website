import './BookSlotButton.module.scss';

interface BookSlotButtonProps {
  onClick: () => void;
}

function BookSlotButton({ onClick }: BookSlotButtonProps) {
  return <button onClick={onClick}>Book Slot</button>;
}

export default BookSlotButton;

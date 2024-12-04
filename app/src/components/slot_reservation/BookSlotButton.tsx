import './BookSlotButton.module.scss';

interface BookSlotButtonProps {
  onClick: () => void;
  text: string;
  disabled: boolean;
}

function BookSlotButton({ onClick, text, disabled }: BookSlotButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default BookSlotButton;

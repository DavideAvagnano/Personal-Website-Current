interface FilterButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ text, active, onClick }: FilterButtonProps) => {
  return (
    <button
      className={`font-semibold text-lg border-b-2 transition-all ${
        active
          ? "text-gray-900 border-gray-900"
          : "text-gray-400 border-gray-400 hover:text-gray-500 hover:border-gray-500"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default FilterButton;

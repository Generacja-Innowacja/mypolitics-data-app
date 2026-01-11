import Button from "../Button/ButtonView";

export type ButtonSelectOption = { id: string; label: string };

interface Props {
  options: ButtonSelectOption[];
  selectedOptionId: string;
  onOptionSelect(id: string): void;
}

const ButtonSelect = ({ options, selectedOptionId, onOptionSelect }: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <Button
          key={option.id}
          styleType={selectedOptionId === option.id ? "primary" : "outlined"}
          sizeType="small"
          onClick={() => onOptionSelect(option.id)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonSelect;

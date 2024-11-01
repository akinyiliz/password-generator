import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

type ToggleOptionProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const ToggleOption = ({ label, value, onValueChange }: ToggleOptionProps) => {
  return (
    <div className="settings-tab">
      <label htmlFor="uppercaseAllowed" className="text-sm md:text-base">
        {label}
      </label>
      {value ? (
        <BsToggleOn
          size={33}
          color="#d181ff"
          onClick={() => onValueChange(false)}
          role="button"
        />
      ) : (
        <BsToggleOff size={33} onClick={() => onValueChange(true)} />
      )}
    </div>
  );
};

export default ToggleOption;

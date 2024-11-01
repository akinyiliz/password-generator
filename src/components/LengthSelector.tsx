type LengthSelectorProps = {
  length: number;
  onLengthChange: (length: number) => void;
};

const LengthSelector = ({ length, onLengthChange }: LengthSelectorProps) => {
  const min = 8;
  const max = 20;
  const fillPercentage = ((length - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="passwordLength" className="label-text">
          Character Length
        </label>
        <p className="text-secondary text-lg font-[600]">{length}</p>
      </div>
      <div className="bg-inputBg flex items-center gap-4 text-whiteText py-3 px-4 rounded-xl">
        <span>8</span>
        <input
          type="range"
          name="passwordLength"
          id="passwordLength"
          role="slider"
          min={min}
          max={max}
          value={length}
          className="flex-1 custom-range"
          onChange={(event) => onLengthChange(parseInt(event.target.value))}
          style={{
            background: `linear-gradient(90deg, #d181ff ${fillPercentage}%, #56505d ${fillPercentage}%)`,
          }}
        />
        <span>20</span>
      </div>
    </div>
  );
};

export default LengthSelector;

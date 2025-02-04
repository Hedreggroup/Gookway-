import React from "react";

interface CheckboxProps {
  id?: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div
      className={`formgroup my-5 w-full flex justify-start items-center gap-3 ${className}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{
          height: "1.5rem",
          width: "1.5rem",
        }}
      />
      <div className="w-full flex flex-col">
        <label htmlFor={id} className="text-red-600 font-bold">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

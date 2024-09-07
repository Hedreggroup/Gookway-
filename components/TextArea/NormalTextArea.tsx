import React from "react";

interface TextAreaProps {
  label?: string;
  name?: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const NormalTextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  name,
  error,
  onChange,
  rows = 4, // Default number of rows
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-light text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}{" "}
    </div>
  );
};

export default NormalTextArea;

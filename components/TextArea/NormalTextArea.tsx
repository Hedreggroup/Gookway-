import React from "react";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const NormalTextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
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
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};

export default NormalTextArea;

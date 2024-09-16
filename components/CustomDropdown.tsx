import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { boolean } from "yup";
import Spinner from "./utils/Spinner";

interface CustomDropdownProps {
  options: { label: string; value: any }[] | undefined;
  onSelect: (option: { label: string; value: any }) => void;
  showSearchBox?: boolean;
  loading?: boolean;
  error: string | undefined;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options = [{ label: "Select Option", value: 1 }],
  onSelect,
  showSearchBox = false,
  error,
  loading = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left w-full mt-4">
      <div>
        <button
          type="button"
          className={`${
            options[0]?.label === selectedOption.label
              ? "text-gray-400"
              : "text-black"
          } inline-flex justify-between w-full h-12 items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.label : "Select an option"}
          <Icon icon="ri:arrow-drop-down-line" fontSize={"20px"} />
        </button>
      </div>
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}{" "}
      {isOpen && (
        <div className="z-40 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {showSearchBox && (
            <div className="p-2">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          )}
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {loading ? (
              <Spinner size={25} color="#000000" />
            ) : (
              filteredOptions?.map((option, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

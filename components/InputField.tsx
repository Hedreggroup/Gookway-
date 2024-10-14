"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const InputField = ({
  type,
  height,
  width,
  transparent,
  label,
  name,
  placeholder,
  value,
  onChange,
  prefixIcon,
  suffixIcon,
  error,
  disabled,
  onSuffixIconClick,
  withRedBorder, // New prop to control the red border and styles
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const widthClass = width ? `w-full sm:w-${width}` : "w-full";
  const backgroundColor = transparent ? "bg-transparent" : "bg-white";
  const prefixIconClass =
    "absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400";
  const suffixIconClass =
    "absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 cursor-pointer";

  // Apply conditional styles for withRedBorder
  const redBorderStyles = withRedBorder
    ? {
        // color: "#f4263ea0",
        border: "0.5px solid #f4263e",
        boxShadow: "0 0 6px #4e2ade05, 0 6px 18px #4e2ade05",
        transition: "border-width 0.35s, border-color 0.35s, color 0.35s",
        outlineColor: "#f4263e",
      }
    : {};
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let passwordIcon =
    type === "password" ? (
      showPassword ? (
        <Icon
          icon="streamline:invisible-1"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <Icon
          icon="streamline:visible-solid"
          onClick={togglePasswordVisibility}
        />
      )
    ) : null;
  suffixIcon = passwordIcon;

  return (
    <div className="relative my-2" onClick={onSuffixIconClick}>
      {label && (
        <label
          htmlFor={label}
          className="block text-gray-700 text-sm font-light mb-2 capitalize"
        >
          {label + ":"}
        </label>
      )}
      <div className="relative flex items-center">
        {prefixIcon && <span className={prefixIconClass}>{prefixIcon}</span>}
        <input
          type={showPassword ? "text" : type}
          id={label}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          style={{
            paddingLeft: prefixIcon ? "2.5rem" : undefined,
            minHeight: height ?? 45,
            ...redBorderStyles, // Apply conditional red border styles
          }}
          className={`pl-${prefixIcon ? "10" : "3"} pr-${
            suffixIcon ? "10" : "3"
          }   ${widthClass} px-3 py-2 rounded-md border-gray-100 border-2 ${backgroundColor} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          value={value}
          onChange={onChange}
        />
        {suffixIcon && (
          <span className={suffixIconClass} onClick={onSuffixIconClick}>
            {suffixIcon}
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}{" "}
      {/* Display validation errors */}
    </div>
  );
};

export default InputField;

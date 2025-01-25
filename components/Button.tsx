import React, { useState } from "react";
// import "./Button.css";
import Loader from "./Loader";

const Button = ({
  color,
  width,
  height,
  children,
  isCircular,
  buttonColor,
  loading,
  whiteText,
  prefixIcon,
  suffixIcon,
  withBorder = false,
  ...rest
}: any) => {
  const [timeout, setTimeout] = useState(false);
  const styles = `${
    loading
      ? "bg-red-100 text-white"
      : color
      ? `bg-${color}-500 text-red-500`
      : "bg-red-500 text-white"
  }  $hover:bg-${color}-700 flex items-center justify-center font-medium py-2  px-4  border-red-500 ${
    isCircular ? "rounded-full" : "rounded"
  }`;
  const widthStyle = width ? `w-${width}` : "w-44";
  const heightStyle = height ? `h-${height}` : "h-12";
  const classNames = `${buttonColor}  inline-block ${styles} ${widthStyle} ${heightStyle} `;
  let { disabled } = rest;

  return (
    <button
      className={classNames}
      {...rest}
      // type="button"
      style={{
        minHeight: "40px",
        // opacity: timeout ? 1 : disabled && 0.4,
        // ...rest,
        borderWidth: withBorder && 1,
        // background: loading && "white",
        //   buttonColor === "btn-orange"
        //     ? "var(--orange-gradient)"
        //     : "var(--blue-gradient)",
      }}
    >
      <Loader
        imageSrc={""}
        loading={loading}
        onTimeOut={(timeOutCompleted) => setTimeout(!timeOutCompleted)}
        containerClass="absolute inset-0"
      />

      {prefixIcon && <span className="mr-2">{prefixIcon}</span>}
      {children}
      {/* {suffixIcon && <span className="ml-2">{suffixIcon}</span>} */}
    </button>
  );
};

export default Button;

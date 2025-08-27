import React from "react";

const Button = ({
  text,
  onclick,
  className = "",
  variant = "solid", // solid or outline
  disabled = false,
}) => {
  // base style (no hard padding/radius here so user can override)
  const baseStyle =
    "inline-flex items-center justify-center font-open-sans font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    solid:
      "bg-black text-white hover:bg-gray focus:ring-black disabled:bg-lightGray disabled:text-white disabled:cursor-not-allowed",
    outline:
      "border border-black text-black hover:bg-black hover:text-white focus:ring-black disabled:border-lightGray disabled:text-lightGray disabled:cursor-not-allowed",
  };

  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={`${baseStyle} ${styles[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

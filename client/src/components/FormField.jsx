import React, { useState } from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`${
          isFocused ? "text-blue-500" : "text-gray-500"
        } block font-medium mb-2`}
      >
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`${
          isFocused ? "border-blue-500" : "border-gray-300"
        } bg-gray-50 border rounded-lg text-sm py-3 pl-4 pr-10 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 font-semibold text-xs bg-gray-200 py-1 px-2 rounded-[5px] text-black transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          Surprise me
        </button>
      )}
    </div>
  );
};

export default FormField;

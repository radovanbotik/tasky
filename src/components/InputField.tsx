import React from "react";

const InputField = ({
  name,
  type,
  handleChange,
  handleBlur,
  value,
  touched,
  errors,
  children,
}) => {
  return (
    <div>
      <label htmlFor={name} className="inline font-semibold text-gray-900">
        {children}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className="relative block w-full rounded-md border-0 py-1.5 indent-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={name}
      />
      {touched && errors && (
        <p className="font-medium text-indigo-600 hover:text-indigo-500">
          {errors}
        </p>
      )}
    </div>
  );
};

export default InputField;

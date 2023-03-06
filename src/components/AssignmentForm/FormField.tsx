import React from "react";
import ErrorMessage from "./ErrorMessage";
import LabelField from "./LabelField";

type PropsTypes = {
  children: React.ReactNode;
  name: string;
  type: string;
  value: string;
  handleChange: any;
  handleBlur: any;
  touched: any;
  errors: any;
};

const FormField = ({
  children,
  name,
  type,
  handleChange,
  handleBlur,
  value,
  touched,
  errors,
}: PropsTypes) => {
  return (
    <div className="form-control">
      <LabelField name={name}>{children}</LabelField>
      <input
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className="input-bordered input  block w-full rounded-md border-0 py-1.5 indent-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <ErrorMessage errors={errors} touched={touched} />
    </div>
  );
};

export default FormField;

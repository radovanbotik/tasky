import React from "react";

const ErrorMessage = ({ errors, touched }) => {
  return (
    <>
      {touched && errors && (
        <p className="font-medium text-indigo-600 hover:text-indigo-500">
          {errors}
        </p>
      )}
    </>
  );
};

export default ErrorMessage;

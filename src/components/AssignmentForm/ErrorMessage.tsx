import React from "react";

const ErrorMessage = ({
  errors,
  touched,
}: {
  errors:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  touched: any;
}) => {
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

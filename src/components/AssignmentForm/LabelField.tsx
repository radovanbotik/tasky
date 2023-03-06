import React from "react";

type Proptypes = {
  children: React.ReactNode;
  name: string;
};

const LabelField = ({ name, children }: Proptypes) => {
  return (
    <label htmlFor={name} className="inline font-semibold text-gray-900">
      {children}
    </label>
  );
};

export default LabelField;

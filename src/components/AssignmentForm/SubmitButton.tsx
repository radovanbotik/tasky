import React from "react";

type PropTypes = {
  children: React.ReactNode;
  fn?: () => void;
};

const SubmitButton = ({ children, fn }: PropTypes) => {
  return (
    <div className="form-control mt-6">
      <button className="btn-primary btn" type="submit" onClick={fn}>
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;

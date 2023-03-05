import React from "react";

type Props = {
  children: React.ReactNode;
  id: number;
  deleteTask: (id: number) => void;
};

const DeleteButton = ({ children, deleteTask, id }: Props) => {
  return (
    <button className="btn-error btn" onClick={() => deleteTask(id)}>
      {children}
    </button>
  );
};

export default DeleteButton;

import React, { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

type Props = {
  children: React.ReactNode;
  id: string;
};

const DeleteButton = ({ children, id }: Props) => {
  const { deleteTask } = useContext(ApplicationContext);
  return (
    <button className="btn-error btn" onClick={() => deleteTask(id)}>
      {children}
    </button>
  );
};

export default DeleteButton;

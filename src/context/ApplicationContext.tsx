import { createContext } from "react";
import { GlobalState } from "../types/types";
import { Assignment } from "../types/types";

export type globalStateProps = {
  globalState: GlobalState;
  fetchAllTasks: () => void;
  createNewTask: (newTask: {
    name: string;
    desc: string;
    date: string;
  }) => void;
  toggleStatus: (id: string, enabled: boolean) => void;
  deleteTask: (id: string) => void;
  loginUser: (userInfo: { email: string; password: string }) => void;
  registerUser: (userInfo: { email: string; password: string }) => void;
  closeModal: () => void;
  logOut: () => void;
};

export const ApplicationContext = createContext<globalStateProps>(
  {} as globalStateProps
);

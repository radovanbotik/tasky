import React, { useReducer } from "react";
import { Assignment, GlobalState } from "../types/types";
import { ApplicationContext } from "./ApplicationContext";
import reducer from "./reducer";
import axios from "axios";

const initialState: GlobalState = {
  pending: false,
  all_tasks: [{ id: "", active: true, desc: "", date: "", name: "" }],
  user: {
    email: "",
    id: "",
    password: "",
  },
  // user: retrieveUser(),
  alert: false,
  alert_message: "",
};

interface Props {
  children: React.ReactNode;
  //   children: JSX.Element;
}
const ContextProvider = ({ children }: Props) => {
  const URL = "https://64034ff5302b5d671c4c149c.mockapi.io/";
  const [globalState, dispatch] = useReducer(reducer, initialState);

  const saveUser = (user: { email: string; id: string; password: string }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const removeUser = () => {
    localStorage.removeItem("user");
  };
  const retrieveUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      JSON.parse(user);
      return user;
    }
  };

  const logOut = () => {
    dispatch({ type: "LOGOUT_USER" });
    removeUser();
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const getUsers = async () => {
    const resp = await axios({
      method: "get",
      url: `${URL}/users`,
    });
    return resp.data;
  };

  const registerUser = async (userInfo: {
    email: string;
    password: string;
  }) => {
    try {
      const resp = await axios({
        method: "post",
        url: `${URL}/users/`,
        data: userInfo,
      });
      const user = resp.data;
      dispatch({ type: "REGISTER_USER_SUCCESS", payload: user });
      saveUser(user);
    } catch (error) {
      dispatch({ type: "REGISTER_USER_FAIL" });
    }
  };

  const loginUser = async (userInfo: { email: string; password: string }) => {
    const users = await getUsers();
    const user = users.find(
      (user: { email: string }) => user.email === userInfo.email
    );
    const pass = users.find(
      (user: { password: string }) => user.password === userInfo.password
    );
    if (user && pass) {
      dispatch({ type: "LOGIN_USER_SUCCESS", payload: user });
      saveUser(user);
      return;
    }
    dispatch({ type: "LOGIN_USER_FAIL" });
  };

  const createNewTask = async (newTask: {
    name: string;
    desc: string;
    date: string;
  }) => {
    const newTaskCopy = { ...newTask, active: true };
    dispatch({ type: "CREATE_NEW_TASK_INIT" });
    try {
      const resp = await axios({
        method: "post",
        url: `${URL}/tasks`,
        data: newTaskCopy,
      });
      dispatch({ type: "CREATE_NEW_TASK_SUCCESS", payload: newTaskCopy });
    } catch (error) {
      dispatch({ type: "CREATE_NEW_TASK_FAIL" });
    }
  };

  const fetchAllTasks = async () => {
    dispatch({ type: "FETCH_ALL_TASKS_INIT" });
    try {
      const resp = await axios({
        method: "get",
        url: `${URL}/tasks`,
      });
      dispatch({ type: "FETCH_ALL_TASKS_SUCCESS", payload: resp.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_ALL_TASKS_FAIL" });
    }
  };

  const toggleStatus = async (id: string, enabled: boolean) => {
    console.log(enabled, id);
    dispatch({ type: "TOGGLE_STATUS", payload: { id } });
    const resp = await axios({
      method: "put",
      url: `${URL}/tasks/${id}`,
      data: { active: !enabled },
    });
    console.log(resp.data);
  };

  const deleteTask = async (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
    const resp = await axios({
      method: "delete",
      url: `${URL}/tasks/${id}`,
    });
  };

  return (
    <ApplicationContext.Provider
      value={{
        globalState,
        createNewTask,
        fetchAllTasks,
        toggleStatus,
        deleteTask,
        loginUser,
        registerUser,
        closeModal,
        logOut,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ContextProvider;

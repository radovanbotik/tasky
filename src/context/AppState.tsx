import React, { useReducer, useContext } from "react";
import reducer from "./stateReducer";
import axios from "axios";
import {
  FETCH_ALL_TASKS_INIT,
  FETCH_ALL_TASKS_SUCCESS,
  FETCH_ALL_TASKS_FAIL,
  CREATE_NEW_TASK_INIT,
  CREATE_NEW_TASK_SUCCESS,
  CREATE_NEW_TASK_FAIL,
  TOGGLE_STATUS,
  DELETE_TASK,
  CLOSE_MODAL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  TOGGLE_MEMBERSHIP,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "./actions";

const saveUser = user => {
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

const initialState = {
  pending: false,
  all_tasks: [],
  user: retrieveUser(),
  alert: false,
  alert_message: "",
};
const Context = React.createContext(initialState);

const AppState = ({ children }) => {
  const URL = "https://64034ff5302b5d671c4c149c.mockapi.io/";

  const [state, dispatch] = useReducer(reducer, initialState);

  const addData = newTask => {
    const addToTask = newTask;
    addToTask.myid = new Date().getMilliseconds();
    addToTask.active = true;
    return addToTask;
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const logoutUser = () => {};

  const getUsers = async () => {
    const resp = await axios({
      method: "get",
      url: `${URL}/users`,
    });
    return resp.data;
  };

  const registerUser = async userInfo => {
    try {
      const resp = await axios({
        method: "post",
        url: `${URL}/users/`,
        data: userInfo,
      });
      const user = resp.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
      saveUser(user.email);
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL });
    }
  };

  const loginUser = async userInfo => {
    const users = await getUsers(userInfo);
    const user = await users.find(user => user.email === userInfo.email);
    if (user) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      saveUser(user.email);
      return;
    }
    dispatch({ type: LOGIN_USER_FAIL });
  };

  const createNewTask = async newTask => {
    console.log("submited ran");
    console.log(newTask);
    dispatch({ type: CREATE_NEW_TASK_INIT });
    const updatedTask = addData(newTask);
    try {
      const resp = await axios({
        method: "post",
        url: `${URL}/tasks`,
        data: updatedTask,
      });
      dispatch({ type: CREATE_NEW_TASK_SUCCESS, payload: updatedTask });
    } catch (error) {
      dispatch({ type: CREATE_NEW_TASK_FAIL });
    }
  };

  const fetchAllTasks = async () => {
    dispatch({ type: FETCH_ALL_TASKS_INIT });
    try {
      const resp = await axios({
        method: "get",
        url: `${URL}/tasks`,
      });
      if (resp.data) {
        dispatch({ type: FETCH_ALL_TASKS_SUCCESS, payload: resp.data });
      } else {
        throw new Error({ msg: "Unable to access the data." });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_ALL_TASKS_FAIL });
    }
  };

  const toggleStatus = async (id, enabled) => {
    dispatch({ type: TOGGLE_STATUS, payload: { id } });
    const resp = await axios({
      method: "put",
      url: `${URL}/tasks/${id}`,
      data: { active: !enabled },
    });
  };

  const deleteTask = async id => {
    dispatch({ type: DELETE_TASK, payload: { id } });
    const resp = await axios({
      method: "delete",
      url: `${URL}/tasks/${id}`,
    });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        createNewTask,
        fetchAllTasks,
        toggleStatus,
        deleteTask,
        closeModal,
        retrieveUser,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAppState = () => {
  return useContext(Context);
};
export { AppState, useAppState };

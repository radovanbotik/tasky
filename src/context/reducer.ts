import { Assignment, GlobalState, User } from "../types/types";

export type ActionType =
  | { type: "CREATE_NEW_TASK_INIT" }
  | {
      type: "CREATE_NEW_TASK_SUCCESS";
      payload: any;
    }
  | { type: "CREATE_NEW_TASK_FAIL" }
  | { type: "FETCH_ALL_TASKS_INIT" }
  | { type: "FETCH_ALL_TASKS_SUCCESS"; payload: Assignment[] }
  | { type: "FETCH_ALL_TASKS_FAIL" }
  | { type: "TOGGLE_STATUS"; payload: { id: string } }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "CLOSE_MODAL" }
  | {
      type: "LOGIN_USER_SUCCESS";
      payload: { email: string; id: string; password: string };
    }
  | { type: "LOGIN_USER_FAIL" }
  | {
      type: "REGISTER_USER_SUCCESS";
      payload: { email: string; id: string; password: string };
    }
  | { type: "REGISTER_USER_FAIL" }
  | { type: "LOGOUT_USER" };

const reducer = (state: GlobalState, action: ActionType) => {
  switch (action.type) {
    case "CREATE_NEW_TASK_INIT": {
      return {
        ...state,
        pending: true,
      };
    }
    case "CREATE_NEW_TASK_SUCCESS": {
      return {
        ...state,
        pending: false,
        all_tasks: [...state.all_tasks, action.payload],
        alert: true,
        alert_message: "New assignment has been arranged.",
      };
    }
    case "CREATE_NEW_TASK_FAIL": {
      return {
        ...state,
        pending: false,
        alert: true,
        alert_message:
          "Unable to create a new assignment. Please try again later.",
      };
    }
    case "FETCH_ALL_TASKS_INIT": {
      return {
        ...state,
        pending: true,
      };
    }
    case "FETCH_ALL_TASKS_SUCCESS": {
      return {
        ...state,
        all_tasks: [...action.payload],
        pending: false,
      };
    }

    case "FETCH_ALL_TASKS_FAIL": {
      return {
        ...state,
        pending: false,
        alert: true,
        alert_message: "Unable to access your data. Please try again later.",
      };
    }

    case "TOGGLE_STATUS": {
      const clickedTaskId = action.payload.id;
      const clickedTask = state.all_tasks.find(
        task => task.id === clickedTaskId
      )?.active;
      return {
        ...state,
        alert: true,
        alert_message: "Assignment has been updated.",
        all_tasks: state.all_tasks.map(({ ...task }) => {
          if (task.id === clickedTaskId) {
            task.active = !task.active;
          }
          return task;
        }),
      };
    }
    case "DELETE_TASK": {
      const clickedTaskId = action.payload?.id;

      return {
        ...state,
        alert: true,
        alert_message: "Assignment has been deleted.",
        all_tasks: state.all_tasks.filter(task => task.id !== clickedTaskId),
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        alert: false,
        alert_message: "",
      };
    }
    case "LOGIN_USER_SUCCESS": {
      return {
        ...state,
        alert: true,
        alert_message: "You have succesfully logged in.",
        user: action.payload,
      };
    }

    case "LOGIN_USER_FAIL": {
      return {
        ...state,
        alert: true,
        alert_message: "User doesn't exist.",
      };
    }

    case "REGISTER_USER_SUCCESS": {
      return {
        ...state,
        alert: true,
        alert_message: "You have succesfully registered.",
        user: action.payload,
      };
    }

    case "REGISTER_USER_FAIL": {
      return {
        ...state,
        alert: true,
        alert_message: "We weren't able to register you at the time.",
      };
    }

    case "LOGOUT_USER": {
      return {
        ...state,
        alert: true,
        alert_message: "You have been log out.",
      };
    }

    default:
      return state;
  }
};

export default reducer;

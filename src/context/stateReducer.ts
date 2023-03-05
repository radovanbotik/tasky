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

const reducer = (state, action) => {
  if (action.type === CREATE_NEW_TASK_INIT) {
    return {
      ...state,
      pending: true,
    };
  }
  if (action.type === CREATE_NEW_TASK_SUCCESS) {
    return {
      ...state,
      pending: false,
      all_tasks: [...state.all_tasks, action.payload],
      // active_tasks: [...state.active_tasks, action.payload],
      alert: true,
      alert_message: "New assignment has been arranged.",
    };
  }
  if (action.type === CREATE_NEW_TASK_FAIL) {
    return {
      ...state,
      pending: false,
      alert: true,
      alert_message:
        "Unable to create a new assignment. Please try again later.",
    };
  }

  if (action.type === FETCH_ALL_TASKS_INIT) {
    return {
      ...state,
      pending: true,
    };
  }

  if (action.type === FETCH_ALL_TASKS_SUCCESS) {
    return {
      ...state,
      all_tasks: action.payload,
      pending: false,
    };
  }

  if (action.type === FETCH_ALL_TASKS_FAIL) {
    return {
      ...state,
      pending: false,
      alert: true,
      alert_message: "Unable to access your data. Please try again later.",
    };
  }

  if (action.type === TOGGLE_STATUS) {
    const clickedTaskId = action.payload.id;
    const clickedTask = state.all_tasks.find(
      task => task.id === clickedTaskId
    ).active;

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
  if (action.type === DELETE_TASK) {
    const clickedTaskId = action.payload.id;

    return {
      ...state,
      alert: true,
      alert_message: "Assignment has been deleted.",
      all_tasks: state.all_tasks.filter(task => task.id !== clickedTaskId),
    };
  }

  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      alert: false,
      alert_message: "",
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      alert: true,
      alert_message: "You have succesfully logged in.",
      user: action.payload,
    };
  }

  if (action.type === LOGIN_USER_FAIL) {
    return {
      ...state,
      alert: true,
      alert_message: "User doesn't exist.",
    };
  }

  if ((action.type = REGISTER_USER_SUCCESS)) {
    return {
      ...state,
      alert: true,
      alert_message: "You have succesfully registered.",
      user: action.payload,
    };
  }

  if (action.type === REGISTER_USER_FAIL) {
    return {
      ...state,
      alert: true,
      alert_message: "We weren't able to register you at the time.",
    };
  }

  throw new Error("Invalid action Type");
};

export default reducer;

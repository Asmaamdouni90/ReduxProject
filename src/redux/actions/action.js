import {
  ADD_TASK,
  TOGGLE_IS_DONE,
  TOGGLE_DONE,
  EDIT_TASK,
} from "../constants/action-types";

export const addTask = (payload) => {
  console.log(payload, "action");
  return {
    type: ADD_TASK,
    payload,
  };
};

export const toggleIsDone = (payload) => {
  console.log(payload, "act");
  return {
    type: TOGGLE_IS_DONE,
    payload,
  };
};

export const toggleDone = (payload) => {
  console.log(payload, "act");
  return {
    type: TOGGLE_DONE,
    payload,
  };
};

export const editTask = (payload) => {
  console.log(payload, "act");
  return {
    type:EDIT_TASK,
    payload,
  };
};
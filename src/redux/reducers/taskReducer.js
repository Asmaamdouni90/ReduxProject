import { v4 as uuidv4 } from "uuid";
import {
  ADD_TASK,
  TOGGLE_IS_DONE,
  TOGGLE_DONE,
  EDIT_TASK,
} from "../constants/action-types";

const initialState = {
  listTodo: [
    { id: uuidv4(), description: " Have a quick tidy-up", isDone: false },
    {
      id: uuidv4(),
      description: "Read a chapter of a book i love",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Do something nice for someone else",
      isDone: false,
    },
    { id: uuidv4(), description: "Spend five minutes alone", isDone: false },
    {
      id: uuidv4(),
      description: "Take a shower before i sleep",
      isDone: false,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      console.log(payload, "reduc");
      return {
        listTodo: [
          ...state.listTodo,
          { id: uuidv4(), description: payload, isDone: false },
        ],
      };
    case TOGGLE_IS_DONE:
      console.log(payload, "red");
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case TOGGLE_DONE:
      console.log(payload, "red");
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: false } : task
        ),
      };

    case EDIT_TASK:
      console.log(payload, "red");

      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload.id
            ? { ...task, description: payload.edited }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/action";

const AddTask = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTask(newTask));
    setNewTask("");
  };
  return (
    <div className="add-task">
      <input
        type="text"
        name="task"
        placeholder="Enter the task you want to add"
        onChange={handleChange}
        value={newTask}
      />
      <Button variant="secondary" onClick={handleSubmit}>
        Add Task
      </Button>{" "}
    </div>
  );
};

export default AddTask;

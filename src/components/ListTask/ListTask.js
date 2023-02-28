import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ListTask.css";
import { useDispatch } from "react-redux";
import { toggleDone } from "../../redux/actions/action";

const ListTask = () => {
  const tasks = useSelector((state) => state.taskReducer.listTodo);
  console.log(tasks);
  const dispatch = useDispatch();
  const [showDone, setShowDone] = useState(false);
  const [showNotDone, setShowNotDone] = useState(false);

  const [list, setList] = useState([]);

  const handleShowDone = () => {
    setShowDone(true);
  };
  const handleShowNotDone = () => {
    setShowNotDone(true);
    setShowDone(false);
  };

  const handleReset = () => {
    setShowDone(false);
    setShowNotDone(false);
    dispatch(toggleDone());
  };
  useEffect(() => {
    setList(tasks);
    if (showDone === true) {
      setList(tasks.filter((task) => task.isDone === true));
    } else if (showNotDone === true) {
      setList(tasks.filter((task) => task.isDone === false));
    }
  }, [showDone, showNotDone, tasks]);
  return (
    <div>
      <div className="filterbtn">
        <Button variant="success" onClick={handleShowDone}>
          {" "}
          filter by done
        </Button>
        <Button variant="danger" onClick={handleShowNotDone}>
          {" "}
          filter by not done
        </Button>
        <Button variant="info" onClick={handleReset}>
          {" "}
          Reset
        </Button>
      </div>
      <div className="list-task">
        {list.map((task, key) => (
          <Task task={task} key={key} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;

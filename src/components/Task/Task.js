import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Task.css";
import { toggleIsDone, toggleDone, editTask } from "../../redux/actions/action";
import { useDispatch } from "react-redux";

const Task = ({ task, key }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleColse = () => setShow(false);
 // const handleShow = () => setShow(true);
  const [edited, setEdited] = useState("");

  const handleSave = () => {
    dispatch(editTask({ edited, id: task.id }));
    console.log(edited);
    handleColse();
  };

  const handleChange = (e) => {
    setEdited(e.target.value);
  };
  const handleIsDone = () => {
    dispatch(toggleIsDone(task.id));
  };
  const handleDone = () => {
    dispatch(toggleDone(task.id));
  };

  return (
    <div className="task">
      <h1> {task.description} </h1>
      {task.isDone ? (
        <Button variant="outline-danger" onClick={handleDone}>
          Undo
        </Button>
      ) : (
        <Button variant="outline-success" onClick={handleIsDone}>
          done
        </Button>
      )}
      <Button variant="outline-warning">Edit</Button>
      <Modal
        show={show}
        onHide={handleColse}
        className="modal-container"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="task"
            placeholder="Edit task"
            defaultValue={task.description}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleColse}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;

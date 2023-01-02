import React, { useState, useEffect } from "react";
import Task from "../../models/task.model";
import PropTypes from "prop-types";
import "./taskComponent.scss";

const TaskComponent = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  useEffect(() => {
    console.log("the task has been modified");
    return () => {
      console.log(`the task ${task.name} is going to unmount`);
    };
  }, [task]);

  function handleCompleted() {
    setCompleted(!completed);
  }

  function badgeTask(level) {
    switch (level) {
      case "blocking":
        return <span class="badge text-bg-danger">Blocking</span>;
      case "normal":
        return <span class="badge text-bg-primary">Normal</span>;
      case "urgente":
        return <span class="badge text-bg-warning">Urgente</span>;
      default:
        break;
    }
  }

  return (
    <tr className="align-middle text-center ">
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>{badgeTask(task.level)}</td>
      <td className="text-center fs-3">
        {completed ? (
          <i
            onClick={handleCompleted}
            style={{ color: "#7abb7a" }}
            className="bi bi-toggle-on"
          ></i>
        ) : (
          <i
            onClick={handleCompleted}
            className="bi bi-toggle-off"
            style={{ color: "#a18d8d" }}
          ></i>
        )}
        <i
          onClick={() => {
            alert("item deleted");
          }}
          className="ms-2 text-danger bi bi-trash3-fill"
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

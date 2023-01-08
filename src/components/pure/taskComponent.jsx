import React, { useEffect } from "react";
import Task from "../../models/task.model";
import PropTypes from "prop-types";
import "./taskComponent.scss";

const TaskComponent = ({ task, addTask, deleteTask, toggleCompleted }) => {
  useEffect(() => {
    console.log("the task has been modified");
    return () => {
      console.log(`the task is going to unmount`);
    };
  }, []);

  function badgeTask(level) {
    switch (level) {
      case "blocking":
        return <span className="badge text-bg-danger">Blocking</span>;
      case "normal":
        return <span className="badge text-bg-primary">Normal</span>;
      case "urgente":
        return <span className="badge text-bg-warning">Urgente</span>;
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
        {task.completed ? (
          <i
            onClick={() => {
              toggleCompleted(task);
            }}
            style={{ color: "#7abb7a" }}
            className="bi bi-toggle-on"
          ></i>
        ) : (
          <i
            onClick={() => {
              toggleCompleted(task);
            }}
            className="bi bi-toggle-off"
            style={{ color: "#a18d8d" }}
          ></i>
        )}
        <i
          onClick={() => {
            deleteTask(task);
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

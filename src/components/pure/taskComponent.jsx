import React, { useState, useEffect } from "react";
import Task from "../../models/task.model";
import PropTypes from "prop-types";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("the task has been modified");
    return () => {
      console.log(`the task ${task.name} is going to unmount`);
    };
  }, [task]);

  return (
    <>
      <h2>Name: {task.name}</h2>
      <h3>Description: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>this task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
    </>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

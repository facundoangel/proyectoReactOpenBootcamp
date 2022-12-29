import React, { useState, useEffect } from "react";
import Task from "../../models/task.model";
import Level from "../../models/levels.enum";
import TaskComponent from "../pure/taskComponent";

const TaskList = () => {
  const defaultTask = new Task(
    "LAVARME EL CULO",
    "esta es una descripcion de prueba",
    false,
    Level.URGENTE
  );

  const [task, setTask] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("the task has been modified");
    setLoading(false);
    return () => {
      console.log("the task has been unmounted");
    };
  }, [task]);

  const changeCompleted = () => {
    console.log("Ha cambiado el estado de la tarea");
  };

  return (
    <>
      <p>Your tasks:</p>
      <TaskComponent task={defaultTask}></TaskComponent>
    </>
  );
};

export default TaskList;

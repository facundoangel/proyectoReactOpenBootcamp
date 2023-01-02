import React, { useState, useEffect } from "react";
import Task from "../../models/task.model";
import Level from "../../models/levels.enum";
import TaskComponent from "../pure/taskComponent";

const TaskList = () => {
  const defaultTask = new Task(
    "LAVARME EL CULO",
    "esta es una descripcion de prueba",
    false,
    Level.BLOCKING
  );
  const defaultTask2 = new Task(
    "HACER UN BIZCOCHUELO",
    "descripcion de hacer el bizcochuelo",
    false,
    Level.NORMAL
  );
  const defaultTask3 = new Task(
    "TAREA DE PRUEBA",
    "esta es una descripcion de prueba",
    false,
    Level.URGENTE
  );
  const defaultTask4 = new Task(
    "hacer una app en react",
    "esta es una descripcion de prueba",
    true,
    Level.URGENTE
  );

  let tasks = [defaultTask, defaultTask2, defaultTask3, defaultTask4];

  const [task, setTask] = useState(tasks);
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
      {task.map((taskElement, index) => {
        return <TaskComponent key={index} task={taskElement}></TaskComponent>;
      })}
    </>
  );
};

export default TaskList;

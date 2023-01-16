import React, { useState, useEffect } from "react";
import Task from "../../models/task.model";
import Level from "../../models/levels.enum";
import TaskComponent from "../pure/taskComponent";
import AddFormTaskReactive from "../form/addFormTaskReactive";

const TaskList = () => {
  const [task, setTask] = useState(null);

  const handleAddTask = (taskParam) => {
    setTask([...task, taskParam]);
  };

  const handleDeleteTask = (taskParam) => {
    let taskTemp = task.filter((elem) => {
      return elem !== taskParam;
    });
    setTask(taskTemp);
  };

  const handleCompletedTask = (taskParam) => {
    let taskTemp = task.map((elem) => {
      if (elem === taskParam) {
        elem.completed = !elem.completed;
      }

      return elem;
    });

    setTask(taskTemp);
  };

  useEffect(() => {
    console.log("the task has been mounted");
    const defaultTask = new Task(
      "BHJKBKJBJK",
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
    setTimeout(() => {
      setTask(tasks);
    }, 2000);

    return () => {
      console.log("the task has been unmounted");
    };
  }, []);

  if (task === null)
    return <p className="text-center w-100 py-5">Cargando tareas...</p>;

  return (
    <>
      {task.length > 0 ? (
        <table className="table table-dark table-striped table-hover">
          <thead className="text-center">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Level</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {task.map((taskElement, index) => {
              return (
                <TaskComponent
                  key={index}
                  task={taskElement}
                  addTask={handleAddTask}
                  deleteTask={handleDeleteTask}
                  toggleCompleted={handleCompletedTask}
                ></TaskComponent>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="h3 text-center w-100 py-5">There are not tasks</p>
      )}
      {/* <AddFormTask addTask={handleAddTask} amountTask={task.length} /> */}
      <AddFormTaskReactive addTask={handleAddTask} amountTask={task.length} />
    </>
  );
};

export default TaskList;

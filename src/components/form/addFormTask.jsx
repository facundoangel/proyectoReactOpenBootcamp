import React, { useRef } from "react";
import LEVEL from "../../models/levels.enum";
import Task from "../../models/task.model";

const AddFormTask = ({ addTask, amountTask }) => {
  const name = useRef("");
  const description = useRef("");
  const level = useRef(LEVEL.NORMAL);

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = new Task(
      name.current.value,
      description.current.value,
      false,
      level.current.value
    );

    addTask(newTask);

    e.target.reset();
  };

  return (
    <form onSubmit={handleAddTask}>
      <h2 className="display-6 mb-2 mt-4">Add a Task</h2>
      <div className="row">
        <div className="col">
          <div className="form-group my-1">
            <input
              ref={name}
              type="text"
              id="name"
              name="name"
              placeholder="Insert name..."
              className="form-control"
            ></input>
          </div>
          <div className="form-group my-1">
            <input
              ref={description}
              type="text"
              id="description"
              name="description"
              placeholder="Insert description..."
              className="form-control"
            ></input>
          </div>
        </div>
        <div className="col">
          <div className="form-group my-1 w-100">
            <label className="my-1" htmlFor="level">
              Ingrese Nivel de Prioridad:
            </label>
            <select
              name="level"
              id="level"
              className="form-control"
              defaultValue="normal"
              ref={level}
            >
              <option value="blocking">Blocking</option>
              <option value="normal">Normal</option>
              <option value="urgente">Urgente</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" form-group text-center">
        <button className="btn btn-success m-2" type="submit">
          {amountTask > 0 ? "Add Task" : "Create First Task"}
        </button>
      </div>
    </form>
  );
};

export default AddFormTask;

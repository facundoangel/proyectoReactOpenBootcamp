import TaskList from "../../components/container/task_list";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

const HomePage = () => {
  return (
    <div className=" card my-5">
      <div className=" card-header bg-dark">
        <h2 className="h4 text-center mt-2 text-light">TASK'S LIST</h2>
      </div>
      <div className="card-body p-1 bg-secondary list-tasks">
        <TaskList></TaskList>
      </div>
    </div>
  );
};

export default HomePage;

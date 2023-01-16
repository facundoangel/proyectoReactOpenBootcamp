import TaskList from "../../components/container/task_list";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [credentials, setCredentials] = useState(null);
  const [loading, setloading] = useState(true);
  const history = useHistory();

  const recoveryCredential = async () => {
    let cred = await sessionStorage.getItem("credentials");
    if (cred == null) {
      history.push("/login");
    }
    console.log(cred);
    setloading(false);
    setCredentials(cred);
  };

  useEffect(() => {
    recoveryCredential();
  });

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

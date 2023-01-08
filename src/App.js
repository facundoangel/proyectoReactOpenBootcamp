import TaskList from "./components/container/task_list";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";

function App() {
  return (
    <>
      <div
        className="bg-page d-flex flex-column align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="head-page container-fluid  text-center py-3 sticky-top">
          <h1 className="text-light">TAREAS APP</h1>
        </div>
        <div className=" card mt-5">
          <div className=" card-header bg-dark">
            <h2 className="h4 text-center mt-2 text-light">TASK'S LIST</h2>
          </div>
          <div className="card-body p-1 bg-secondary list-tasks">
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

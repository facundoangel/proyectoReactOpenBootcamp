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
        <div className="p-5 container ">
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
              <TaskList></TaskList>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

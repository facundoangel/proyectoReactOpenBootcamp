import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import HomePage from "./pages/home/homePage";
import NotFound from "./pages/404/notFoundPage";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";

function App() {
  let credentials = true;

  return (
    <div
      className="bg-page d-flex flex-column align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="head-page container-fluid  py-3 sticky-top">
        <h1 className="text-light">TAREAS APP</h1>
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            {credentials ? <HomePage /> : <LoginPage />}
          </Route>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

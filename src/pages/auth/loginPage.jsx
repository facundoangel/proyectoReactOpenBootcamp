import React from "react";
import LoginForm from "../../components/form/loginForm";

const LoginPage = () => {
  return (
    <div
      className="jumbotron bg-dark text-light py-3 px-5 my-5"
      style={{ minWidth: "70vw" }}
    >
      <div className="container-md">
        <h1 className="display-4 mb-4 text-center">Login Form</h1>
        <hr className="mb-5 mt-3 "></hr>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

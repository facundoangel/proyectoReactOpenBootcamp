import React from "react";
import FormRegister from "../../components/form/formRegister";

const RegisterPage = () => {
  return (
    <div
      className="jumbotron bg-dark text-light py-3 px-5 my-5"
      style={{ minWidth: "70vw" }}
    >
      <div className="container-md">
        <h1 className="display-4 mb-4 text-center">Register Form</h1>
        <hr className="mb-5 mt-3 "></hr>
        <FormRegister></FormRegister>
      </div>
    </div>
  );
};

export default RegisterPage;

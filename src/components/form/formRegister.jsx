import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ROLES from "../../models/roles.enum";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Username is Too Short")
    .max(12, "Email is too long")
    .required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .min(5, "Email is too short")
    .max(9, "Email is too long")
    .email("Email is not valid"),
  password: Yup.string()
    .required("Password is required")
    .matches("/w[.-@$_]{4,8}/", "Password have a format invalid"),
});

const valuesInitialsForm = {
  username: "",
  email: "",
  password: "",
  role: ROLES.USER,
};

const FormRegister = () => {
  return (
    <Formik
      initialValues={valuesInitialsForm}
      validationSchema={validationSchema}
      onSubmit={async (e) => {
        await new Promise((r) => {
          setTimeout(r, 2000);
        });
        alert(JSON.stringify(e, null, 2));
      }}
    >
      <Form className="d-flex flex-column align-items-center">
        <ErrorMessage name="username">
          {(msg) => (
            <div class="alert alert-danger m-1 w-50" role="alert">
              {msg}
            </div>
          )}
        </ErrorMessage>

        <Field
          className="form-control form-control-lg w-50 mb-2"
          name="username"
          id="username"
          placeholder="Insert Username..."
          type="text"
        ></Field>
        <ErrorMessage name="email">
          {(msg) => (
            <div class="alert alert-danger m-1 w-50" role="alert">
              {msg}
            </div>
          )}
        </ErrorMessage>
        <Field
          className="form-control form-control-lg w-50 mb-2"
          name="email"
          id="email"
          placeholder="Insert email..."
          type="text"
        ></Field>
        <ErrorMessage name="password">
          {(msg) => (
            <div class="alert alert-danger m-1 w-50" role="alert">
              {msg}
            </div>
          )}
        </ErrorMessage>
        <Field
          className="form-control form-control-lg w-50 mb-2"
          name="password"
          id="password"
          placeholder="Insert password..."
          type="password"
        ></Field>
        <ErrorMessage name="role">
          {(msg) => (
            <div class="alert alert-danger m-1" role="alert">
              {msg}
            </div>
          )}
        </ErrorMessage>
        <Field name="role">
          {({ field }) => {
            return (
              <div>
                <select
                  {...field}
                  id="role"
                  className="custom-select form-control-lg text-dark mb-2"
                  name="role"
                >
                  <option className=" fs-6" value="user">
                    user
                  </option>
                  <option className=" fs-6" value="admin">
                    admin
                  </option>
                </select>
              </div>
            );
          }}
        </Field>
        <button className="btn btn-lg btn-success" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormRegister;

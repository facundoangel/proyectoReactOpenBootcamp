import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import * as Yup from "yup";

const LoginForm = () => {
  const history = useHistory();

  const initialValuesObj = {
    user: "",
    password: "",
  };

  const validationSchemaObj = Yup.object().shape({
    user: Yup.string()
      .min(8, "Username is Too Short")
      .max(12, "Email is too long")
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
    // .matches("/w[.-@$_]{4,8}/", "Password have a format invalid"),
  });

  const goBackToHome = () => {
    history.push("/");
  };

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <Formik
      initialValues={initialValuesObj}
      validationSchema={validationSchemaObj}
      onSubmit={async (e) => {
        await sessionStorage.setItem("credentials", e);
        alert(JSON.stringify(e, null, 2));
        setTimeout(goBackToHome, 500);
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="d-flex flex-column align-items-center">
            <label htmlFor="user" className="text-light display-6">
              User:
            </label>
            <Field
              type="text"
              name="user"
              id="user"
              className=" w-50 mt-1 mb-1"
            ></Field>
            {errors.user && touched.user ? <p>{errors.user}</p> : null}
            <label htmlFor="password " className="text-light display-6">
              Password:
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              className=" w-50 mt-1 mb-3"
            ></Field>
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
            <button type="submit" className="btn btn-primary w-50 mt-3 mb-3">
              submit
            </button>
            <Button onClick={goToRegister}>sing up</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

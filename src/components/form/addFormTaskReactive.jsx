import LEVEL from "../../models/levels.enum";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Task from "../../models/task.model";

const initialValues = {
  name: "",
  description: "",
  level: LEVEL.NORMAL,
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(10, "Name too Long"),
  description: Yup.string()
    .required("description is required")
    .matches("^[a-zA-Z0-9]+$", "Description must be alphanumeric"),
});

const AddFormTaskReactive = ({ addTask, amountTask }) => {
  const handleAddTask = (e) => {
    const newTask = new Task(e.name, e.description, e.level);
    addTask(newTask);
  };

  return (
    <>
      <h2 className="display-6 mb-2 mt-4 px-3">Add a Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => {
          handleAddTask(e);
        }}
      >
        <Form className="text-center px-3 pb-2 ">
          <div className="row">
            <div className="col-6">
              <ErrorMessage
                name="name"
                component="div"
                className="alert alert-danger py-1 my-2"
              />
              <Field
                className="form-control form-control-lg  mb-1"
                name="name"
                placeholder="Insert task's name..."
              ></Field>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-danger  py-1 my-2"
              />
              <Field
                className="form-control form-control-lg  mb-1"
                name="description"
                placeholder="Insert task's description..."
              ></Field>
            </div>
            <div className="col-6">
              <Field name="level">
                {({ field, form, meta }) => {
                  return (
                    <select
                      className=" form-control-lg mb-3 w-75"
                      name="level"
                      id="level"
                      defaultValue="normal"
                      {...field}
                    >
                      <option value="blocking">Blocking</option>
                      <option value="normal">Normal</option>
                      <option value="urgente">Urgente</option>
                    </select>
                  );
                }}
              </Field>
            </div>
          </div>
          <button className="btn btn-success btn-lg mt-3" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default AddFormTaskReactive;

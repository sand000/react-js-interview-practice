import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  mobile: Yup.string().matches(
    /^[0-9]{10}$/,
    "Mobile number must be 10 digits"
  ),
  dob: Yup.date().required("Role is required"),
  role: Yup.string().required("Role is required"),
});

const roles = [
  { value: "", label: "Select a role" },
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
];

function FormikForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        mobile: "",
        dob: "",
        role: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <label>Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" />

          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label>Mobile</label>
          <Field name="mobile" type="text" />
          <ErrorMessage name="mobile" />

          <label>Date of Birth</label>
          <Field name="dob" type="date" />
          <ErrorMessage name="dob" />

          <label>Role</label>
          <Field as="select" name="role">
            {roles.map((e) => (
              <option key={e.value} value={e.value}>
                {e.value}
              </option>
            ))}
          </Field>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

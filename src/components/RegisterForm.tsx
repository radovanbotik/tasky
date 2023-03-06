import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import SubmitButton from "./SubmitButton";
import RegisterInputField from "./RegisterInputField";
import { ApplicationContext } from "../context/ApplicationContext";

YupPassword(Yup); // extend yup

const RegisterForm = () => {
  const { loginUser, registerUser } = useContext(ApplicationContext);
  const [member, setMember] = useState(false);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email().trim().required("This field is required."),
        password: Yup.string().password().required("This field is required."),
      }),
      onSubmit: (values, { resetForm }) => {
        resetForm();
        if (!member) {
          loginUser(values);
          return;
        }
        registerUser(values);
      },
    });
  return (
    <form className="mt-8  space-y-6" onSubmit={handleSubmit}>
      <h2 className="mb-2 text-center text-2xl font-semibold">
        {member ? "Register" : "Login"}
      </h2>
      <div className="space-y-2 rounded-md shadow-sm">
        <RegisterInputField
          name="email"
          type="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
          touched={touched.email}
          errors={errors.email}
        >
          Your Email
        </RegisterInputField>
        <RegisterInputField
          name="password"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.password}
          touched={touched.password}
          errors={errors.password}
        >
          Your Password
        </RegisterInputField>
      </div>
      <SubmitButton>{member ? "Register" : "Login"}</SubmitButton>
      <div className="flex items-center gap-1 text-sm">
        <p className="ml-2 block text-sm text-gray-900">
          {member ? "Are you member already?" : "I don't have an account yet."}
        </p>
        <button
          className="font-medium text-indigo-600 hover:text-indigo-500"
          onClick={() => setMember(prev => !prev)}
          type="button"
        >
          {member ? "Log in." : "Register"}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;

import React, { useContext } from "react";
import { useAppState } from "../context/AppState";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputField } from "../components";
import { ApplicationContext } from "../context/ApplicationContext";

const Form = () => {
  const { createNewTask } = useContext(ApplicationContext);

  const { values, touched, handleSubmit, errors, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        desc: "",
        date: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .trim()
          .min(5, "Assignment name must be at least 5 characters long.")
          .max(20, "Please enter less than 20 characters.")
          .required("This field is required."),
        desc: Yup.string()
          .trim()
          .min(5, "Assignment name must be at least 5 characters long.")
          .max(50, "AsPlease enter less than 50 characters.")
          .required("This field is required."),
        date: Yup.date()
          .min(
            new Date().toLocaleDateString(),
            `Assignment must be later than ${new Date().toLocaleDateString(
              "en-UK",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}`
          )
          .required(),
      }),
      onSubmit: (values, { resetForm }) => {
        createNewTask(values);
        resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full  px-8">
      <InputField
        name="name"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.name}
        touched={touched.name}
        errors={errors.name}
      >
        Assignment
      </InputField>

      <InputField
        name="desc"
        type="text"
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.desc}
        touched={touched.desc}
        errors={errors.desc}
      >
        Goal
      </InputField>

      <InputField
        name="date"
        type="date"
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.date}
        touched={touched.date}
        errors={errors.date}
      >
        Due to:
      </InputField>

      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
        submit
      </button>
    </form>
  );
};

export default Form;

import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubmitButton from "./SubmitButton";
import FormField from "./FormField";
import { ApplicationContext } from "../../context/ApplicationContext";

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
    <div className="card w-full max-w-xl flex-shrink-0 bg-base-100 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <FormField
          name="name"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.name}
          touched={touched.name}
          errors={errors.name}
        >
          Assignment
        </FormField>
        <FormField
          name="desc"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.desc}
          touched={touched.desc}
          errors={errors.desc}
        >
          Goal
        </FormField>
        <FormField
          name="date"
          type="date"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.date}
          touched={touched.date}
          errors={errors.date}
        >
          Due:
        </FormField>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default Form;

import { useFormik } from "formik";
import React from "react";
import * as Yup from "Yup";

const Formikform = () => {
  const uservalidationschema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(10)
      .required("username must be at least 10 characters"),

    email: Yup
      .string()
      .email("enter a vaild email address")
      .required("enter your email address"),
    password: Yup
      .string()
      .min(6)
      .max(16)
      .required("password must be at least 16 characters"),
  });

  let formData = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationshcema:uservalidationschema,

    onSubmit:(value) =>{
      
      console.log(value);
    },

    validationonChange: true,
    validationonBlur: true,
  });

  return (
    <div className="main2">
      <form onSubmit={formData.onSubmit}>
      <p className="hexagon"><span>yup form</span></p>
        <input
          type="text"
          placeholder="Your Name"
          name="name" 
          value={formData.values.username}
          onChange={formData.handleChange}
        />
        <input
          type="email"
          placeholder="Emil@"
          name="email" 
          value={formData.values.email}
          onChange={formData.handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password" 
          value={formData.values.password}
          onChange={formData.handleChange}
        />
        <input type="submit" placeholder="click" />
      </form>
    </div>
  );
};

export default Formikform;

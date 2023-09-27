import React from "react";
import "./App.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";


const App = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,

    // validdationSchema is a property of Yup
    validationSchema: signUpSchema,
    onSubmit: (values,action) => {
      
      console.log(" ~ file: App.js ~ line 11 ~ App.js ~ values", values);
      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="modal-conatiner" style={{ display: "flex" }}>
            <div className="modal-left">
              <h1 className="modal-title">Welcome</h1>
              <p className="modal-desc">To Khushboo Website for Login Page</p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="name" className="">
                    Name
                  </label>
                  <input
                    type="name"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="form-error">{errors.name}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>

                <div className="input-block">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </div>

                <div className="input-block">
                  <label htmlFor="confirm_password" className="">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error">{errors.confirm_password}</p>
                  ) : null}
                </div>
                <div className="modal-buttons">
                  <a href="#">Want to register using Gmail?</a>
                  <button className="input-button" type="submit">
                    Registration
                  </button>
                </div>
              </form>

              <p className="sign-up">
                Already have an account? <a href="#"> Sign In now</a>
              </p>
            </div>
            <div className="modal-right">
              <img
                style={{ width: "700px" }}
                src="https://infiniteroom.id/wp-content/uploads/2021/06/laptop-showing-green-screen-desktop-PV2VBNS.jpg"
                alt="jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

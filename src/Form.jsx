import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputData = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let usernameRegex = /^[a-zA-Z0-9._-]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let { username, phone, email, password } = userData;

    if (!passwordRegex.test(password)) {
      toast.error("Password is invalid (at least 8 characters with uppercase, lowercase, and digit)", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;

    }

   else{
    toast.success("Login successful", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });}
    

    console.log(userData);
  };

  return (
    <div className="main">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <p className="hexagon"><span>Form</span></p>
        <input
          type="text"
          value={userData.username}
          name="username"
          placeholder="Enter username"
          onChange={handleInputData}
          required
        />
        <input
          className="d1"
          type="text"
          value={userData.phone}
          name="phone"
          placeholder="Phone number"
          onChange={handleInputData}
          required
        />
        <input
          className="d2"
          type="text"
          value={userData.email}
          name="email"
          placeholder="Email"
          onChange={handleInputData}
          required
        />
        <input
          className="d3"
          type="password"
          value={userData.password}
          name="password"
          placeholder="Password"
          onChange={handleInputData}
          required
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

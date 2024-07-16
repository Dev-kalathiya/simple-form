
import React, { useState } from "react";

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
    
    console.log(userData);
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userData.username}
          name="username"
          placeholder="enter-name"
          onChange={handleInputData}
        />
        <input
          className="d1"
          type="text"
          value={userData.phone}
          name="phone"
          placeholder="phone-number"
          onChange={handleInputData}
        />
        <input
          className="d2"
          type="text"
          value={userData.email}
          name="email"
          placeholder="email"
          onChange={handleInputData}
        />
        <input
          className="d3"
          type="text"
          value={userData.password}
          name="password"
          placeholder="password"
          onChange={handleInputData}
        />
        <input className="button" type="submit" onClick={handleInputData} />
      </form>
    </div>
  );
};

export default Form;

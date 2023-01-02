import React from "react";
import { useState } from "react";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {};

  return (
    <div
      style={{
        width: 400,
        margin: "auto",
        marginTop: 40,
      }}
    >
      <h2>Login</h2>
      <form action="/home" method="get">
        {/* <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div> */}
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="main-button apply-btn"
            type="submit"
            style={{ width: "100%", margin: "10px 0px" }}
            onClick={handleClick}
          >
            Login
          </button>
        </div>
        {/* <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div> */}
      </form>
    </div>
  );
};

export default Login;

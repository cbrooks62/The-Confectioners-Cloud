// Purpose: Handles login functionality for the application.

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { loginUser } from "../../Services/UserProfileServices.jsx";
import "./Login.css";

export default function Login  ({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();
  
  //useEffect to add LoginPage.png to page
  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/LoginPage.png)`;
    document.body.style.backgroundSize = "100vw 100vh";
  }, []);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    loginUser(email).then((r) => {
      console.log(r)
      if (r) {
        localStorage.setItem("cloud_user", JSON.stringify(r))
        navigate("/");
        setIsLoggedIn(true);
      } else {
        alert("Invalid email");
      }
    });
  };

  return (
    <div className="login-screen">
    <Form onSubmit={handleLogin} className="login-card">
      <h2>Login</h2>
      <fieldset>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <button type="submit">Login</button>
        </FormGroup>
        <em>
          Not registered? <Link to="/register">Register</Link>
        </em>
      </fieldset>
    </Form>
  </div>
  );
};

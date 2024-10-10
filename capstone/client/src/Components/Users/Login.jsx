// Purpose: Handles login functionality for the application.

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { loginUser } from "../../Services/UserProfileServices.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  //useEffect to add LoginPage.png to page
  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/LoginPage.png)`;
    document.body.style.backgroundSize = "100vw 100vh";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const foundUsers = await loginUser(email);
    console.log(foundUsers.id)
    if (foundUsers) {
      const userProfile = foundUsers;
      localStorage.setItem(
        "cloud_user",
        JSON.stringify({
          id: foundUsers.id
        })
      );
      navigate(`/`);
    } else {
      window.alert("Invalid login");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
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
  );
};

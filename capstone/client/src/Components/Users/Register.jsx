import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
} from "../../Services/UserProfileServices.jsx";

export default function Register(props) {
  const [user, setUser] = useState({
    id: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: ",",
  });
  const navigate = useNavigate();

  const registerNewUser = () => {
    const newUser = {
      ...user,
    };

    registerUser(newUser).then((registeredUser) => {
      if (registeredUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "cloud_user",
          JSON.stringify({
            id: registeredUser.id,
          })
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    loginUser(user.email).then((response) => {
      if (response.length > 0) {
        window.alert("Account with that email address already exists");
      } else {
        registerNewUser();
      }
    });
  };

  const updateUser = (e) => {
    const copy = { ...user };
    copy[e.target.id] = e.target.value;
    setUser(copy);
  };

  //useEffect to add background to register page
  useEffect(() => {
    document.body.style.backgroundImage = `url(src/assets/Register.png)`;
    document.body.style.backgroundSize = "100vw 100vh";
  }, []);

  return (
    <Form onSubmit={handleRegister}>
      
      <fieldset>
      <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              onChange={updateUser}
              type="text"
              id="userName"
              className="auth-form-input"
              placeholder="Username"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="auth-form-input"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              onChange={updateUser}
              type="firstName"
              id="firstName"
              className="auth-form-input"
              placeholder="First Name"
              required
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              onChange={updateUser}
              type="lastName"
              id="lastName"
              className="auth-form-input"
              placeholder="Last Name"
              required
            />
          </div>
        </fieldset>
        <FormGroup>
          <Label htmlFor="imageUrl">Profile Image</Label>
          <Input
            id="imageUrl"
            type="file"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setImageUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup> */}
        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}

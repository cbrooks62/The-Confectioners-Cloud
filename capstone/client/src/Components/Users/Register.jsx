import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserProfileServices.jsx";
import "./Register.css";

export default function Register ({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState();

  const registerClick = (e) => {
    e.preventDefault();
   {
      const userProfile = {
        firstName,
        lastName,
        userName,
        imageUrl,
        email,
      };
      registerUser(userProfile).then(() => {
        setIsLoggedIn(true);
        navigate("/");
      });
    }
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
    <Form onSubmit={registerClick} className="register-card">
      <h2>Register</h2>
      <fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              id="userName"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              id="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              id="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <input
              id="lastName"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
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

        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}
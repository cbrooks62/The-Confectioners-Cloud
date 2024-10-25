import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
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
        navigate("/Login");
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
            <Input
              id="userName"
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <Input
              id="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </fieldset>
        <fieldset className="auth-fieldset">
          <div className="input-login">
            <Input
              id="lastName"
              type="text"
              placeholder="Last  Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </fieldset>
        <FormGroup>
          <Input
          type="text"
          placeholder="URL for Profile Image"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        </FormGroup>
        <FormGroup>
        <Link to={"/Login"}><Button>Register</Button></Link>
        <Link to={"/Login"}><Button>Back to Login</Button></Link>    
        </FormGroup>
      </fieldset>
    </Form>
  );
}

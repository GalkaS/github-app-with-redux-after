import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChangeUsername, handleChangeFirstName, handleLogin, username, firstName }) => (
  <div className="login">
    <h2>please enter your github username to login</h2>
    <TextField
      name="username"
      handleChange={handleChangeUsername}
      id="github-username"
      label="Username"
      value={username}
    />
    <TextField
      name="firstName"
      handleChange={handleChangeFirstName}
      id="user-firstName"
      label="Your First Name"
      value={firstName}
    />
    <Button value="Login" handleClick={handleLogin} />
  </div>
);

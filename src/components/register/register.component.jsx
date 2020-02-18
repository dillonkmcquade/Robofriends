import React from "react";
import { Button } from "@material-ui/core";
import "./register.styles.scss";

const RegisterForm = () => {
  return (
    <div className='register-container'>
      <form className="register-form">
        <input type="text" placeholder="Username" className="custom-input" />
        <input
          type="text"
          placeholder="E-mail address"
          className="custom-input"
        />
        <input type="text" placeholder="Password" className="custom-input" />
        <input
          type="text"
          placeholder="Confirm Password"
          className="custom-input"
        />
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

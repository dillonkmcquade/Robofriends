import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "./register.styles.scss";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
      display: "flex"
    },
    "& label.Mui-focused": {
      color: "gray"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  },
  input: {
    color: "white"
  }
}));

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <div className="register-form">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="E-mail Address"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

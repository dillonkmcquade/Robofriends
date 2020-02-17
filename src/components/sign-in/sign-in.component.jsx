import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "./sign-in.styles.scss";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    },
    '& label.Mui-focused': {
        color: 'gray',
      },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: '2px solid white'
      },
      '&.Mui-focused fieldset': {
          borderColor: 'white'
    }
      
    }
  },
  input: {
      color: 'white'
  }
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className="sign-in-container">
      <span className="title">RoboFriends</span>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;

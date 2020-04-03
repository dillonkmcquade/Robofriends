import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { signInWithGoogle } from "../../firebase/firebase";
import {auth} from '../../firebase/firebase';
import "./sign-in.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2)
    },
  },
}));

const SignIn = ({ setCurrentUser }) => {
	const [credentials, setCredentials] = useState({
		email: "",
    password: ""
    
  });
  const {email, password} = credentials;
  
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log("error logging in");
    }
  };


	const handleSignIn = () => {
		signInWithGoogle()
			.then(result => {
				const token = result.credential.accessToken;
				console.log(token);

				const user = result.user;
				console.log(user);
				setCurrentUser(user);
			})
			.catch(err => console.log(err.code));
	};

	const classes = useStyles();
	return (
		<div className="sign-in-container">
			<hgroup className='sign-in-title'>
				<h1>OSI</h1>
				<h6>Open Source Ideas</h6>
			</hgroup>
			<form className={classes.root} onSubmit={handleSubmit} >
				<input
          type="text"
          className="custom-input"
          placeholder='Email'
          required
					onChange={event => setCredentials({ ...credentials, email: event.target.value })}
				/>
				<input
          type="text"
          className="custom-input"
          placeholder='password'
          required
					onChange={event => setCredentials({ ...credentials, password: event.target.value })}
				/>
				<Button type="submit" variant="contained" color="primary">
					Log In
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => handleSignIn()}
				>
					Sign in with Google
				</Button>
			</form>
		</div>
	);
};

export default SignIn;

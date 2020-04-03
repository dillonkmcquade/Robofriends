import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { signInWithGoogle } from "../../firebase/firebase";
import {auth} from '../../firebase/firebase';
import "./sign-in.styles.scss";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: 200
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
			<hgroup>
				<h1>OSI</h1>
				<h6>Open Source Ideas</h6>
			</hgroup>
			<form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
				<TextField
					id="outlined-basic"
					label="E-mail"
					variant="outlined"
					onChange={event => setCredentials({ ...credentials, email: event.target.value })}
				/>
				<TextField
					id="outlined-basic"
					label="Password"
					variant="outlined"
					onChange={event => setCredentials({ ...credentials, password: event.target.value })}
				/>
				<Button type="submit" variant="contained" color="primary">
					Log In
				</Button>
				<Button
					variant="contained"
					color="Primary"
					onClick={() => handleSignIn()}
				>
					Sign in with Google
				</Button>
			</form>
		</div>
	);
};

export default SignIn;

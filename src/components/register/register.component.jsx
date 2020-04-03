import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { createUserProfileDocument, auth } from "../../firebase/firebase";
import "./register.styles.scss";

const RegisterForm = () => {
	const [credentials, setCredentials] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: ""
  });
  
  const { password, confirmPassword, userName, email } = credentials;
  
	const handleRegister = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { userName });

			setCredentials({
				userName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="register-container">
			<form className="register-form" onSubmit={handleRegister}>
				<input
					type="text"
					placeholder="Username"
					onChange={event => setCredentials({ ...credentials, username: event.target.value })}
					className="custom-input"
				/>
				<input
					type="text"
					placeholder="E-mail address"
					className="custom-input"
					onChange={event => setCredentials({ ...credentials, email: event.target.value })}
				/>
				<input
					type="password"
					placeholder="Password"
					className="custom-input"
					onChange={event => setCredentials({ ...credentials, password: event.target.value })}
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					className="custom-input"
					onChange={event =>
						setCredentials({ ...credentials, confirmPassword: event.target.value })
					}
				/>
				<Button type="submit" variant="contained" color="primary">
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default RegisterForm;

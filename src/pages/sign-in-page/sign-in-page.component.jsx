import React from "react";
import SignIn from '../../components/sign-in/sign-in.component';
import RegisterForm from '../../components/register/register.component';
import './sign-in-page.styles.scss';



const SignInPage = () => {
  return (
    <div className='sign-in-page'>
      <SignIn />
      <RegisterForm />
    </div>
  )
};


export default SignInPage;

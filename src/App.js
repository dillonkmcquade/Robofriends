import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import {auth, createUserProfileDocument} from './firebase/firebase';

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [setCurrentUser]);
	return (
		<div>
			{!currentUser ? (
				<SignInPage setCurrentUser={setCurrentUser} />
			) : (
				<HomePage />
			)}
		</div>
	);
};

export default App;

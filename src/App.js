import React, { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import LazySpinner from "./components/lazySpinner/lazy-spinner.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInPage = lazy(() =>
	import("./pages/sign-in-page/sign-in-page.component")
);

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
			<Switch>
				<Suspense fallback={<LazySpinner />}>
					<Route
						exact
						path="/"
						render={() =>
							currentUser ? <Redirect to="/home" /> : <SignInPage />
						}
					/>
					<Route
						exact
						path="/home"
						render={() =>
							!currentUser ? (
								<Redirect to="/" />
							) : (
								<HomePage setCurrentUser={setCurrentUser} />
							)
						}
					/>
				</Suspense>
			</Switch>
		</div>
	);
};

export default App;

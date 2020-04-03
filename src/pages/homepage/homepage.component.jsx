import React, { useEffect, useState, Suspense, lazy } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import LazySpinner from "../../components/lazySpinner/lazy-spinner.component";
import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../firebase/firebase";
import "./homepage.styles.scss";

const Header = lazy(() => import("../../components/header/header.js"));
const Explore = lazy(() => import("../../components/explore/explore"));

const HomePage = ({ setCurrentUser, match }) => {
	console.log(match);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const collectionRef = firestore.collection("posts");

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				setPosts(collectionsMap);
				console.log(collectionsMap);
			})
			.catch(error => console.log(error.message));
	}, [setPosts]);

	return (
		<div className="homepage-container">
			<Switch>
				<Suspense fallback={<LazySpinner />}>
					<Header setCurrentUser={setCurrentUser} />
					<Route exact path={`${match.path}`}>
						<Explore posts={posts} />
					</Route>
					<Route path={`${match.path}/topics`}>
						<div>hello</div>
					</Route>
				</Suspense>
			</Switch>
		</div>
	);
};

export default withRouter(HomePage);

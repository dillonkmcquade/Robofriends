import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.js";
import Explore from "../../components/explore/explore";
import {
	firestore,
	convertCollectionsSnapshotToMap
} from "../../firebase/firebase";
import "./homepage.styles.scss";

const HomePage = () => {
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
			<Header />
			<Explore posts={posts} />
		</div>
	);
};

export default HomePage;

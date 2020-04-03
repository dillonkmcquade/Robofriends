import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyAAZlZzrYpzsWjUcFSCU4QhHGTsFkC1yog",
	authDomain: "open-source-ideas-ab9e2.firebaseapp.com",
	databaseURL: "https://open-source-ideas-ab9e2.firebaseio.com",
	projectId: "open-source-ideas-ab9e2",
	storageBucket: "open-source-ideas-ab9e2.appspot.com",
	messagingSenderId: "236321855435",
	appId: "1:236321855435:web:22ab66f1ed26449621084e",
	measurementId: "G-CX85Y6N7D0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { userName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				userName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, content, author, time } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			content,
			author,
			time
		};
	});
	return transformedCollection;
	//.reduce((accumulator,collection) => {
	//	accumulator[collection.title.toLowerCase()] = collection;
	//	return accumulator;
	//}, {});
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config = {
	apiKey: 'AIzaSyAYEi2LbsTQPjjNfxgbUk8wP5vVMjvHywY',
	authDomain: 'portofolio1-34212.firebaseapp.com',
	databaseURL: 'https://portofolio1-34212.firebaseio.com',
	projectId: 'portofolio1-34212',
	storageBucket: '',
	messagingSenderId: '626175097098',
	appId: '1:626175097098:web:e5913f79af183a35'
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()
	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}
	return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

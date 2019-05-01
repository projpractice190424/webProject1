import { observable, action, toJS } from 'mobx';
import firebase from '../Firebase/firebase';
import RootStore from './RootStore';


export default class AuthStore {

    @observable isLogin = false;
    @observable isLoggedout = false;
    @observable firebaseUser = null;


    unsubscribe = null;

    constructor(RootStore) {
        this.rootStore = RootStore;

    }

    load = () => {
        console.log('loading from authStore...');
        this.unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            try {
                // SignIn
                console.log(user);
                if (user) {
                    this.isLoggedOut = false;
                    this.firebaseUser = user;
                    console.log('Firebase User: ', user);
                }
            } catch (error) {
                console.log(error);
            }
        });
    }

    signInGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    signInFacebook = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(user);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error);
        });
    }

    firebaseSignOut = () => {
        console.log("Sign out...");
        return firebase.auth().signOut().then((res) => {
            // Sign-out successful.
            this.isLoggedOut = true;
            console.log(res);
        }).catch( (error) => {
            // An error happened.
            console.log(error);
        });
    }
}
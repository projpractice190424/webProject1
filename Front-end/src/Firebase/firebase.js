import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB--DemdAgm6WQrBkTNTbOSIshJ0SloXzE",
    authDomain: "uvanur-ead20.firebaseapp.com",
    databaseURL: "https://uvanur-ead20.firebaseio.com",
    projectId: "uvanur-ead20",
    storageBucket: "uvanur-ead20.appspot.com",
    messagingSenderId: "1074682008114"
};

firebase.initializeApp(config);

export default firebase;
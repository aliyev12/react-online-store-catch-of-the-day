import Rebase from 're-base';
import firebase from 'firebase';

// const firebaseApp = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASEURL
//   });
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJPc02CHc5Xij7-10xC2PT_w2v5KASlKY",
    authDomain: "catch-of-the-day-app-aa.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-app-aa.firebaseio.com"
  });


const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
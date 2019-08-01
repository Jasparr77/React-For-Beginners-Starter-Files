import Rebase from 're-base';
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaTlhlcOO3qHOhrcbKNO-7Kqvl0dRpcj4",
    authDomain: "jasp-of-the-day.firebaseapp.com",
    databaseURL: "https://jasp-of-the-day.firebaseio.com",
  })
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
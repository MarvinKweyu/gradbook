import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  db: any;
  auth: any;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.db = getDatabase(this.app);
    this.auth = getAuth(this.app);

  }

  signUp(email: string, password: string) {
    console.log(email, password)

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.storeUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  signIn(email: string, password: string) {

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        this.storeUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  userStatus() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  getUser() {
    return this.auth.currentUser;
  }
  storeUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

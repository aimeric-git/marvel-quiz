import app from 'firebase/app'; 
import 'firebase/auth'; 
import 'firebase/firestore'; 

const config = {
    apiKey: "AIzaSyDvMtx_IoLqleXYlgSxmu-BwQJMM2nXf_w",
    authDomain: "marvel-quiz-de6bb.firebaseapp.com",
    projectId: "marvel-quiz-de6bb",
    storageBucket: "marvel-quiz-de6bb.appspot.com",
    messagingSenderId: "372107388257",
    appId: "1:372107388257:web:595f4c6ea6f9ab17c19120"
  };

class Firebase {
    contructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore(); 

    }

    //inscription
    signupUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }
    
    //connexion
    loginUser = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
    }

    //deconnexion
    signoutUser = () => {
        this.auth.signOut()
    }

    //recuperer le mdp
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email); 

    user = (uid) => this.db.doc(`users/${uid}`);

}

export default Firebase;
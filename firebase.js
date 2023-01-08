import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjSs2MUGKnzli9YfbJwoIzHH7p6ucMmuc",
  authDomain: "signal-clone-yt-build-b06ae.firebaseapp.com",
  projectId: "signal-clone-yt-build-b06ae",
  storageBucket: "signal-clone-yt-build-b06ae.appspot.com",
  messagingSenderId: "117393311778",
  appId: "1:117393311778:web:678d58b48e83edde73a27b"
};

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db,auth}
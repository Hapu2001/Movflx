import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail ,signOut} from"firebase/auth"
import {getFirestore, query, getDocs, collection, where, addDoc,setDoc,doc} from 'firebase/firestore'
import { getAnalytics, } from "firebase/analytics";
import { getStorage } from 'firebase/storage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const firebaseConfig = {
  apiKey: "AIzaSyDsl71eolwO7S5LK_BAF4eWg9fIa34j8VM",
  authDomain: "movflx-reactjs.firebaseapp.com",
  databaseURL: "https://movflx-reactjs-default-rtdb.firebaseio.com",
  projectId: "movflx-reactjs",
  storageBucket: "movflx-reactjs.appspot.com",
  messagingSenderId: "398065077115",
  appId: "1:398065077115:web:7ae5388632b25cba12cbde",
  measurementId: "G-F8XK5PN7DH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider= new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const usersCollection = collection(db,'users');
  const signInWithgoogle = async () =>{
    try {
        const res = await  signInWithPopup(auth,provider)
        const user = res.user;
        const q = query(collection(db, 'users'), where("uid", '==', user.uid));
        const docs = await getDocs(q);
        console.log(docs.data);
        if(docs.docs.length === 0 ){
          await setDoc(doc(db, "users",user.uid), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            bookmark:[]
            
        });
    }}
    catch(err) {
      console.error(err);
    }
  }
  const signInWithFacebook = async () =>{
    try {
        const res = await  signInWithPopup(auth, providerFacebook)
        const user = res.user;
        const q = query(collection(db, 'users'), where("uid", '==', user.uid));
        const docs = await getDocs(q);
        console.log(docs.data);
        if(docs.docs.length === 0 ){
          await setDoc(doc(db, "users",user.uid), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            bookmark:[]
            
        });
    }}
    catch(err) {
      console.error(err);
    }
  }
 const signUp = async (firstName,lastName,email, password) =>{
  try {

    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await setDoc(doc(db,'users',user.uid) ,{
      uid: user.uid,
      firstname:firstName,
      lastName: lastName,
      email:email,
      bookmark:[]
    });
  }catch(err ){
    console.log(err);
  }
 }
 
  const logout = () => {
    signOut(auth);
  };

  export {auth, logout,signInWithEmailAndPassword,signInWithgoogle,signUp,db,signInWithFacebook }
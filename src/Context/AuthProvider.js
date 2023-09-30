import React, { createContext, createElement, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
const [user,setUser]= useState(null)


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = ()=>{
    return signOut(auth)
  }
  useEffect(()=>{
 const unsubscripe=   onAuthStateChanged(auth,currentUser=>{
      console.log('user opserviing ')
      setUser(currentUser)
    })
    return()=>unsubscripe()

  },[])
  const authInfo = {
    createUser,
    signIn,
    logOut,
    user
    // Your authentication logic here
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

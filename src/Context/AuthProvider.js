import React, { createContext, createElement, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
const [user,setUser]= useState(null)
const [loading ,setLoading]= useState(true)



    const createUser = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) =>{
      setLoading(tru)
      return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = ()=>{
    return signOut(auth)
  }
  const updateUser =(userInfo)=>{
    setLoading(true)
    return updateProfile(auth,userInfo)
  }
  useEffect(()=>{
 const unsubscripe=   onAuthStateChanged(auth,currentUser=>{
      console.log('user opserviing ')
      setUser(currentUser)
      setLoading(false)
    })
    return()=>unsubscripe()

  },[])
  const authInfo = {
    updateUser,
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

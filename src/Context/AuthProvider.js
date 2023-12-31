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
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = ()=>{
    return signOut(auth)
     }

     // problelm updateUser
     const updateUser = (userDetails) => {
      setLoading(true)
      return updateProfile(auth.createUser, {
        displayName: userDetails.name,
      })
    }



  
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user observing');
        setUser(currentUser);
        setLoading(false);
    });

    return () => unsubscribe();
}, [])
  const authInfo = {
    loading,
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

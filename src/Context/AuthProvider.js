import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const authInfo = {
    // Your authentication logic here
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

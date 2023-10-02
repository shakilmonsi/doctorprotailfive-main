import React, {  useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privetrouts = ({children}) => {
 const {user ,loading}= useContext(AuthContext)
 const location= useLocation()
 if(loading){
    return <div className='flex justify-center items-center h-full'>
    <p className='text-7xl font-thin'>L</p>
    <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
    <p className='text-7xl font-thin'>ading....</p>
  </div>
 }
 if(user){
    return children
 }
return <Navigate to="/login" state={{from:location}} replace> </Navigate>



};

export default Privetrouts;
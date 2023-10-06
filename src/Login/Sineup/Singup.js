import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';
// ^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$
// 
const Singup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //class 73-6 
  const { createUser, updateUser } = useContext(AuthContext)

  const [signUpError, setSignUPError] = useState('')
  // class -75-6
  const [createdUserEmail,setCreatedUserEmail]=useState('')
  const [token]=useToken(createdUserEmail)

  const navigate = useNavigate();
  if(token){
    navigate('/ ')
  }

  const handleSignUp = (data) => {
      setSignUPError('');
      createUser(data.email, data.password)
          .then(result => {
              const user = result.user;
              console.log(user);
              toast('User Created Successfully.')
              const userInfo = {
                  displayName: data.name
              }
              updateUser(userInfo)
                  .then(() => {
                    saveUser(data.name, data.email);
                   })
                  .catch(err => console.log(err));
          })
          .catch(error => {
              console.log(error)
              setSignUPError(error.message)
          });
  }
  const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users/createUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
   setCreatedUserEmail(email)
      console.log(" save user and nok de", data)

    //   navigate('/')
            
        })
    }

    //class 75-5 
// const getUserToken= email=>{
//     fetch(`http://localhost:5000/jwt?email=${email}`)
//     .then(res=>res.json())
//     .then(data=>{
//         if(data.accessToken){
//             localStorage.setItem('accessToken',data.accessToken)
//             navigate('/')

//         }
//     })
// }

  return (
      <div className='h-[800px] flex justify-center items-center'>
          <div className='w-96 p-7'>
              <h2 className='text-xl text-center'>Sign Up</h2>
              <form onSubmit={handleSubmit(handleSignUp)}>
                  <div className="form-control w-full max-w-xs">
                      <label className="label"> <span className="label-text">Name</span></label>
                      <input type="text" {...register("name", {
                          required: "Name is Required"
                      })} className="input input-bordered w-full max-w-xs" />
                      {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                  <div className="form-control w-full max-w-xs">
                      <label className="label"> <span className="label-text">Email</span></label>
                      <input type="email" {...register("email", {
                          required: true
                      })} className="input input-bordered w-full max-w-xs" />
                      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                  </div>
                  <div className="form-control w-full max-w-xs">
                      <label className="label"> <span className="label-text">Password</span></label>
                      <input type="password" {...register("password", {
                          required: "Password is required",
                          minLength: { value: 6, message: "Password must be 6 characters long" },
                      })} className="input input-bordered w-full max-w-xs" />
                      {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                  </div>
                  <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                  {signUpError && <p className='text-red-600'>{signUpError}</p>}
              </form>
              <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
              <div className="divider">OR</div>
              <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

          </div>
      </div>
  );
};


export default Singup;
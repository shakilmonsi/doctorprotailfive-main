import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// ^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$
// 
const Singup = () => {
    const  {register,handleSubmit ,formState:{errors}}=useForm();
   //class 73-6 
    const {createUser}=useContext(AuthContext)
    const handleSingup =(data)=>{

       
createUser(data.email, data.password)


.then(result=>{
  const user=result.user 
  console.log(user)
  
})
.catch(error=>console.log(error))
    }
    return (
        <div>
        
        <div className='h-[800px] flex  justify-center items-center'>
          <div >
            <h2 className='text-4xl text-center'>SINGUP</h2>
            {/* .........//// */}
            <form onClick={handleSubmit(handleSingup)} >
              <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input  {...register("name",{required: "name is required"})} type="text" placeholder="your naem" className="input input-bordered w-full max-w-xs" />
         
        
        </div>    
              <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input  {...register("email",{required:'email is a required'})} type="email" placeholder=" Your Email " className="input input-bordered w-full max-w-xs" />
         
          {errors.email && <p role="alert">{errors.email?.message}</p>}

        </div>    
              <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">password</span>
          </label>
     
      
          <input  {...register("password",{required:"password is a required",

  minLength:{value:6 ,message:'password must be 6 characters or ok'},
  // pattern:{value:/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/, message:' plaess String password '}
})} type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        
          {errors.password && <p role="alert">{errors.password?.message}</p>}
         

        </div>    
          
              <input type="submit" className='btn btn-accent w-full mt-5'/>
            </form>
            <p> pleasse Login <Link to="/login" className='text-secondary'>alraday account</Link></p>
            <div className="divider">OR</div>
         <button className='btn btn-outline w-full'>with Google</button>
        
          </div>
        </div>
        
        
            </div>
    
    );
};


export default Singup;
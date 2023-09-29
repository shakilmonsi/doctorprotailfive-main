import parseISO from 'date-fns/esm/parseISO';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// ^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$
// 
const Singup = () => {
    const  {register,handleSubmit ,formState:{errors}}=useForm();
    const handleSingup =(data)=>{
        console.log(data)
        console.log(errors)
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
  minLength:{value:6 ,message:'password must be 6 characters or ok'}
})} type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
        
          {errors.password && <p role="alert">{errors.password?.message}</p>}

        </div>    
          
              <input type="submit" className='btn btn-accent w-full'/>
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
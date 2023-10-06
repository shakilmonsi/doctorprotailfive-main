
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import { useContext, useState } from 'react'
import useToken from '../hooks/useToken'

function Login() {
  const {register,handleSubmit ,formState:{errors}}=useForm()
const  [loginError,setLoginError]=useState(' ')
const [loginUserEmail,setLoginUserEmail]=useState('')
const [token]=useToken(loginUserEmail)
  const {signIn}=useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
   const from = location.state?.from?.pathname || "/"
    if(token){
      navigate(from,{replace: true})

    }
   
   const handleLogin =(data)=>{
      setLoginError('')
      signIn(data.email, data.password)
.then(result=>{
  const user=result.user 
  //class -77-7
setLoginUserEmail(data.email)
  // navigate(from,{replace: true})

})
.catch(error=>{
  console.log(error)
  setLoginError(error.message)

})
    }
  return (
    <div>
        
<div className='h-[800px] flex  justify-center items-center'>
  <div >
    <h2 className='text-4xl'> Login</h2>
    {/* .........//// */}
    <form onSubmit={handleSubmit(handleLogin)} >
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">email</span>
  </label>
  <input {...register("email",{required:'Email address is required'})} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
  {errors.email && <p className='text-red' role="alert">{errors.email?.message}</p>}

</div>    
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">password</span>
  </label>
  <input {...register("password",
  {required:"password required", 
  minLength:{value:6 ,message:'password must be 6 characters or ok'}
  })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  {errors.password && <p className='text-red' role="alert" >{errors.password?.message}</p>}

  <label className="label">
    <span className="label-text ">forget password</span>
  </label>
</div>    
  
      <input type="submit" className='btn btn-accent w-full'/>
  <div>
    {
      loginError && <p className='text-red-500'>{loginError}</p>
    }
  </div>
    </form>
    <p>new to doctorsprtal <Link to="/singup" className='text-secondary'>create account</Link></p>
    <div className="divider">OR</div>
 <button className='btn btn-outline w-full'>with Google</button>

  </div>
</div>


    </div>
  )
}

export default Login
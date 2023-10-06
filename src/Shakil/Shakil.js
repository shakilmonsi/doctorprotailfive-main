const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(" save user and nok de", data)
      
    })
}
// class 75-5 server jwt setup step 3
function verifyJWT(req,res,next){
    console.log('json verifyJWT setup',req.headers.authorization)
const authHeader =req.headers.authorization;
if(!authHeader){
    return res.send(401).send('unauthorized acces')
}
const token =authHeader.split(' ')[1];
jwt.verify(token.prose)
}


//1 /jwt setup clinend site 
const getUserToken= email=>{
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res=>res.json())
    .then(data=>{
        if(data.accessToken){
            localStorage.setItem('accessToken',data.accessToken)
            navigate('/')

        }
    })
}
// 2/jwt setup clinend site 

import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];

    // setup 3 singup cliend site   singpu full option
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

export default useToken;

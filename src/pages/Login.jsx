import React from 'react'
import { useNavigate , Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
    await signInWithEmailAndPassword(auth, email, password);

    
    
    const user1 = auth.currentUser;

    
        if (user1 !== null) {
          user1.providerData.forEach((profile) => {
            
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            
          });
        }
    navigate("/")
    }
    catch(error){
      console.log("error in login");
    }

     
  }
  
  return (
    
    <div className='formContainer'>
      <div className='formWraper'>
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button>Sign In</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link> </p>
      </div>
    </div>
    
  )
}

export default Login;
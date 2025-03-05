import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import React from 'react'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import { Timestamp } from "firebase/firestore";
import { useNavigate ,Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];


    
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user);

        

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName,
          email,
          createdAt: Timestamp.now(),
        });

        updateProfile(auth.currentUser, {
          displayName:displayName })


        await setDoc(doc(db,"userChats",user.uid),{});
        navigate("/");

      }

    )

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      
      
  }

  return (
    
    <div className='formContainer'>
      <div className='formWraper'>
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src="data:image/png;base64,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" alt="" />
            <span>Add an avatar </span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>do you have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
    
  )
}

export default Register
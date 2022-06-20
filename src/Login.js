import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './Login.css'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const signIn = e =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then(auth => {
      navigate("/")
    }).catch(error => alert(error.message))
  };

  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then(auth=>{
      if(auth){
        navigate('/')
      }
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
        <Link to = '/'>
            <img className='login-logo' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt = 'Amazon logo'/>
        </Link>
        <div className="login-container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type = 'text' value = {email} onChange = {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>
                <button type = 'submit' className='login-signin' onClick={signIn}> Sign In</button>
            </form>
            <p>By signing-in you agree to AmazonClone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads</p>
            <button onClick={register} className="login-register">Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login
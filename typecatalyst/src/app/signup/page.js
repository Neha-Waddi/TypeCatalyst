"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
          }
        try{
            const res=await fetch('/api/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({username,email,password,confirmPassword}),
            });
            if(res.ok){
                const form=e.target;
                form.reset();
                setUsername("");
                setEmail("");
                setPassword("");
                setError("");
                setConfirmPassword("");
            }
            else{
                setError("Failed to sign up");
            }

        }catch(error){
            setError("error during registration",error);
        }
        }

    
  return (
    <div>
        <div>
            <h1>Signup</h1>
            <form  onSubmit={handleSubmit}>
                <label>Username:</label>
                <input  onChange={(e)=>setUsername(e.target.value)}type="text" name="username"  required/>
                <br/>
                <label>Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" required/>
                <label>Password:</label>
                <input  onChange={(e)=>setPassword(e.target.value)}type="password" name="password" required/>
                <br/>
                <label>Confirm Password:</label>
                <input onChange={(e)=>setConfirmPassword(e.target.value)} type='password' name='password' required/>
                <button type='submit'> 
                    Signup 
                </button>
                {
                    error &&(
                        <div>
                            <p >{error}</p>
                        </div>
                    )
                }
                 <Link href='/login' >Already Have An Account?Login</Link>
                
            </form>
        </div>
    </div>

  )
}

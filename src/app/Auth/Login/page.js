"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { login} from '@/services/auth';

const Signup = () => {
    const [form,setForm]=useState({
        email:"",
        password:""
    });
    function handleChange(e){
        const fieldName=e.target.name;
        const fieldValue=e.target.value;
        setForm({
            ...form,[fieldName]:fieldValue,
        })
    }
    async function handleSubmit(e){
        try{e.preventDefault()
        const response = await login(form);
        console.log(response)}
        catch(err){
          console.log(err)
        }
    };
  return (
    <div>
      <h1>Login Page</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type='email' placeholder='email' ></input>
        <input name='password' type='password' placeholder='password' ></input>
        <button type="submit">Login</button>
      </form>
      <p>Don&apos;t have an Account? <Link href="/Auth/signup">Signup</Link> first</p>
    </div>
  )
}

export default Signup

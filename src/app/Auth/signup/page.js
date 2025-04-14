"use client"
import { signup } from '@/services/auth';
import Link from 'next/link';
import React, { useState } from 'react'

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
        const response = await signup(form);
        console.log(response)}
        catch(err){
          console.log(err)
        }
    };
  return (
    <div>
      <h1>Signup</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type='email' placeholder='email' ></input>
        <input name='password' type='password' placeholder='password' ></input>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an Account? <Link href="/Auth/Login">Login</Link> first</p>

    </div>
  )
}

export default Signup

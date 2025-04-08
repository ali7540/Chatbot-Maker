"use client"
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
    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
    }
  return (
    <div>
      <h1>Signup</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input name="email" type='email' placeholder='email' ></input>
        <input name='password' type='password' placeholder='password' ></input>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup

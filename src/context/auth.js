'use client'
import {React, useState, createContext} from 'react'

export const AuthContext = createContext(null);

const AuthProvider=({children})=>{
    const [isLoggedin,SetisLoggedin]=useState(false)
    return (
        <AuthContext.Provider value={{isLoggedin,SetisLoggedin}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

//usecontext
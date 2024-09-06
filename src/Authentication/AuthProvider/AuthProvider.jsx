import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser=(email,password)=>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
       setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)
    })

    return ()=>{
        return unSubscribe()
    }
  },[])

    const authInfo ={
        user,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
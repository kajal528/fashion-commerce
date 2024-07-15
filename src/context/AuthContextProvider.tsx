import React, { createContext, useState } from 'react'
import { Login, Logout } from '../utils/utils';


export const AuthContext = createContext(null);
const AuthContextProvider = ({children}) => {
  
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    return Login();
  });

  const handleUserLoggedIn = () => {
    const data = Login();
    setUserLoggedIn(data)
  }
  const handleUserLogOut = () => {
    Logout();
    setUserLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{
      userLoggedIn,
      setUserLoggedIn: handleUserLoggedIn,
      setUserLogOut: handleUserLogOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [userName, setUserName] = useState("");
  return( 
  <UserContext.Provider value = {{userName , setUserName}}> {children} </UserContext.Provider>
  )
}

export default UserContext;

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>
{
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );
    const changeAuthenticated = ( state )=>
    {   
        setIsAuthenticated( state );
    }
    return (
        <AuthContext.Provider value={ { isAuthenticated, changeAuthenticated } }>
            { children }
        </AuthContext.Provider>
    );
}
export const useAuth = ()=>
{
    return useContext( AuthContext );
}
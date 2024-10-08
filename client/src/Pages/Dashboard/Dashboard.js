import { React, useState,useEffect } from "react";
function Dashboard ({setisAuthenticated})
{
    const [ loggedInUser, setLoggedInUser ] = useState( "" )
    useEffect( () =>
    {
        setLoggedInUser( localStorage.getItem( "userName" ) );
    }, [] );
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>{ loggedInUser }</h2>
        </div>
    );
}

export default Dashboard;

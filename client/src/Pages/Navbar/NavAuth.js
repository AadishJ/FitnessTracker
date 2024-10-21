import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SideBar from "./SideBar";

function NavAuth ( { loggedInUser } )
{
    const { changeAuthenticated } = useAuth();
    const [isOpen,setIsOpen]  = useState(false);
    const navigate = useNavigate();
    const handleLogout = () =>
    {
        localStorage.removeItem( "userName" );
        localStorage.removeItem( "token" );
        changeAuthenticated( false );
        setTimeout( () =>
        {
            navigate( "/" );
        }, 1000 );
    };
    const toggleSideBar = () =>
    {
        setIsOpen( !isOpen );
    }
    const renderSideBar = () =>
    {
        if ( isOpen )
        {
            return <SideBar />;
        } else
        {
            return null;
        }
    }
    return (
        <div>
            {renderSideBar}
            <div className="bg-customBrown p-4 text-customBeige font-roboto">
                <div className="flex justify-between gap-5 mx-4">
                    <div className="flex items-center gap-4">
                    <GiHamburgerMenu onClick={toggleSideBar} className="fill-white"/>
                    <Link to="/">
                        <div className="p-2">FitnessTracker</div>
                    </Link>
                    </div>
                    <div className="flex gap-4">
                        <form action="" className="flex gap-2 items-center mr-2 text-white">
                            <button className="text-customBeige">Search</button>
                            <input type="text" className="w-36 bg-customBeige h-6 bg-opacity-40 rounded-md" />
                        </form>
                        <Link to="/faq">
                            <button className="p-2">FAQ</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="p-2">Dashboard</button>
                        </Link>
                        <div onClick={ handleLogout } className="rounded-full w-10 h-10 bg-customBeige text-customBrown text-center text-3xl flex items-center justify-center">  { loggedInUser?.charAt( 0 ).toUpperCase() }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavAuth;
import { Link, useNavigate } from "react-router-dom";

function Navbar ({isAuthenticated, setisAuthenticated})
{
    const navigate = useNavigate();
    const handleLogout=() =>
        {
            localStorage.removeItem( "userName" );
            localStorage.removeItem( "token" );
            setisAuthenticated( false );
            setTimeout(()=>
            {
                navigate( "/" );
            },1000)
        }
    const render = () =>
    {
        if ( !isAuthenticated )
        {
            return (
                <div className="bg-green-400 p-4 text-white">
            <div className="flex justify-between gap-5 mx-4">
                <Link to="/">
                    <div className="p-2">FitnessTracker</div>
                </Link>
                <div>
                    <Link to="/faq">
                        <button className="p-2">FAQ</button>
                    </Link>
                    <Link to="/login">
                        <button className="p-2">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="p-2">SignUp</button>
                    </Link>
                </div>
            </div>
        </div>
            )
        } else
        {
            return (
                <div className="bg-green-400 p-4 text-white">
                    <div className="flex justify-between gap-5 mx-4">
                        <Link to="/">
                            <div className="p-2">FitnessTracker</div>
                        </Link>
                        <div>
                            <Link to="/faq">
                                <button className="p-2">FAQ</button>
                            </Link>
                            <Link to="/dashboard">
                                <button className="p-2">Dashboard</button>
                            </Link>
                            <Link to="/profile">
                                <button className="p-2">Profile</button>
                            </Link>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div>
            {render()}
        </div>
    );
}

export default Navbar;
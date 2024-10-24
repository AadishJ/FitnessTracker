import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function NavAuth ()
{
    const { changeAuthenticated } = useAuth(); 
    const navigate = useNavigate();
    const handleLogout = () =>
    {
        localStorage.removeItem( "token" );
        localStorage.removeItem( "userName" );
        changeAuthenticated(false);
        setTimeout(() =>  navigate("/"), 1000);
    }
    return (
        <div className="fixed top-0 z-2 w-full bg-backPurple shadow-lg">
            <div className="text-white flex justify-between items-center mx-8 my-4">
                <Link to="/">
                    <div className="flex flex-col items-center font-medium">
                    <div className="flex items-center">F
                            <FaDumbbell className="fill-white rotate-90" />
                        TNESS</div>
                        <div>TRACKER</div>
                    </div>
                </Link>
                <div className="flex gap-4 justify-center items-center">
                    <div className="flex justify-start items-center relative gap-2">
                        <FaSearch className="fill-gray-500 absolute left-2 w-4" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-lightPurple w-96 rounded-lg p-4 pl-10 h-10 text-lg"
                        />
                    </div>
                    <Link to="/dashboard">
                        <div className="border-brightPurple w-24 h-10 border-2 flex items-center justify-center rounded-full hover:cursor-pointer hover:border-none hover:bg-brightPurple">
                            Dashboard
                        </div>
                    </Link>
                        <div onClick={handleLogout} className="bg-brightPurple rounded-full w-24 h-10 flex justify-center items-center hover:cursor-pointer hover:bg-backPurple hover:border-brightPurple hover:border-2">
                            Logout
                        </div>
                </div>
            </div>
        </div>
    );
}

export default NavAuth;

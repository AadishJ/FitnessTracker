import { Link } from "react-router-dom";

function Navbar ()
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
    );
}

export default Navbar;
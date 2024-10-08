import { Link } from "react-router-dom";

function Home1 ()
{
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mt-36 mb-20 text-7xl text-gray-600">
                Your Fitness, Simplified
            </div>
            <Link to="/signup" className="bg-green-300 p-3 text-white rounded-md">Get Started Now</Link>
        </div>
    );
}

export default Home1;
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarClose({ menuItems, selected, setSelected, handleOpen }) {
    return (
        <div  className="absolute top-0 left-0 w-28 h-screen bg-pinkPurple text-white font-medium font-outfit">
            <div onClick={handleOpen} className="flex flex-col items-center shadow-sm fixed w-28">
                <div  className="flex items-center mt-3">
                    <FaDumbbell  className="fill-white" />
                </div>
                <div className="h-0.5 py-0.5 rounded-full mt-4 bg-backPurple w-20"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 h-4/6 mt-10">
                { menuItems.map( ( item ) => (
                    <Link key={item.name} to={item.link}>
                    <div
                        className={`cursor-pointer hover:underline hover:bg-backPurple w-20 h-10 items-center flex gap-2 justify-center rounded-md ${selected === item.name ? 'bg-backPurple text-white' : ''}`}
                        onClick={() => setSelected(item.name)}
                        >
                        {item.icon}
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SidebarClose;

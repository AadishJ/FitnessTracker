import {  FaDumbbell } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function SidebarOpen ({menuItems,selected,setSelected, handleClose})
{
    return (
        <div>
            <IoIosArrowDropleftCircle onClick={handleClose} className="w-12 h-20 rounded-full absolute my-2 mx-2 left-56 top-1/3 fill-white z-10"/>
            <div className="absolute top-0 left-0">
            <div className="w-64 h-screen bg-pinkPurple text-white font-medium font-outfit relative z-3">
            <Link to="/dashboard">
                    <div className="flex flex-col items-center shadow-sm fixed w-64">
                    <div className="flex items-center mt-3">F
                            <FaDumbbell className="fill-white rotate-90" />
                        TNESS</div>
                        <div>TRACKER</div>
                    <div className="h-0.5 py-0.5 rounded-full mt-4 bg-backPurple w-56"></div>
                    </div>
                </Link>
                <div className="flex flex-col items-center justify-center gap-6 h-4/6">
                    <div className="mt-10"></div>
                        { menuItems.map( ( item ) => (
                    <Link key={item.name} to={item.link}>
                <div
                    className={`cursor-pointer hover:underline hover:text-lg hover:bg-backPurple w-44 h-10 items-center flex gap-2 justify-center rounded-md ${selected === item.name ? 'bg-backPurple text-white' : ''}`}
                    onClick={() => setSelected(item.name)}
                    >
                    {item.icon}
                    {item.name}
                </div>
                    </Link>
            ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default SidebarOpen;
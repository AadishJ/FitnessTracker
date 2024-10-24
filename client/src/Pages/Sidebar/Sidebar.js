import { FaCalendar, FaDumbbell, FaMedal } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { CiGrid41 } from "react-icons/ci";
import { useState } from 'react';
import SidebarOpen from "./SidebarOpen";
import SidebarClose from "./SidebarClose";


function Sidebar ()
{
    const [selected, setSelected] = useState('Overview');
    const menuItems = [
        { name: 'Overview', icon: <CiGrid41 />, link: "/dashboard" },
        { name: 'Workout', icon: <FaDumbbell />, link: "/dashboard/gym" },
        { name: 'Diet Plan', icon: <FaBowlFood />, link: "/dashboard/diet"},
        { name: 'Goals', icon: <FaMedal />, link: "/dashboard/goals" },
        { name: 'My Schedule', icon: <FaCalendar />, link: "/dashboard/schedule" },
        { name: 'Progress', icon: <GiProgression />, link: "/dashboard/progress" },
    ];
    const [ isOpen, setIsOpen ] = useState( true );
    const handleClose = () =>
    {
        setIsOpen( false );
    }
    const handleOpen = () =>
    {
        setIsOpen( true );
    }

    return (
        <div >
            { isOpen && <SidebarOpen menuItems={ menuItems } selected={ selected } setSelected={ setSelected } handleClose={ handleClose } />}
            { !isOpen && <SidebarClose menuItems={ menuItems } selected={ selected } setSelected={ setSelected } handleOpen={ handleOpen } />}
        </div>
    );
}

export default Sidebar;
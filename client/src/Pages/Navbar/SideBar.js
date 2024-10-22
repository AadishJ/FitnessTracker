import React from 'react';

function SideBar() {
    return (
        <div className="relative top-0 left-0 h-full w-64 bg-customBrown2 text-white z-0">
            <ul className="h-96">
                <li className="px-4 py-2 hover:bg-gray-700"><a href="#home">Home</a></li>
                <li className="px-4 py-2 hover:bg-gray-700"><a href="#about">About</a></li>
                <li className="px-4 py-2 hover:bg-gray-700"><a href="#services">Services</a></li>
                <li className="px-4 py-2 hover:bg-gray-700"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default SideBar;
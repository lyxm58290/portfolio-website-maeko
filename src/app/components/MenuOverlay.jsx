import React from "react";
import NavLink from "./NavLink";

const MenuOverlay =({ links }) => {
    return(
        <div className="bg-[#4A2C17] md:hidden absolute top-full left-0 right-0 z-20">
            <ul className="flex flex-col py-4 items-center">
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default MenuOverlay
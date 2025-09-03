import React from "react";

const ProjectTag =({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
    ? "text-[#FFFEF7] border-[#9CAF88]"
    : "text-[#ADB7BE] border-slate-600 hover:border-[#6D4C41]"
    return(
        <button 
            className={`${buttonStyles} rounded-full border-3 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
        
    );
};

export default ProjectTag;
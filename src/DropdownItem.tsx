import React, { ReactNode } from "react";

interface IProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    goToMenu?: string;
    setActiveMenu?: (menu: string)=>void;
    children?: ReactNode;
}

export const DropdownItem: React.FC<IProps> = ({leftIcon, rightIcon, children, goToMenu, setActiveMenu}) => {

    return (
        <a href="#" className="menu-item" onClick={()=> {goToMenu && setActiveMenu && setActiveMenu(goToMenu) }}>
            <span className="icon-button">{leftIcon}</span>
            {children}
            <span className="icon-right">{rightIcon}</span>
        </a>
    );
};

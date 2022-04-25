import React from "react";
import { NavItem } from "./NavItem";
import {ReactComponent as PlusIcon} from './icons/plus.svg';
import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as MessengerIcon} from './icons/messenger.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import { Dropdown } from "./Dropdown";



interface IProps {children?: React.ReactNode}

export const Navbar: React.FC<IProps> = ({ children}) => {

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {children}
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<BellIcon/>}/>
                <NavItem icon={<MessengerIcon/>} />
                <NavItem icon={<CaretIcon/>}><Dropdown></Dropdown></NavItem>
            </ul>
        </nav>
    );
}; 
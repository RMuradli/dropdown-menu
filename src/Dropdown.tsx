import React from "react";
import { DropdownItem } from "./DropdownItem";
import {ReactComponent as CogIcon} from './icons/cog.svg';
import {ReactComponent as ArrowIcon} from './icons/arrow.svg';

import { CSSTransition } from 'react-transition-group';

export const Dropdown: React.FC = () => {

    const [activeMenu, setActiveMenu] = React.useState('main');
    const [menuHeight, setMenuHeight] = React.useState<any>();
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        /** it actually shoud be dropdownRef.current?.firstChild.offsetHeight but I could not find a right way in typescript
         * this is a way around.
         */
        setMenuHeight(dropdownRef.current?.['firstChild']['offsetHeight'] );
      }, []) 

    const calcHeight = (el: any)=> {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    
    return (
        <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>
            <CSSTransition in={activeMenu === 'main'} timeout={500} unmountOnExit classNames='menu-primary' onEnter={calcHeight} >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem setActiveMenu={setActiveMenu} goToMenu="settings" leftIcon={<CogIcon/>}>Settings</DropdownItem>
                </div>
               
            </CSSTransition>
            <CSSTransition in={activeMenu === 'settings'} timeout={500} unmountOnExit classNames='menu-secondary' onEnter={calcHeight} >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                  
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" setActiveMenu={setActiveMenu} >Go back</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Veggies</DropdownItem>
                </div>
               
            </CSSTransition>
        </div>
    )
}

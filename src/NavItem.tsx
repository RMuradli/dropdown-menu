import React, { ReactNode } from "react";

interface IProps {
    icon: ReactNode;
    children?: ReactNode;
}

export const NavItem: React.FC<IProps> = ({icon, children}) => {
    const [open, setOpen] = React.useState<Boolean>(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
                {icon}
            </a>
            {open && children}
        </li>
    )
}

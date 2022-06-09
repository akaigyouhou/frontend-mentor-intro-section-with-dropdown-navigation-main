import { useState } from 'react';
import "./header.css";
import logo from '../images/logo.svg';
import menuOpenIcon from '../images/icon-menu.svg';
import Menu from './Menu';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"></img>
            <img onClick={handleOpen} className="header__menu-open" src={menuOpenIcon} alt="open"></img>
            <div className={"header__filter" + (open ? " header__filter_open" : "")}></div>
            <Menu open={open} setOpen={setOpen} />
        </header>
    );
};

export default Header;

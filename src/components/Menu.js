import { useState } from 'react';
import "./menu.css";
import menuCloseIcon from '../images/icon-close-menu.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import arrowUp from '../images/icon-arrow-up.svg';
import todo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';


const Navigate = ({open, setOpen}) => {
    const [featureOpen, setFeatureOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleFeatureToggle = () => {
        const newFeatureOpen = !featureOpen;
        setFeatureOpen(newFeatureOpen);
    }

    const handleCompanyToggle = () => {
        const newCompanyOpen = !companyOpen;
        setCompanyOpen(newCompanyOpen);
    }

    return (
        <div className={"header__menu" + (open ? " header__menu_open" : "")}>
            <img onClick={handleClose} className="header__menu_close" src={menuCloseIcon} alt="close"></img>
            <div className="header__menu__list">
                <div className="header__menu__feature-list-container">
                    <div onClick={handleFeatureToggle} className="header__menu__item">Features
                        <img onClick={handleFeatureToggle} className="header__menu__arrow" src={featureOpen ? arrowUp : arrowDown} alt="arrow"></img>
                    </div>
                    {
                        featureOpen && 

                            <ul className="header__menu__feature-list">
                                <li className="header__menu__feature-item">
                                    <img className="header__menu__feature-icon" src={todo} alt={todo}></img>
                                    Todo List
                                </li>
                                <li className="header__menu__feature-item">
                                    <img className="header__menu__feature-icon" src={calendar} alt={calendar}></img>
                                    Calendar
                                </li>
                                <li className="header__menu__feature-item">
                                    <img className="header__menu__feature-icon" src={reminders} alt={reminders}></img>
                                    Reminders
                                </li>
                                <li className="header__menu__feature-item">
                                    <img className="header__menu__feature-icon" src={planning} alt={planning}></img>
                                    Planning
                                </li>
                            </ul>

                    }
                </div>
                <div className="header__menu__company-list-container">
                    <div onClick={handleCompanyToggle} className="header__menu__item">Company
                        <img onClick={handleCompanyToggle} className="header__menu__arrow" src={companyOpen ? arrowUp : arrowDown} alt="arrow"></img>
                    </div>
                    {
                        companyOpen && 

                            <ul className="header__menu__company-list">
                                <li className="header__menu__company-item">History</li>
                                <li className="header__menu__company-item">Our Team</li>
                                <li className="header__menu__company-item">Blog</li>
                            </ul>

                    }
                </div>
                <div className="header__menu__item">Careers</div>
                <div className="header__menu__item">About</div>
            </div>
            <div className="header__menu__login">
                <div className="header__menu__login-button">Login</div>
                <button className="header__menu__register-button">Register</button>
            </div>
        </div>
    )
};

export default Navigate;
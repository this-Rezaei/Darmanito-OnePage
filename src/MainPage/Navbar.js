import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./assets/Group 123.svg";
import "./Navbar.css";
const Navbar = () => {
    const [Click, setClick] = useState(false);
    const ClickHandler = () => setClick(!Click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <div className="navbar-logo">
                        <img src={Logo} alt="" />
                        <div className="logo-type">
                            <h3>درمانیتو</h3>
                            <p>همراه شما در درمان</p>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={ClickHandler}>
                        {Click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={Click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">صفحه اصلی</li>
                        <li className="nav-item">عضویت در داروخانه ها</li>
                        <li className="nav-item">درباره ما</li>
                        <li className="nav-item">تماس باما</li>
                        <li className="nav-item nav-item1">سوالات متداول</li>
                        <li className="nav-item nav-item1">قوانین و شرایط</li>
                        <li className="btn">
                            <button className="nav-btn">
                                دانلود مستقیم درمانیتو
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

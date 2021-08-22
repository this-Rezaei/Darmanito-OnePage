import React from "react";
import "./Header.css";
import Doctor from "./assets/Docter.png";
const Header = () => {
    return (
        <header>
            <div className="image">
                <img src={Doctor} alt="" />
            </div>
            <div className="descrp">
                <h1>اپلیکیشن درمانتو</h1>
                <p>درمانیتو,سامانه هوشمند درمان و سلامت </p>
                <button className="btn2">دانلود درمانیتو</button>
                <button className="btn1">عضویت داروخانه</button>
            </div>
        </header>
    );
};

export default Header;

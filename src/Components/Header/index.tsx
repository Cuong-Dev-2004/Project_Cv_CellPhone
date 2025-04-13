import React from "react";
import "./Header.scss"
import Header_Top from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

function Header() {
    return (
        <div className="Header_Main">
            <Header_Top />
            <HeaderBottom />
        </div>
    );
}

export default Header

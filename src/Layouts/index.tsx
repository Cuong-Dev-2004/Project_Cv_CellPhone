
import React from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div className="Main">
            <Header />
            <div className="Main-layout__content">
                <Outlet />
                <SideBar />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
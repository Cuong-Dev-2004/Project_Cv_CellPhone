import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts";
import React from "react";
import HomePage from "../pages/Home";

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}
export default AppRouters
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import './MainPage.css'

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (!login) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("login");
        navigate("/");
    };

    return (
        <div className="main-page">
            <FormComponent />
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    );
};

export default MainPage;

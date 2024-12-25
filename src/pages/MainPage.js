import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const session = localStorage.getItem("session");
        if (!session) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("session");
        navigate("/");
    };

    return (
        <div className="main-page">
            <h2>Invoice Form</h2>
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
            <FormComponent />
        </div>
    );
};

export default MainPage;

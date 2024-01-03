import React from "react";
import Logo from "../assets/logo.png";

const Home = () => {
    return (
        <div id="home">
            <div className="brand">
                <img src={Logo} alt="" />
                <h1>
                    draw<span>It</span>
                </h1>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import Toolbar from "./Toolbar";

const Header = () => {
    return (
        <div className="header">
            <h1 className="brand-name">
                draw<span>It</span>
            </h1>
            <Toolbar />
            <div>Share</div>
        </div>
    );
};

export default Header;

import React from "react";
import selection from "../assets/selection.png";
import rectangle from "../assets/rectangle.png";
import circle from "../assets/circle.png";

const Toolbar = () => {
    return (
        <div id="toolbar">
            <div className="icon">
                <img src={selection} alt="" />
            </div>
            <div className="icon">
                <img src={rectangle} alt="" />
            </div>
            <div className="icon">
                <img src={circle} alt="" />
            </div>
            <div className="icon">
                <img src={selection} alt="" />
            </div>
            <div className="icon">
                <img src={rectangle} alt="" />
            </div>
            <div className="icon">
                <img src={circle} alt="" />
            </div>
        </div>
    );
};

export default Toolbar;

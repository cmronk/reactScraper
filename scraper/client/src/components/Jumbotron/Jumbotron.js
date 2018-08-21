import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <div className="title-container">
            <h1 className="title">{props.children}</h1>
            <hr />
            <p className="lead">NYT Scraper 2.0</p>
        </div>
    </div>
)

export default Jumbotron;

import React from "react";
import "./Results.css";

const Results = props => (
    <div className="card">
        <div className="card-header">
            Results
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="article-title">
                    <h3>{props.title}TITLE</h3>
                    <hr></hr>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <div
                    className="thumbnail"
                    role="img"
                    aria-label="News Image"
                    style={{
                        backgroundImage: `url("https://placehold.it/200x200")`//`url(${props.src || "https://placehold.it/200x200"})`
                    }}
                /><p>IMAGE</p>
            </div>
            <div className="col-sm-2">
                <p>DATE</p>
            </div>
            <div className="col-sm-6">
                <p>URL</p>
            </div>
            <div className="col-sm-1">
                <button className="btn btn-success">SAVE</button>
            </div>
                    
        </div>
    </div>
)

export default Results;

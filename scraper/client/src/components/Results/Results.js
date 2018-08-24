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
                    <p>{props.title}TITLE</p>
                    <hr></hr>
                </div>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-sm-4">
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
                <div className="col-sm-4">
                    <p>URL</p>
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    </div>
)

export default Results;

import React from "react";
import "./Searches.css";

const Searches = props => (
    <div className="card">
        <div className="card-header">
        Searches
        </div>
        
        <form>
            <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input type="text" className="form-control" id="topic"></input>
            </div>
            <div className="form-group">
                <label htmlFor="start">Start Year</label>
                <input type="text" className="form-control" id="start"></input>
            </div>
            <div className="form-group">
                <label htmlFor="end">End Year</label>
                <input type="text" className="form-control" id="end"></input>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
)

export default Searches;

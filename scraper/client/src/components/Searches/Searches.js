import React from "react";
import "./Searches.css";

const Searches = props => (
    <div className="card">
        <div className="card-header">
        Searches
        </div>
        
        <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Topic</label>
                <input type="text" className="form-control" id="topic"></input>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">Start Year</label>
                <input type="text" className="form-control" id="start"></input>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput">End Year</label>
                <input type="text" className="form-control" id="end"></input>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
)

export default Searches;

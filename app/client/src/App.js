// imports from react and components
import React, { Component } from "react";
// import { Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Searches from "./components/Searches";
import Results from "./components/Results";
import Articles from "./pages/Articles/Articles";

import Saved from "./components/Saved";

const App = () => 
// <Router>

      <div>
        <Jumbotron>New York Times Scraper</Jumbotron>
          {/* <Route exact path="/" component={Searches} />
          <Route exact path="/articles" component={Articles} /> */}
        <Searches>
          
        </Searches>
        <Results></Results>
        <Saved></Saved>
      </div>
// </Router>
// const App = () =>
//   <Router>
//     <div>
//       <Jumbotron />
//       <Switch>
//         <Route exact path="/" component={Searches} />
//         <Route exact path="/articles" component={Articles} />
//         {/* <Route exact path="/articles/:id" component={Results} /> */}
//       </Switch>
//     </div>
//   </Router>

export default App;

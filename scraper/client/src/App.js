// imports from react and components
import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Searches from "./components/Searches";
import Results from "./components/Results";
import Saved from "./components/Saved";

class App extends Component {
  state = {
    articles: [],
    articleSearch: ""
  };

  // updates state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // handling our searches
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getArticles(this.state.articleSearch)
  //     .then(res => this.setState({ articles: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Jumbotron>New York Times Scraper</Jumbotron>
        <Searches></Searches>
        <Results></Results>
        <Saved></Saved>
      </div>
    );
  }
}

export default App;

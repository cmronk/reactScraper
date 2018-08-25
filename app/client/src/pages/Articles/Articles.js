// import React, { Component } from "react";
// import API from "../../utils/API";
// import Jumbotron from "../../components/Jumbotron";
// import Searches from "../../components/Searches";
// import Results from "../../components/Results";
// import Saved from "../../components/Saved";


// export default class Articles extends Component {
//     state = {
//         topic: "",
//         start: "",
//         end: "",
//         results: [],
//         none: false,
//         last: {},
//         page: 0
//     };

//     componentDidMount() {
//         this.loadArticles();
//     }
    
//     // loadArticles = () => {
//     //     API.getArticles()
//     //         .then(res => 
//     //             this.setState({ articles: res.data, title: "", img: "", date: "", url: "" })
//     //         )
//     //         .catch(err = console.log(err));
//     // };

//     saveArticle = (article) => {
//         let newArticle = {
//             title: article.headline.main,
//             img: article.img,
//             date: article.pub_date,
//             url: article.web_url
//         }
//         // API cb
//         API.saveArticle(newArticle)
//             .then(results => {
//                 let unsavedArticles = this.state.results.filter(article => article.headline.main !== newArticle.title)
//                 this.setState({ results: unsavedArticles })
//             })
//             .catch(err => console.log(err));
//     }

//     // user form input
//     handleInputChange = event => {
//         let { name, value } = event.target;
//         this.setState({ [name]: value })
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         let { topic, start, end } = this.state;
//         let query = { topic, start, end }
//         this.getArticles(query)
//     }

//     // Grabbing our articles from the NYT
//     getArticles = query => {
//         if (query.topic !== this.state.last.topic || query.start !== this.state.last.start || query.end !== this.state.last.end) {
//             this.setState({ results: [] })
//         }
//         let { topic, start, end } = query
//         let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&page=${this.state.page}`
//         const apiKey = `e81b421d0e40418e95760f57988dde8d`

//         // review this...
//         //Use regex to remove spaces to build query url
//         if (topic.indexOf(' ') >= 0) {
//             topic = topic.replace(/\s/g, '+');
//         }
//         if (topic) {
//             queryUrl += `&fq=${topic}`
//         }
//         if (start) {
//             queryUrl += `&begin_date=${start}`
//         }
//         if (end) {
//             queryUrl += `&end_date=${end}`
//         }

//         queryUrl += apiKey;
//         console.log(queryUrl)
//         API
//             .queryNYT(queryUrl)
//             .then(results => {
//                 this.setState({
//                     results: [...this.state.results, ...results.data.response.docs],
//                     previousSearch: query,
//                     topic: "",
//                     start: "",
//                     end: ""
//                 }, function () {
//                     this.state.results.length === 0 ? this.setState({ noResults: true }) : this.setState({ noResults: false })
//                 });
//             })
//             .catch(err => console.log(err))
//     }
//     newSearchResult = () => {
//         let { topic, start, end } = this.state.last;
//         let query = { topic, start, end };
//         let page = this.state.page;
//         page++;

//         this.setState({ page: page }, function() {
//             this.getArticles(query)
//         });
//     }

//     render() {
//         return (
//           <div>
//             <Jumbotron>New York Times Scraper</Jumbotron>
//             <Searches>

//             </Searches>
//             <Results></Results>
//             <Saved></Saved>
//           </div>
//         );
//       }
//     }
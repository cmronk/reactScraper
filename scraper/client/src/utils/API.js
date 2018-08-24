import axios from "axios";

export default {
    // gets our articles
    getArticles: function() {
        return axios.get("/api/articles");
    },

    // selects article by id
    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },

    // deletes article
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },

    // saves
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
}
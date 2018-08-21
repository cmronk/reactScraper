const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    date: {
        type: String,
        trim: true,
        required: true
    },
    url: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        required: false,
    },
    saved: {
        type: Boolean,
        default: false
    }
});

// may change this... method to determine if saved
ArticleSchema.methods.isSaved = function() {
    this.saved = true;
    return this.saved;
};

var Article = mongoose.model("Article", ArticleSchema);

// exporting to use
module.exports = Article;
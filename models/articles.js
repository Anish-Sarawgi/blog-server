const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({

    title : { type : String , required : true },
    snippet : { type : String , required : true},
    body : { type : String , required : true},
    likes : { type :Number , default : 0},
    views : { type :Number , default : 0}
})

const Article = mongoose.model('Article',articleSchema)
module.exports = Article;
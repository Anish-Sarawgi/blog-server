const Article = require('../models/articles');

// List all articles
const article_all = (req,res)=>{
    Article.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

// Trending articles
const article_trending = (req,res)=>{
    Article.find()
    .sort({ views : -1})
    .then(result => res.send(result));
}

// Read Article
const article_read = (req,res)=>{
    const id = req.params.id

    Article.findById(id)
    .then(result => res.send(result))
    .catch(()=> res.send('there is no article exists with this id'))

    Article.updateOne(id, {$inc: {views: 1} })
}

// Create new article
const article_post = (req,res)=>{
    const newArticle = new Article(req.body);

    newArticle.save()
    .then((data) => res.send(`Article Created. Details: ${data}`))
    .catch(err => console.log(err));
}

// Update article
const article_update =(req,res)=>{

    const updatedArticle = req.body
    const id =req.params.id

    Article.updateOne(id, { $set: updatedArticle } )
    .then(()=> res.send('Aricle Updated'))
    .catch(err => console.log(err))
}

// Delete Article
const article_delete = (req,res)=>{
    const id = req.params.id

    Article.findByIdAndDelete(id)
    .then(res.send('file deleted'))
    .catch(err => console.log(err));
}

// Like Article
const article_like = (req,res)=>{
    const id = req.params.id

    Article.updateOne(id, {$inc: {likes: 1} })
    .catch(err => console.log(err))
}

// Unlike Article
const article_unlike = (req,res)=>{
    const id = req.params.id

    Article.updateOne(id, {$inc: {likes: -1} })
    .catch(err => console.log(err))
}

module.exports ={
    article_all, article_trending,
    article_read, article_post,
    article_update, article_delete,
    article_like,  article_unlike
}

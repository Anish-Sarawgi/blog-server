const Article = require('../models/articles');

const article_all = (req,res)=>{
    Article.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const article_trending = (req,res)=>{
    Article.find()
    .sort('views')
    .then(result => res.send(result));
}

const article_read = (req,res)=>{
    const id = req.params.id

    Article.findById(id)
    .then(result => res.send(result))
    .catch(()=> res.send('there is no article with this id'))

    Article.updateOne(id, {$inc: {views: 1} })
}

const article_post = (req,res)=>{
    const newArticle = new Article(req.body);

    newArticle.save()
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
}

const article_update =(req,res)=>{

    const updatedArticle= req.body
    const id =req.params.id
    
    Article.updateOne(id, updatedArticle)
}

const article_delete = (req,res)=>{
    const id = req.params.id

    Article.findByIdAndDelete(id)
}

module.exports ={
    article_all,
    article_trending,
    article_read,
    article_post,
    article_update,
    article_delete,
}

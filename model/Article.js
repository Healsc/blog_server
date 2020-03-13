const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title:String,
    author:String,
    time:String,
    description:String,
    tags:Array,
    Introduction:String,
    types:String,
    content:String,
    articleId: Schema.Types.ObjectId,
    createDate: { type: Date, default: Date.now() }
});



// 发布模型
mongoose.model('Article', articleSchema);
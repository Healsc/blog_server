const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worksSchema = new Schema({
    title:String,
    time:String,
    description:String,
    wordId: Schema.Types.ObjectId,
    createDate: { type: Date, default: Date.now() },
    url:String,
    images:Array
});



// 发布模型
mongoose.model('Works', worksSchema);
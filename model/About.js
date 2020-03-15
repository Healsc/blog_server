const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    id: Schema.Types.ObjectId,
    name:String,
    email:String,
    qq:String,
    tel:String,
    school:String,
    schoolEN:String,
    major:String,
    aboutMe:[],
    personExperience:[],
    projectExperience:[],
    skill:[]
});


mongoose.model('About', aboutSchema);
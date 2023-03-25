const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const postSchema = new Schema({
    title: {type: String, required : true},
    description: {type: String, required : true},
    creator: {type: String, required : true},
    price: {type: String, required : true},
    creation_date: {type: String, required : true},
    last_update_date: {type: String, required : true},
    tags: {type: String, required : true},
    user : {type : Schema.Types.ObjectId, ref: "User"}
 }, {timestamps : true})

const blogModel = mongoose.model("Blog", postSchema);
module.exports = blogModel;

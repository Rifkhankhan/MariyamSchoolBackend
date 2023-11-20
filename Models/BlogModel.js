const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const BlogSchema = new Schema({      
    title : String,
    parent : String,
    child : String,
    desc : String,
    user : {
        id:String,
        name:String
    },
    image : String,
    likes:[], 
    comments: [,{
        timestamps: true  
    }]
},
{
    timestamps: true
}
);

const BlogModel = mongoose.model("blogs",BlogSchema)
module.exports = BlogModel
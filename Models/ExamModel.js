const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise
const ExamSchema = new Schema(
	{
		name:{
            type:String,
            required:true,
            unique:true
        },
        date:{
            type:Date,
            required:true,
            default:Date.now
        },
        classId:{
            type:mongoose.Schema.Types.ObjectId,

            ref:"Class",
            required:true
        },
        count:{
            type:Number,
            default:0,
            required:false
        }
	},
	{ timestamps: true }
)





module.exports =
	mongoose.models.Exam || mongoose.model('Exam', ExamSchema)

//how to center a div in css?

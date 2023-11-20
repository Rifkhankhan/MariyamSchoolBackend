const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise
const GradeSchema = new Schema(
	{
		subject:{
            type:String,
            required:true,
        },
        studentId:{
            type:mongoose.Schema.Types.ObjectId,

            ref:"Student",
            required:true
        },
        grade:{
            type:String,
            required:true
        },
        teacherId:{
            type:mongoose.Schema.Types.ObjectId,

            required:false
        },  
        examId:{
            type:mongoose.Schema.Types.ObjectId,

            required:true
        },
	},
	{ timestamps: true }
)





module.exports =
	mongoose.models.Grade || mongoose.model('Grade', GradeSchema)


const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise
const ClassSchema = new Schema(
	{
		className:{
            type:String,
            required:true,
            unique:true
        },
        classTeacherId:{
            type:mongoose.Schema.Types.ObjectId,

            ref:"Teacher",
            required:false
        },
        count:{
            type:Number,
            default:0,
            required:false
        },
        monitor:{
            type:mongoose.Schema.Types.ObjectId,

            ref:"Student",
            required:false
        }
	},
	{ timestamps: true }
)





module.exports =
	mongoose.models.Class || mongoose.model('Class', ClassSchema)

//how to center a div in css?

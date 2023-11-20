const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise
const AttendanceSchema = new Schema(
	{
		date:{
            type:Date,
            required:true,
            default:Date.now
        },
        studentId:{
            type:mongoose.Schema.Types.ObjectId,

            ref:"Student",
            required:true
        }
	},
	{ timestamps: true }
)





module.exports =
	mongoose.models.Attendance || mongoose.model('Attendance', AttendanceSchema)

//how to center a div in css?

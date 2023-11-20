const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise
const StudentSchema = new Schema(
	{
		firstName: {
			type: String,
			require: true
		},
		lastName: {
			type: String,
			require: true
		},
		mariyamSchoolUserId: String,   
		contact: {
			email: {
				type: String,
				required: false,
				unique: true,
				match:
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				address: String
			},
            zip: String,
            city: String,
            state: String,
            country: String,
            phone: {
                type: String,
                required: false,
                match: /^(?:7|0|(?:\+94))[0-9]{9,10}$/
            },
		},
        enrolledClass:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Class",
            required:true
        },
		grades:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Grade"
        }],
		attendance:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Attendance"
        }],
        rollNumber:{
            type:String,
            required:true
        },
		password: {
			type: String,
			required: false,
			minlength: 8,
			//select set to false so password doesn't come when querying automatically
			select: true
		},

		status: {
			type: Boolean,
			default: true
		},
		profilePoints: {
			type: Number,
			default: 0
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		
		profilePicture: String,
		coverPicture: String,
		bio: String,
		age: Number,
		title: String,
		
		gender: String,
		resetPasswordToken: String,
		resetPasswordExpire: Date,
		authToken: String
	},
	{ timestamps: true }
)

//this function run before saving data to database
StudentSchema.pre('save', async function (next) {
	//hashing the password
	//checking if the password is already hashed
	if (!this.isModified('password')) {
		next()
	}

	//hashing the with difficulty level 12
	this.password = await bcrypt.hash(this.password, 12)
	next()
})

//reset password token
StudentSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString('hex')

	// Hash token (private key) and save to database
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex')

	// Set token expire date
	this.resetPasswordExpire = Date.now() + 10 * (60 * 1000) // Ten Minutes

	return resetToken
}

module.exports =
	mongoose.models.Student || mongoose.model('Student', StudentSchema)

//how to center a div in css?

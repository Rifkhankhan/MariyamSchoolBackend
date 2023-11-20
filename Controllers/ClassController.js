// const User = require('../Models/Blog');
const ClassModel = require('../Models/ClassModel');
const { v4: uuid } = require('uuid');

exports.CreateClass = async (req, res, next) => {
	const newClass = new ClassModel({ 
		className:req.body.className
	});

	try {
		await newClass.save();
	} catch (err) {
		return next(err);
	}

	res.json(newClass);
};

//get all blogs
exports.getClasses = async (req, res, next) => {

	try {
		const classes = await ClassModel.find();
		res.json(classes);
	} catch (err) {
		return next(err);
	}
};


//get getClass
exports.getClass = async (req, res, next) => {
	const {id} = req.params.id

	try {
		const getClass = await ClassModel.findById(req.params.id)
		res.json(getClass);
	} catch (err) {
		return next(err);
	}
};

//get getClass
exports.updateClass = async (req, res, next) => {
	

	try {
		
		 const getClass = await ClassModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		})
		res.json(getClass);
	} catch (err) {
		return next(err);
	}
};





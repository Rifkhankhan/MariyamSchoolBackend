// const User = require('../Models/Blog');
const GradeModel = require('../Models/GradeModel');
const { v4: uuid } = require('uuid');

exports.CreateGrade = async (req, res, next) => {
	const newGrade = new GradeModel({ 
		subject:req.body.subject,
		studentId:req.body.studentId,
		grade:req.body.grade,
		examId:req.body.examId
	});

	try {
		await newGrade.save();
	} catch (err) {
		return next(err);
	}

	res.json(newGrade);
};

//get all blogs
exports.getGrades = async (req, res, next) => {

	try {
		const Grades = await GradeModel.find();
		res.json(Grades);
	} catch (err) {
		return next(err);
	}
};


//get getGrade
exports.getGrade = async (req, res, next) => {
	const {id} = req.params.id

	try {
		const getGrade = await GradeModel.findById(req.params.id)
		res.json(getGrade);
	} catch (err) {
		return next(err);
	}
};

//get getGrade
exports.updateGrade = async (req, res, next) => {
	

	try {
		
		 const getGrade = await GradeModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		})
		res.json(getGrade);
	} catch (err) {
		return next(err);
	}
};





// const User = require('../Models/Blog');
const ExamModel = require('../Models/ExamModel');
const { v4: uuid } = require('uuid');

exports.CreateExam = async (req, res, next) => {
	const newExam = new ExamModel({ 
		name:req.body.name,
		date:req.body.date,
		classId:req.body.classId
	});

	try {
		await newExam.save();
	} catch (err) {
		return next(err);
	}

	res.json(newExam);
};

//get all blogs
exports.getExams = async (req, res, next) => {

	try {
		const Exams = await ExamModel.find();
		res.json(Exams);
	} catch (err) {
		return next(err);
	}
};


//get getExam
exports.getExam = async (req, res, next) => {
	const {id} = req.params.id

	try {
		const getExam = await ExamModel.findById(req.params.id)
		res.json(getExam);
	} catch (err) {
		return next(err);
	}
};

//get getExam
exports.updateExam = async (req, res, next) => {
	

	try {
		
		 const getExam = await ExamModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		})
		res.json(getExam);
	} catch (err) {
		return next(err);
	}
};





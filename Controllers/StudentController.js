// const User = require('../Models/Blog');
const GradeModel = require('../Models/GradeModel')
const StudentModel = require('../Models/Student')
const { v4: uuid } = require('uuid')

exports.CreateStudent = async (req, res, next) => {
	const newStudent = new StudentModel({
		...req.body
	})
	console.log(newStudent)

	try {
		await newStudent.save()
	} catch (err) {
		return next(err)
	}

	res.json(newStudent)
}

//get all blogs
exports.getStudents = async (req, res, next) => {
	try {
		const students = await StudentModel.find()
		res.json(students)
	} catch (err) {
		return next(err)
	}
}

//get getClass  
exports.getStudent = async (req, res, next) => {
	const { id } = req.params.id

	try {
		const student = await StudentModel.findById(req.params.id)  
			.populate('enrolledClass')
			.populate('grades')
			// .populate('attendance')
		// const grades = await GradeModel.find({studentId:id})
		res.json(student)
	} catch (err) {
		return next(err)
	}
}

//get getClass
exports.updateStudent = async (req, res, next) => {
	try {
		const student = await StudentModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true
			}
		)
		res.json(student)
	} catch (err) {
		return next(err)
	}
}


//push grade
exports.pushGrade = async (req, res, next) => {
	console.log(req.body.gradeId);
	console.log(req.params.id);
	try {
		const student = await StudentModel.findById(req.params.id)
		
		if (!student.grades.includes(req.body.gradeId)) {
			await student.updateOne({ $push: { grades: req.body.gradeId  } });
			
			res.status(403).json('Grade Pushed!');

		} else {
			res.status(403).json('Grade already Pushed!');
		}
		res.json(student)
	} catch (err) {
		return next(err)
	}
}

//push attendance
exports.pushAttendance = async (req, res, next) => {
	try {
		const student = await StudentModel.findById(req.params.id)
		
		if (!student.attendance.includes(req.body.attendanceId)) {
			await student.updateOne({ $push: { grades: req.body.attendanceId  } });
			
			res.status(403).json('Attendance Pushed!');

		} else {
			res.status(403).json('Attendance already Pushed!');
		}
		res.json(student)
	} catch (err) {
		return next(err)
	}
}
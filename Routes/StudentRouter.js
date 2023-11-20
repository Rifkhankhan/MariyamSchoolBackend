const router = require('express').Router();  

const { CreateStudent, updateStudent, getStudents, getStudent, pushGrade, pushAttendance } = require('../Controllers/StudentController.js');


//add new request
router.post('/', CreateStudent); 
router.put('/:id', pushGrade); 
router.put('/:id', pushAttendance); 
router.put('/:id', updateStudent);  
router.get('/', getStudents);
router.get('/:id', getStudent); 

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  
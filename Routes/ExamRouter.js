const router = require('express').Router();  
const {CreateExam,getExam,getExams, updateExam
    } = require('../Controllers/ExamController.js');


//add new request
router.post('/', CreateExam); 
router.put('/:id', updateExam);  
router.get('/', getExams);
router.get('/:id', getExam);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  
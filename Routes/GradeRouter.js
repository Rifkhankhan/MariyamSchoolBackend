const router = require('express').Router();  
const {CreateGrade,getGrade,getGrades, updateGrade
    } = require('../Controllers/GradeController.js');


//add new request
router.post('/', CreateGrade); 
router.put('/:id', updateGrade);  
router.get('/', getGrades);
router.get('/:id', getGrade);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  
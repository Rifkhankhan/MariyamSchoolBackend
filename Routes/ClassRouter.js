const router = require('express').Router();  
const {CreateClass,getClass,getClasses, updateClass
    } = require('../Controllers/ClassController.js');


//add new request
router.post('/', CreateClass); 
router.put('/:id', updateClass);  
router.get('/', getClasses);
router.get('/:id', getClass);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  
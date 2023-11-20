const router = require('express').Router();  
const {CreateBlog,likeBlog,
    updateBlog,getBlogs,getBlog,deleteBlog,pushComment,getComments,disLikeBlog, toggleLikeBlog
    } = require('../Controllers/BlogController.js');
var fileUpload = require('../Middleware/file-upload.js');
const {
	usersignup,
	usersignin,
	autoLogin,forgotPassword, resetPassword,googleLogin,googleSignup
} = require('../Controllers/usercontroller.js')

//add new request
router.post('/', CreateBlog); 
// router.put('/:id', updateBlog);  
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/comment', pushComment);
router.get('/comment', getComments);
// router.delete('/:id', deleteBlog);  
router.put('/toggleLike', toggleLikeBlog);
  

router.post('/login', usersignin);
router.post('/signup', usersignup);
router.put('/google', googleLogin);
router.put('/googleSignup', googleSignup);
router.post('/autologin', autoLogin);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword', resetPassword);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  
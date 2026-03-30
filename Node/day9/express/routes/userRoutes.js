const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/users', userController.getUsers);
// router.post('/users', userController.createUser);

//These routes can also be written in this way
router
    .route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);


// route.get('/users/:id', userController.getUserById);
// route.post('/users/login',userController.login);
// route.get('/user/:id', userController.getUserById1);
// route.get('/search', userController.searchUser);
// route.get('/check', userController.checkHeader);


module.exports = router;
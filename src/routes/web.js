const express = require('express');
const router = express.Router();
const { getHomePage, getSamplePage, createUser, getUserAddingPage, getUpdatePage, deleteUser } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/add-user', getUserAddingPage);
router.get('/qna', getSamplePage);

router.post('/create-user', createUser);
router.delete('/delete-user/:userId', deleteUser);
router.get('/update/:userId', getUpdatePage);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getHomePage, getSamplePage, createUser, getUserAddingPage, getUpdatePage } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/add-user', getUserAddingPage);
router.get('/qna', getSamplePage);

router.post('/create-user', createUser);
router.get('/update/:userId', getUpdatePage);

module.exports = router;
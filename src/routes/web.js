const express = require('express');
const router = express.Router();
const { getHomePage, getSamplePage, createUser, getUserAddingPage } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/add-user', getUserAddingPage);
router.get('/qna', getSamplePage);

router.post('/create-user', createUser);

module.exports = router;
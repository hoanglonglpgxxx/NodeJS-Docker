const express = require('express');
const router = express.Router();
const { getHomePage, getSamplePage, createUser } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/qna', getSamplePage);

router.post('/create-user', createUser);

module.exports = router;
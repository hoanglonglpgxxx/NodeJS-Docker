const express = require('express');
const router = express.Router();
const { getHomePage, getSamplePage } = require('../controllers/homeController');

router.get('/', getHomePage);
router.get('/qna', getSamplePage);

module.exports = router;
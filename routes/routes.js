const express = require( 'express');

const { signup, login, isAuth } = require( '../controllers/auth.js');

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

module.exports = router;
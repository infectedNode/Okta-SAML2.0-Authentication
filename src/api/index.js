const express = require('express');
const passport = require('passport');
const router = express.Router();

const { session, accessHeaders, passportAuth } = require('./middlewares');
const { home, user } = require('./routes');

require('./../config/passport');

router.use(session);
router.use(passport.initialize());
router.use(passport.session());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(accessHeaders);

router.get('/', home);
router.get('/login', passportAuth);
router.post('/login/callback', passportAuth);
router.get('/user', user);

module.exports = router;
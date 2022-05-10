const express = require('express');
const router = express.Router();
const passport = require('passport');

const {session} = require('./middlewares');

require('./../config/passport');

router.use(session);
router.use(passport.initialize());
router.use(passport.session());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('origin'));
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }

  next();
});

router.get('/', (req, res) => {
  
  // Testing Sesisons
  if(req.session.variableName) {
    req.session.variableName.visited++;
  } else {
    req.session.variableName = {
      visited : 1
    };
  }
  console.log(req.session);
  console.log(req.sessionID);

  res.send("Hello from API server 😵");
});

module.exports = router;
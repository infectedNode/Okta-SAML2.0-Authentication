const express = require("express");
const router = express.Router();

const {session} = require('./middlewares');

require('./../config/passport');

router.use(session);

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
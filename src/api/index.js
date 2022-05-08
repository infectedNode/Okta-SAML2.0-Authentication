const express = require("express");
const session = require('express-session');

const router = express.Router();

router.use(session({
  secret: "never-stop-learning",
  name: "user-session",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 30},
}));

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
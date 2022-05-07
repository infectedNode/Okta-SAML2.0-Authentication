const express = require('express');

const {port} = require('./config');


(async function() {
  try{

    const app = express();

    app.get('/', (req, res) => {
      res.send("Hello from server...👋");
    })

    app.listen(port, () => {
      console.log(`🥳 Server started listening on port : ${port}`);
    });
  } catch(e) {
    console.log(`⚠️  ${e.message} ⚠️`);
    process.exit(1);
  }
})();
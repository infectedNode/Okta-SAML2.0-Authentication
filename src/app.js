const express = require('express');

(async function() {
  try{
    const {port} = require('./config');
    const api = require('./api');
    
    const app = express();

    app.use('/api', api);

    app.listen(port, () => {
      console.log(`🥳 Server started listening on port : ${port}`);
    });
  } catch(e) {
    console.log(`🤯 ${e.message}`);
    process.exit(1);
  }
})();
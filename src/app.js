const express = require('express');

(async function() {
  try{
    const {port} = require('./config');
    const api = require('./api');
    const errorHandler = require('./error');
    
    const app = express();

    app.use('/', api);
    app.use(errorHandler);

    app.listen(port, () => {
      console.log(`🥳 Server started listening on port : ${port}`);
    });
  } catch(e) {
    console.log(`🤯 ${e.message}`);
    process.exit(1);
  }
})();
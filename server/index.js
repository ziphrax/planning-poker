const express = require('express');
const port = process.env.port || 3001;

const app = express();

const router = require('./router');

app.use("/", router);

app.listen(port,(err) => {
    if(err){
        console.log(err);
    }

    console.log('server listening on port %s', port);
})
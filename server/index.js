const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.port || 3000;

const app = express();
const router = require('./router');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('public'));
app.use("/api", router);

app.listen(port,(err) => {
    if(err){
        console.log(err);
    }

    console.log('server listening on port %s', port);
})
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.port || 80;

const app = express();
const router = require('./router');
const healthCheck = require('./health-check');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/health-check',healthCheck);
app.use("/api", router);

app.use(express.static('public'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
    }

    console.log('server listening on port %s', port);
})
//express
const express = require('express');
const app = express();

//json 
const cors = require('cors');
app.use(cors())
app.use(express.json());

//server
const { port, start } = require("./modules/server");
app.listen(port, start());

//tasks routes
app.use('/api', require('./routes/tasks.api.routes'))

//users routes
app.use('/api', require('./routes/users.api.routes'))


//EXPRESS
const express = require('express');
const app = express();

//JSON
const cors = require('cors');
app.use(cors())
app.use(express.json());

//SERVER
const { port, start } = require("./modules/server");
app.listen(port, start());


//ROUTES
//tasks
app.use('/api', require('./routes/tasks.api.routes'))
//users routes
app.use('/api', require('./routes/users.api.routes'))


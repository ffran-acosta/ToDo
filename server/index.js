const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())
app.use(express.json());

const { port, start } = require("./modules/server");
app.listen(port, start());


app.use('/api', require('./routes/db.api.routes'))


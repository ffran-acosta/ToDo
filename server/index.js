const express = require('express');
const app = express();

const { port, start } = require("./modules/server");
app.listen(port, start());

app.use(require('./routes/api.routes'))
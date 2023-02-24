const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.TD_USER,
    host: process.env.TD_HOST,
    database: process.env.TD_DATABASE,
    password: process.env.TD_PASSWORD,
    port: process.env.TD_PORT,
})

module.exports = pool
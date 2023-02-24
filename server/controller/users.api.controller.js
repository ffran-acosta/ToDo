// const pool = require('../database/dbClient')
const pool = require('../database/dbRailway')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const controller = {
    
    users: async (req, res) => {      
        try {
            const users = await pool.query('SELECT * FROM users')
            return res.status(200).json({
                data: users.rows,
                status: 200
            })
        } catch (error) {
            console.error(error)
        }
    },

    register: async (req, res) => {
        const { email, password } = req.body
        const hash = bcryptjs.hashSync(password, 10)
        if(email){
            try {
                await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2)`, [email, hash])
                const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
                res.json({ email, token })
            } catch (err) {
                if (err) {
                    res.json({ detail: err.detail })
                }
            }
        } else {
            console.log('No User')
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const login = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
            if(!login.rows.length) return res.json({detail: 'User does not exist'})
            const success = await bcryptjs.compare(password, login.rows[0].hashed_password)
            const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})
            if(success){
                res.json({'email': login.rows[0].email, token})
                console.log("Login successful");
            }else{
                res.json({details: 'Login failed'})
            }
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = controller

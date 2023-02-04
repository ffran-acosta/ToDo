const pool = require('../database/dbClient')
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
    singup: async (req, res) => {
        const { email, password } = req.body
        let hash = bcryptjs.hashSync(password, 10)
        try {
            const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2)`, [email, hash])
            const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})
            res.json({ email, token})
        } catch (err) {
            console.error(err)
            if (err) {
                res.json({ detail: err.detail })
            }
        }
    },
    login: async (req, res) => {

        const { email, password } = req.body
        try {
            const login = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])

            if(!login.rows.length) return res.json({detail: 'User does not exist'})
            
            const success = await bcryptjs.compare(password, login.rows[0].hashed_password)
            const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

            if(success){
                res.json({'email': login.rows[0].email, token})
            }else{
                res.json({details: 'Login failed'})
            }

        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = controller

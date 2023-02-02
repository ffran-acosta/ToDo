const pool = require('../database/dbClient')

const controller = {
    home: (req, res) => {
        res.send('asd')
    },
    tasks: async (req, res) => {
        const {userEmail} = req.params
        try {
            const tasks = await pool.query('SELECT * FROM tasks WHERE user_email = $1', [userEmail])
            return res.status(200).json({
                data: tasks.rows,
                status: 200
            })
        } catch (error) {
            console.error(error)
        }
    },
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
    // prueba: async (req, res) => {
    // },
}
module.exports = controller;
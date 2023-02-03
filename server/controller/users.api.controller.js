const pool = require('../database/dbClient')

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
}

module.exports = controller

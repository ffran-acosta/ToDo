const pool = require('../database/dbClient')
const { v4: uuidv4 } = require('uuid')

const controller = {

    tasks: async (req, res) => {
        try {
            const tasks = await pool.query('SELECT * FROM tasks')
            return res.status(200).json({
                data: tasks.rows,
                status: 200
            })
        } catch (error) {
            console.error(error)
        }
    },

    tasksUser: async (req, res) => {
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

    saveTask: async (req, res) => {
        const {user_email, title, progress, date} = req.body
        // const id = uuidv4()
        // console.log(user_email, title, progress, date)
        try {
            const newTask = await pool.query(`INSERT INTO tasks(user_email, title, progress, date) VALUES($1, $2, $3, $4)`, [user_email, title, progress, date])
            res.json(newTask)
        } catch (error) {
            console.log(error)
        }
    },

    editTask: async (req, res) => {
        const {id} = req.params
        const {user_email, title, progress, date} = req.body
        try {
            const edit = await pool.query('UPDATE tasks SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', [user_email, title, progress, date, id])
            res.json(edit)
        } catch (error) {
            console.log(error)
        }
    }, 

    deleteTask: async (req, res) => {
        const {id} = req.params
        try {
            const deleteTask = await pool.query('DELETE FROM tasks WHERE id = $1', [id])
            res.json(deleteTask)
        } catch (error) {
            console.log(error)
        }
    }

    // prueba: async (req, res) => {
    // },
}
module.exports = controller;
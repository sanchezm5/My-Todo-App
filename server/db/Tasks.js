const Sequelize = require('sequelize')
const db = require('./db')

const Tasks = db.define('tasks', {
    task: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    dueDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
            notEmpty: true
        }
    },
    notes: {
        type: Sequelize.TEXT('medium')
    }
})

module.exports = Tasks

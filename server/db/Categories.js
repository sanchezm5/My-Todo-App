const Sequelize = require('sequelize')
const db = require('./db')

const Categories = db.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '/defaultTaskImg.png'
    }
})

module.exports = Categories

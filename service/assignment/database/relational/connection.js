/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize')

const connection = new Sequelize('sanbercode1', 'testing', '', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
})


module.exports = {connection}

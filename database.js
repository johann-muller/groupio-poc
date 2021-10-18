'use strict'

const Mongoose = require('mongoose')
const Chalk = require('chalk')
const dbURL = require('./config/config.json').MONGO_DETAILS.DB_POC_URL
const Enums = require('./utils/enums').getEnums()

// Define Colours
const connected = Chalk.bold.cyan
const error = Chalk.bold.yellow
const disconnected = Chalk.bold.red
const terminated = Chalk.bold.magenta

module.exports = () => {
  Mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true })

  Mongoose.connection.on(Enums.MONGOOSE.CONNECTION.STATUSES.CONNECTED, () => {
    console.log(connected(Enums.MONGOOSE.CONNECTION.MESSAGES.CONNECTED))
  })

  Mongoose.connection.on(Enums.MONGOOSE.CONNECTION.STATUSES.ERROR, (err) => {
    console.log(error(Enums.MONGOOSE.CONNECTION.MESSAGES.ERROR + err))
  })

  Mongoose.connection.on(Enums.MONGOOSE.CONNECTION.STATUSES.DISCONNECTED, () => {
    console.log(disconnected(Enums.MONGOOSE.CONNECTION.MESSAGES.DISCONNECTED))
  })

  process.on('SIGINT', () => {
    Mongoose.connection.close(() => {
      console.log(terminated(Enums.MONGOOSE.CONNECTION.MESSAGES.TERMINATED))
      process.exit(0)
    })
  })
}

'use strict'

require('./database')()
const Express = require('express')
const App = Express()
const Helmet = require('helmet')
const Http = require('http')
const BodyParser = require('body-parser')
const Morgan = require('morgan')
const Cors = require('cors')
const Compression = require('compression')

const Globals = require('./utils/globals').getGlobals()
const Router = require('./router')

App.use(Compression())
App.use(Helmet())

App.use(Morgan('dev'))
App.use(Cors())

App.use(BodyParser.text({ limit: Globals.config.bodyParser.limit }))
App.use(BodyParser.json({ limit: Globals.config.bodyParser.limit }))

Router(App)

Router(App)

// Server Setup
const port = process.env.PORT || Globals.config.serverPort
const server = Http.createServer(App)

server.listen(port, () => {
  console.log('Groupio is up and Running! Listening on: ', port)
})

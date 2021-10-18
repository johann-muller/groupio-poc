'use strict'

const Enums = require('./utils/enums').getEnums()
const UserController = require('./controllers/user')
const ChatController = require('./controllers/chat')

module.exports = (app) => {
  // Used to Ping the Groupio server
  app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send(`Welcome, you have found your way to ${Enums.general.APP_NAME}`)
  })

  app.get('/marco', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.send('Polo!')
  })

  // USER CRUD
  app.get(Enums.ENDPOINTS.USER.CRUD, UserController.readUser)
  app.post(Enums.ENDPOINTS.USER.CRUD, UserController.createUser)
  app.put(Enums.ENDPOINTS.USER.CRUD, UserController.updateUser)
  app.delete(Enums.ENDPOINTS.USER.CRUD, UserController.deleteUser)

  // CHAT CRUD
  app.get(Enums.ENDPOINTS.CHAT.CRUD, ChatController.readChat)
  app.post(Enums.ENDPOINTS.CHAT.CRUD, ChatController.createChat)
  app.put(Enums.ENDPOINTS.CHAT.CRUD, ChatController.updateChat)
  app.delete(Enums.ENDPOINTS.CHAT.CRUD, ChatController.deleteChat)
}

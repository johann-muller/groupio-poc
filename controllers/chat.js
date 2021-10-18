'use strict'

const Enums = require('../utils/enums').getEnums()
const Chats = require('../models/chat')
const ObjectTemplates = require('../utils/object-templates')
const Utils = require('../utils/utilities')

const createChat = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()

  // let headers = null
  let body = null
  let errMsg = null

  try {
    // headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.CHAT.CRUD, Enums.METHODS.CREATE)
    body = await _validateBodyData(req.body, Enums.ENDPOINTS.CHAT.CRUD, Enums.METHODS.CREATE)

    apiResponse.result = await Chats.create([body])

    Utils.prepareApiResponse(req, res, apiResponse)
  } catch (err) {
    if (err.code === 11000) {
      errMsg = Enums.MONGOOSE.DUPLICATE_KEY
    } else {
      errMsg = err.stack || err.message || err
    }
    Utils.handleServerError(req, res, apiResponse, errMsg, true)
  }
}

const readChat = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()

  // let headers = null

  try {
    // headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.CHAT.CRUD, Enums.METHODS.READ)

    apiResponse.result = await Chats.find()

    Utils.prepareApiResponse(req, res, apiResponse)
  } catch (err) {
    Utils.handleServerError(req, res, apiResponse, err, true)
  }
}

const updateChat = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()
  const QUERY_OPTIONS = { new: true, upsert: false }

  let headers = null
  let body = null

  try {
    headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.CHAT.CRUD, Enums.METHODS.UPDATE)
    body = await _validateBodyData(req.body, Enums.ENDPOINTS.CHAT.CRUD, Enums.METHODS.UPDATE)

    apiResponse.result = await Chats.findByIdAndUpdate(headers._id, body, QUERY_OPTIONS)

    Utils.prepareApiResponse(req, res, apiResponse)
  } catch (err) {
    Utils.handleServerError(req, res, apiResponse, err, true)
  }
}

const deleteChat = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()

  let headers = null

  try {
    headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.CHAT.CRUD, Enums.METHODS.DELETE)

    apiResponse.result = await Chats.findByIdAndDelete(headers._id)

    if (apiResponse.result) {
      apiResponse.result = true
    } else {
      apiResponse.result = false
    }

    Utils.prepareApiResponse(req, res, apiResponse)
  } catch (err) {
    Utils.handleServerError(req, res, apiResponse, err, true)
  }
}

// PRIVATE VALIDATION FUNCTIONS
const _validateHeaderData = async (data, route, type) => { // TODO: Actually do validation at some point
  return new Promise((resolve, reject) => {
    (async () => {
      resolve(data)
    })()
  })
}

const _validateBodyData = async (data, route, type) => { // TODO: Actually do validation at some point
  return new Promise((resolve, reject) => {
    (async () => {
      resolve(data)
    })()
  })
}

exports.createChat = createChat
exports.readChat = readChat
exports.updateChat = updateChat
exports.deleteChat = deleteChat

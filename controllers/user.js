'use strict'

const Enums = require('../utils/enums').getEnums()
const Users = require('../models/user')
const ObjectTemplates = require('../utils/object-templates')
const Utils = require('../utils/utilities')

const createUser = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()

  // let headers = null
  let body = null
  let errMsg = null

  try {
    // headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.USER.CRUD, Enums.METHODS.CREATE)
    body = await _validateBodyData(req.body, Enums.ENDPOINTS.USER.CRUD, Enums.METHODS.CREATE)

    apiResponse.result = await Users.create([body])
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

const readUser = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()

  // let headers = null

  try {
    // headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.USER.CRUD, Enums.METHODS.READ)

    apiResponse.result = await Users.find()

    Utils.prepareApiResponse(req, res, apiResponse)
  } catch (err) {
    Utils.handleServerError(req, res, apiResponse, err, true)
  }
}

const updateUser = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()
  const QUERY_OPTIONS = { new: true, upsert: false }

  let headers = null
  let body = null

  try {
    headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.USER.CRUD, Enums.METHODS.UPDATE)
    body = await _validateBodyData(req.body, Enums.ENDPOINTS.USER.CRUD, Enums.METHODS.UPDATE)

    apiResponse.result = await Users.findByIdAndUpdate(headers._id, body, QUERY_OPTIONS)

    Utils.prepareApiResponse(req, res, apiResponse)
  } catch (err) {
    Utils.handleServerError(req, res, apiResponse, err, true)
  }
}

const deleteUser = async (req, res) => {
  const apiResponse = ObjectTemplates.getApiResponse()

  let headers = null

  try {
    headers = await _validateHeaderData(req.headers, Enums.ENDPOINTS.USER.CRUD, Enums.METHODS.DELETE)

    apiResponse.result = await Users.findByIdAndDelete(headers._id)

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

exports.createUser = createUser
exports.readUser = readUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser

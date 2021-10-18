'use strict'

const Moment = require('moment')

const Enums = require('./enums').getEnums()

const prepareApiResponse = (req, res, apiResponse) => {
  let tempResponse = null

  try {
    if (apiResponse.isError && apiResponse.code !== 200) {
      tempResponse = {
        code: apiResponse.code,
        error: apiResponse.error,
        isError: Enums.BOOLEAN.TRUE
      }
    } else {
      tempResponse = {
        code: apiResponse.code,
        result: apiResponse.result,
        isError: Enums.BOOLEAN.FALSE
      }
    }

    res.set('Content-Type', apiResponse.contentType)
    res.status(apiResponse.code).send(tempResponse)
  } catch (err) {
    logErrors(err)
  }
}

const logErrors = (err) => {
  console.error(err.stack ? err.stack : err)
}

const handleServerError = (req, res, apiResponse, error = '', printError = true) => {
  if (printError) console.error(error.stack || error.message || error)

  if (apiResponse.code === 200) apiResponse.code = Enums.STATUS_CODES.ERROR

  apiResponse.error = error.stack || error.message || error
  apiResponse.isError = true

  prepareApiResponse(req, res, apiResponse)
}

const setTransactionalInformation = async (transactionalData, type, user) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const date = Moment().format('YYYY/MM/DD HH:mm:ss')

      try {
        if (type === Enums.TRANSACTIONAL_INFO_PROPS.BOTH || type === Enums.TRANSACTIONAL_INFO_PROPS.CREATED) {
          transactionalData[`${Enums.TRANSACTIONAL_INFO_PROPS.CREATED}At`] = date
          transactionalData[`${Enums.TRANSACTIONAL_INFO_PROPS.CREATED}By`] = user.email

          transactionalData[`${Enums.TRANSACTIONAL_INFO_PROPS.MODIFIED}At`] = date
          transactionalData[`${Enums.TRANSACTIONAL_INFO_PROPS.MODIFIED}By`] = user.email
        } else {
          transactionalData[`${type}At`] = date
          transactionalData[`${type}By`] = user.email
        }

        resolve(transactionalData)
      } catch (err) {
        reject(err)
      }
    })()
  })
}

exports.prepareApiResponse = prepareApiResponse
exports.handleServerError = handleServerError
exports.logErrors = logErrors
exports.setTransactionalInformation = setTransactionalInformation

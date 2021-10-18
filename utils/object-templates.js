'use strict'

const Enums = require('../utils/enums').getEnums()
const Utils = require('../utils/utilities')

let transactionalInformation = { createdAt: Enums.VALUES.EMPTY_STRING, createdBy: Enums.VALUES.EMPTY_STRING, modifiedAt: Enums.VALUES.EMPTY_STRING, modifiedBy: Enums.VALUES.EMPTY_STRING }

// Users' Object Templates
exports.getUserSchema = () => {
  return {
    userData: {
      email: Enums.VALUES.EMPTY_STRING,
      cellNumber: Enums.VALUES.EMPTY_STRING,
      firstName: Enums.VALUES.EMPTY_STRING,
      surname: Enums.VALUES.EMPTY_STRING,
      username: Enums.VALUES.EMPTY_STRING,
      password: Enums.VALUES.EMPTY_STRING
    },
    profileData: {
      score: Enums.VALUES.ZERO_NUMBER,
      likes: Enums.VALUES.EMPTY_ARRAY,
      interests: Enums.VALUES.EMPTY_ARRAY,
      bio: Enums.VALUES.EMPTY_STRING,
      pictures: Enums.VALUES.EMPTY_ARRAY,
      songs: Enums.VALUES.EMPTY_ARRAY,
      comments: Enums.VALUES.EMPTY_ARRAY
    },
    chatHistories: Enums.VALUES.EMPTY_ARRAY,
    transactionalInformation
  }
}

exports.getProfileDataCommentsSchema = async (user) => {
  transactionalInformation = await Utils.setTransactionalInformation(transactionalInformation, Enums.TRANSACTIONAL_INFO_PROPS.BOTH, user)

  return {
    body: Enums.VALUES.EMPTY_STRING,
    rating: Enums.VALUES.ZERO_NUMBER,
    username: Enums.VALUES.EMPTY_STRING,
    transactionalInformation
  }
}

// Chats' Object Templates
exports.getChatSchema = async (user) => {
  transactionalInformation = await Utils.setTransactionalInformation(transactionalInformation, Enums.TRANSACTIONAL_INFO_PROPS.BOTH, user)

  return {
    chatData: {
      chatType: Enums.CHAT_TYPES.GROUP,
      name: Enums.VALUES.EMPTY_STRING,
      description: Enums.VALUES.EMPTY_STRING,
      messages: Enums.VALUES.EMPTY_ARRAY
    },
    transactionalInformation
  }
}

// Utilities' Object Templates
exports.getTransactionalInformation = async (user) => {
  return await Utils.setTransactionalInformation(transactionalInformation, Enums.TRANSACTIONAL_INFO_PROPS.BOTH, user)
}

exports.getApiResponse = () => {
  return {
    code: Enums.STATUS_CODES.SUCCESS,
    error: Enums.VALUES.EMPTY_STRING,
    result: Enums.VALUES.EMPTY_OBJECT,
    contentType: Enums.CONTENT_TYPES.JSON,
    isError: Enums.BOOLEAN.FALSE
  }
}

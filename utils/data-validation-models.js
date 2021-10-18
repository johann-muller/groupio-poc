'use strict'

const Enums = require('./enums').getEnums()

exports.getUserValidationObject = () => {
  return {
    userData: {
      email: { type: Enums.DATA_TYPES.STRING, required: true, unique: true },
      cellNumber: { type: Enums.DATA_TYPES.STRING, required: true, unique: true },
      firstName: { type: Enums.DATA_TYPES.STRING, required: true },
      surname: { type: Enums.DATA_TYPES.STRING, required: true },
      username: { type: Enums.DATA_TYPES.STRING, required: true, unique: true },
      password: { type: Enums.DATA_TYPES.STRING, required: true }
    },
    profileData: {
      likes: [{ type: Enums.DATA_TYPES.STRING, lowercase: true, trim: true }],
      interests: [{ type: Enums.DATA_TYPES.STRING }],
      bio: { type: Enums.DATA_TYPES.STRING, max: 250 },
      pictures: [], // TODO: Check how we are going to verify these
      songs: [], // TODO: Check how we are going to verify these
      comments: [{
        body: { type: Enums.DATA_TYPES.STRING, max: 200 },
        rating: { type: Enums.DATA_TYPES.NUMBER, max: 10, min: 1 },
        username: { type: Enums.DATA_TYPES.STRING, required: true }, // TODO: Verify that these are ids in the future
        createdAt: { required: true }, // TODO: Verify that these are dates in future
        createdBy: { type: Enums.DATA_TYPES.STRING, required: true },
        modifiedAt: { required: true }, // TODO: Verify that these are dates in future
        modifiedBy: { type: Enums.DATA_TYPES.STRING, required: true }
      }]
    },
    chatHistories: [], // TODO: Verify that these are ids in the future
    groupedGroups: [{
      uid: { type: Enums.DATA_TYPES.STRING, required: true }, // TODO: Verify that these are ids in the future
      score: { type: Enums.DATA_TYPES.NUMBER, required: true }
    }],
    groups: [{
      uid: { type: Enums.DATA_TYPES.STRING, required: true }, // TODO: Verify that these are ids in the future
      score: { type: Enums.DATA_TYPES.NUMBER, required: true }
    }],
    transactionalInformation: {
      createdAt: { required: true /* type: Enums.DATA_TYPES.DATE */ }, // TODO: Verify that these are dates in future
      createdBy: { type: Enums.DATA_TYPES.STRING, required: true },
      modifiedAt: { required: true /* type: Enums.DATA_TYPES.DATE */ }, // TODO: Verify that these are dates in future
      modifiedBy: { type: Enums.DATA_TYPES.STRING, required: true }
    }
  }
}

exports.getChatValidationObject = () => {
  return {
    chatData: {
      chatType: { type: Enums.DATA_TYPES.STRING, required: true, options: [Enums.CHAT_TYPES.DIRECT, Enums.CHAT_TYPES.GROUP, Enums.CHAT_TYPES.GROUPED_GROUP] },
      name: { type: Enums.DATA_TYPES.STRING, required: true },
      description: { type: Enums.DATA_TYPES.STRING },
      messages: [{
        body: { type: Enums.DATA_TYPES.STRING },
        user: { type: Enums.DATA_TYPES.STRING, required: true }, // TODO: Verify that these are ids in future
        media: { type: Enums.DATA_TYPES.STRING } // TODO: Verify that these are ids in future
      }]
    },
    users: [{ type: Enums.DATA_TYPES.STRING }], // TODO: Verify that these are ids in future
    transactionalInformation: {
      createdAt: { required: true /* type: Enums.DATA_TYPES.DATE */ }, // TODO: Verify that these are dates in future
      createdBy: { type: Enums.DATA_TYPES.STRING, required: true },
      modifiedAt: { required: true /* type: Enums.DATA_TYPES.DATE */ }, // TODO: Verify that these are dates in future
      modifiedBy: { type: Enums.DATA_TYPES.STRING, required: true }
    }
  }
}

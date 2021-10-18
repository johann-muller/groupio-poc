const Mongoose = require('mongoose')
const Enums = require('../utils/enums').getEnums()
const Schema = Mongoose.Schema

const ChatSchema = new Schema(
  {
    chatData: {
      chatType: { type: String, required: true, enum: [Enums.CHAT_TYPES.DIRECT, Enums.CHAT_TYPES.GROUP, Enums.CHAT_TYPES.GROUPED_GROUP] },
      name: { type: String, required: true },
      description: { type: String },
      messages: [{
        body: { type: String },
        user: { type: Schema.Types.ObjectId },
        media: { type: Schema.Types.ObjectId }
      }]
    },
    transactionalInformation: {
      createdAt: { type: Date, default: Date.now, required: true },
      createdBy: { type: String, required: true },
      modifiedAt: { type: Date, default: Date.now, required: true },
      modifiedBy: { type: String, required: true }
    }
  }
)

ChatSchema.index({ 'chatData.chatType': 1 })

const ChatModel = Mongoose.model(Enums.COLLECTIONS.CHATS.NAME, ChatSchema)

module.exports = ChatModel

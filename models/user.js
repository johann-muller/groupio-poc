const Mongoose = require('mongoose')
const Enums = require('../utils/enums').getEnums()
const Schema = Mongoose.Schema

const UserSchema = new Schema(
  {
    userData: {
      email: { type: String, required: true, unique: true },
      cellNumber: { type: String, required: true, unique: true },
      firstName: { type: String, required: true },
      surname: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true }
    },
    profileData: {
      score: { type: Number },
      likes: [{ type: String, lowercase: true, trim: true }],
      interests: [String],
      bio: { type: String, max: 250 },
      pictures: [Schema.Types.Mixed],
      songs: [Schema.Types.Mixed],
      comments: [{
        body: { type: String, max: 200 },
        rating: { type: Number, max: 10, min: 1 },
        username: { type: Schema.Types.ObjectId, required: true },
        transactionalInformation: {
          createdAt: { type: Date, default: Date.now, required: true },
          createdBy: { type: String, required: true },
          modifiedAt: { type: Date, default: Date.now, required: true },
          modifiedBy: { type: String, required: true }
        }
      }]
    },
    chatHistories: [Schema.Types.ObjectId],
    transactionalInformation: {
      createdAt: { type: Date, default: Date.now, required: true },
      createdBy: { type: String, required: true },
      modifiedAt: { type: Date, default: Date.now, required: true },
      modifiedBy: { type: String, required: true }
    }
  }
)

UserSchema.index({ 'userData.email': 1 })

const UserModel = Mongoose.model(Enums.COLLECTIONS.USERS.NAME, UserSchema)

module.exports = UserModel

import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  follower: { type: ObjectId, ref: "user", required: true },
  following: { type: ObjectId, ref: "user", required: true }

}, { timestamps: true })

export default class UserFollowingService {
  get repository() {
    return mongoose.model('follow', _model)
  }
}

import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  postId: { type: ObjectId, ref: 'post', required: true },,
  authorId: { type: ObjectId, ref: "User", required: true },
  body: { type: String, required: true }
}, { timestamps: true })

export default class CommentService {
  get repository() {
    return mongoose.model('comment', _model)
  }
}

import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  title: { type: String, required: true },
  authorId: { type: ObjectId, ref: "User", required: true },
  body: { type: String, required: true }
  //NOTE will eventually need movie id from api
}, { timestamps: true })

export default class PostService {
  get repository() {
    return mongoose.model('post', _model)
  }
}

import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  movie_title: { type: String, required: true },
  poster_path: { type: String, required: true }, // will need more url information
  release_date: { type: Date },  // check type
  genre_ids: { type: String }, // check type 
  movie_id: { type: String, required: true }, // this is the movie id
  post_title: { type: String, required: true },
  authorId: { type: ObjectId, ref: "User", required: true },
  body: { type: String, required: true },
  like_count: { type: Number, default: 0 }

}, { timestamps: true })

export default class PostService {
  get repository() {
    return mongoose.model('post', _model)
  }
}

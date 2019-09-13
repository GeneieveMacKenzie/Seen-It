import express from 'express'
import PostService from '../services/PostService'
import CommentService from '../services/CommentService'
import { Authorize } from '../middleware/authorize.js'

let _postService = new PostService().repository
let _commentService = new CommentService().repository


export default class PostController {
  constructor() {
    this.router = express.Router()
      .use('', function (req, res, next) {
        console.log('In Post: ', 'Request URL:', req.originalUrl, 'Request Type:', req.method, 'Request Author:', req.session.uid)
        next()
      })
      .get('', this.getAll)
      .get('/:id', this.getById)
      // .get('/:id/comments', this.getComments)
      .use(Authorize.authenticated)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      // console.log('getAll blog', req.session.uid, req.originalUrl, req.method)
      let data = await _postService.find({}).populate("authorId", "name")
      if (data) {
        return res.send(data)
      }
      throw new Error("Failed to get Data!")
    } catch (error) { next(error) }

  }

  async getById(req, res, next) {
    try {
      // console.log('getById blog', req.params.id, req.session.uid, req.originalUrl, req.method)
      let data = await _postService.findById(req.params.id).populate("authorId", "name")
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }

  async getCommentsByPostId(req, res, next) {
    try {
      // console.log('getById blog', req.params.id, req.session.uid, req.originalUrl, req.method)
      let data = await _commentService.findById(req.params.id).populate("authorId", "name")
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }

  // async getComments(req, res, next) {
  //   try {
  //     // console.log('getComments blog', req.session.uid, req.originalUrl, req.method)
  //     let data = await _commentService.find({ blogId: req.params.id }).populate("author", "name")
  //     if (data) {
  //       return res.send(data)
  //     }
  //     throw new Error("Invalid Id")
  //   } catch (error) { next(error) }
  // }

  async create(req, res, next) {
    try {
      // console.log('create blog', req.session.uid, req.originalUrl, req.method)
      console.log("THE BODY", req.body)
      req.body.author = req.session.uid
      let data = await _postService.create(req.body)
      if (data) {
        return res.send(data)
      }
      throw new Error("Failed create!")
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      // console.log('edit blog', req.params.id, req.session.uid, req.originalUrl, req.method)
      let data = await _postService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true }).populate("authorId", "name")
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }


  async delete(req, res, next) {
    try {
      // console.log('delete blog ', req.params.id, req.session.uid, req.originalUrl, req.method)
      let data = await _postService.findOneAndDelete({ _id: req.params.id, authorId: req.session.uid })
      if (data) {
        return res.send("Deleted Blog")
      }
      // console.log('delete ', req.params.id)
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }
}
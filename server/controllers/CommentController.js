import express from 'express'
import CommentService from '../services/CommentService'
import { Authorize } from '../middleware/authorize.js'

let _commentService = new CommentService().repository


export default class CommentController {
  constructor() {
    this.router = express.Router()
      .use('', function (req, res, next) {
        console.log('In Comment: ', 'Request URL:', req.originalUrl, 'Request Type:', req.method, 'Request Author:', req.session.uid)
        next()
      })
      .use(Authorize.authenticated)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }


  async create(req, res, next) {
    try {
      // console.log('create comment', req.session.uid, req.originalUrl, req.method)
      console.log("THE BODY", req.body)
      req.body.author = req.session.uid
      let data = await _commentService.create(req.body)
      if (data) {
        return res.send(data)
      }
      throw new Error("Failed create!")
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      // console.log('edit comment', req.params.id, req.session.uid, req.originalUrl, req.method)
      let data = await _commentService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true }).populate("authorId", "name")
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }


  async delete(req, res, next) {
    try {
      // console.log('delete comment ', req.params.id, req.session.uid, req.originalUrl, req.method)
      let data = await _commentService.findOneAndDelete({ _id: req.params.id, authorId: req.session.uid })
      if (data) {
        return res.send("Deleted Comment")
      }
      // console.log('delete ', req.params.id)
      throw new Error("Invalid Id")
    } catch (error) { next(error) }
  }
}
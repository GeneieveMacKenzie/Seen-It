import express from 'express'
import UserService from '../services/UserService';
import { Authorize } from '../middleware/authorize'
import UserFollowingService from '../services/UserFollowing'
import PostService from '../services/PostService';

let _userService = new UserService().repository
let _userFollowingService = new UserFollowingService().repository
let _postService = new PostService().repository
//PUBLIC
export default class UserController {
    constructor() {
        this.router = express.Router()
            //NOTE This route will require a query param, the client will make a request to '/api/users/find?name=Larry'
            .get('/find', this.findUserByQuery)
            .get('/:id/posts', this.getAllPostsByUser) //This is who is following id (you)
            .get('/:id/followers', this.getFollowers) //This is who is following id (you)
            .get('/:id/following', this.getFollowing) //this is who you are following
            .get('/:id/profile', this.getById)
            .use(Authorize.authenticated)
            .post('/:id/follow', this.follow)
            .delete('/:id/unfollow', this.unfollow)
    }

    async getById(req, res, next) {
        try {
            let user = await _userService.findById(req.params.id)
            res.send(user)
        } catch (error) { next(error) }
    }

    async findUserByQuery(req, res, next) {
        try {
            let users = await _userService.find(req.query).select('name email')
            res.send(users)
        } catch (error) { next(error) }
    }

    async getAllPostsByUser(req, res, next) {
        try {
            // console.log('getAll blog', req.session.uid, req.originalUrl, req.method)
            let data = await _postService.find({ authorId: req.params.id }).populate("authorId", "name")
            if (data) {
                return res.send(data)
            }
            throw new Error("Failed to get Data!")
        } catch (error) { next(error) }

    }

    async follow(req, res, next) {
        try {
            let following = await _userFollowingService.create({ follower: req.session.uid, following: req.params.id })
            res.send(following)
        } catch (error) { next(error) }
    }

    async getFollowing(req, res, next) {
        try {
            let following = await _userFollowingService.find({ follower: req.params.id }).populate('following', "name img")
            res.send(following)
        } catch (error) { next(error) }
    }

    async getFollowers(req, res, next) {
        try {
            let following = await _userFollowingService.find({ following: req.params.id }).populate('follower', "name img")
            res.send(following)
        } catch (error) { next(error) }
    }

    async unfollow(req, res, next) {
        try {
            let following = await _userFollowingService.findOneAndRemove({ following: req.params.id, follower: req.session.uid })
            res.send(following)
        } catch (error) { next(error) }
    }
}



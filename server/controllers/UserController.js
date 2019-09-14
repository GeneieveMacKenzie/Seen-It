import express from 'express'
import _userService from '../services/UserService';
import { Authorize } from '../middleware/authorize'
import _userFollowingService from '../services/UserFollowing'


//PUBLIC
export default class UserController {
    constructor() {
        this.router = express.Router()
            //NOTE This route will require a query param, the client will make a request to '/api/users/find?name=Larry'
            .get('/find', this.findUserByQuery)
            // .get('/:id/followers', this.getFollowers) //This is who is following id (you)
            // .get('/:id/following', this.getFollowing) //this is who you are following
            // .get('/profile/:id', this.getById)
            .use(Authorize.authenticated)
        // .post('/following/:id', this.follow)
        // .delete('/:id/unfollow', this.unfollow)
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

    async follow(req, res, next) {
        try {
            let following = await _userFollowingService.create({ follower: req.session.uid, following: req.params.id })
            res.send(following)
        } catch (error) { next(error) }
    }

    async getFollowing(req, res, next) {
        try {
            let following = await _userFollowingService.find({ follower: req.params.id }).populate('following', "name")
            res.send(following)
        } catch (error) { next(error) }
    }

    async getFollowers(req, res, next) {
        try {
            let following = await _userFollowingService.find({ following: req.params.id }).populate('followers', "name")
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



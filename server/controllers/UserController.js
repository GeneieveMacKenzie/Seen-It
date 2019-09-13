import express from 'express'
import _userService from '../services/UserService';
import { Authorize } from '../middleware/authorize'


//PUBLIC
export default class UserController {
    constructor() {
        this.router = express.Router()
            //NOTE This route will require a query param, the client will make a request to '/api/users/find?name=Larry'
            .get('/find', this.findUserByQuery)
    }

    async findUserByQuery(req, res, next) {
        try {
            let users = await _userService.find(req.query).select('name email')
            res.send(users)
        } catch (error) { next(error) }
    }
}



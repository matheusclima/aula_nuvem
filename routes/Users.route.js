const express = require("express")
const UsersController = require("../controllers/Users.controller")
const UsersRouter = express.Router()

UsersRouter.get('/users', UsersController.getAll)
UsersRouter.get('/user/id/:id', UsersController.getById)
UsersRouter.get('/user/name/:name', UsersController.getByName)
module.exports = UsersRouter
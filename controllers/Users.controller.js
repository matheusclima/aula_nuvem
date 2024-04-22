const users = require("../db/users.json")

const UsersController = {
    getAll: (req, res) => {
        return res.status(200).send(users)
    },
    getById: (req, res) => {
        let id = req.params.id
        let user = users.find(u => u.id == id)
        if(!user) {
            return res.status(404).send("User not found")
        }
        return res.status(200).send(user)
    },
    getByName: (req, res) => {
        let name = req.params.name
        let user = users.find(u => u.name == name)
        if(!user) {
            return res.status(404).send("User not found")
        }
        return res.status(200).send(user)
    }
}

module.exports = UsersController
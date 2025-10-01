const UserModel = require("../models/user")

const getUsers = (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: "Internal Server Error" })

        })
}

const createUser = (req, res) => {
    console.log(req.body);
    const newUser = new UserModel(req.body)
    newUser.save()
        .then(users => res.json(users))
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: "Internal Server Error" })

        })
}


module.exports = { getUsers, createUser }
const userService = require('../dao/users.dao')
const { v4: uuidv4 } = require('uuid');

module.exports = {
  signUpUser,
  signInUser,
  updateUser,
  deleteUser
};

function signUpUser(req, res, next) {
  res.send(userService.createUser({...req.body , id:uuidv4()}));
  next();
}

function signInUser(req, res, next) {
  res.send(userService.signInUser(req.params.id))
  next();
}

function updateUser(req, res) {
  const reqObj = req.body
  const userId = req.params.id

  return res.send(userService.updateUser(userId, reqObj))
}

function deleteUser(req, res) {
  const userId = req.params.id
  return res.send(userService.deleteUser(userId))
}

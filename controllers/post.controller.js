const postService = require('../dao/posts.dao')
const { v4: uuidv4 } = require('uuid');

module.exports = {
  addPost,
  getPost,
  updatePost,
  deletePost
};

function addPost(req, res) {
  return res.send(postService.addPost({...req.body , id: uuidv4()}));
}

function getPost(req, res) {
  res.send(postService.getPost())
}

function updatePost(req, res) {
  const reqObj = req.body
  const userId = req.params.id

  return res.send(postService.updatePost(userId, reqObj))
}

function deletePost(req, res) {
  const postId = req.params.id
  return res.send(postService.deletePost(postId))
}

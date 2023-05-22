const express = require('express');
const asyncHandler = require('express-async-handler');
const postCtrl = require('../controllers/post.controller');

const router = express.Router();
module.exports = router;

router.post('/:userid/', asyncHandler(postCtrl.addPost));
router.get('/:userid/', asyncHandler(postCtrl.getPost));
router.put('/:userid/:id', asyncHandler(postCtrl.updatePost));
router.delete('/:userid/:id', asyncHandler(postCtrl.deletePost));
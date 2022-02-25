const express = require('express');
const {
  getPosts,
  getPostsWithCat,
  addPost,
  deletePost,
  getPostsId,
} = require('../../../controllers/postsController');

const postsRouter = express.Router();

postsRouter.get('/posts/:id', getPostsId);
postsRouter.get('/posts', getPosts);
postsRouter.get('/postsCat', getPostsWithCat);
postsRouter.post('/post', addPost);
postsRouter.delete('/post', deletePost);

module.exports = postsRouter;

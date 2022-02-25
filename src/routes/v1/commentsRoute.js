const express = require('express');

const addNewComment = require('../../../controllers/commentsController');
const commentsRouter = express.Router();

commentsRouter.post('/comment', addNewComment);

module.exports = commentsRouter;

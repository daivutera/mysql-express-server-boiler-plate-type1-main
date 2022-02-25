const addNewCommentDb = require('../models/commentsModel');

async function addNewComment(req, res) {
  const bodyData = req.body;
  const result = await addNewCommentDb(bodyData);
  if (result === false) {
    res.status(500).json('error getting data from db');
    return;
    // return data ===false
    // ? res.status(500)
    // : res.json(data)
  }
  res.status(200).json(result);
}

module.exports = addNewComment;

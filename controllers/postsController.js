const {
  getPostsFromDb,
  addPostDb,
  deletePostDb,
  getPostsFromDbCat,
  getPostsFromDbId,
} = require('../models/postsModel');

async function getPosts(req, res) {
  const data = await getPostsFromDb();
  if (data === false) {
    res.status(500).json('problems while connecting to DATABASE');
    return;
  }
  res.json(data);
}

async function getPostsId(req, res) {
  const id = req.params.id;
  const data = await getPostsFromDbId(id);
  if (data === false) {
    res.status(500).json('problems while connecting to DATABASE');
    return;
  }
  res.json(data);
}

async function getPostsWithCat(req, res) {
  const result = await getPostsFromDbCat();
  if (result === false) {
    res.status(500).json('problems while connecting to DATABASE');
    return;
  }
  console.log('data from controller===', result);
  res.status(200).json(result);
}

async function addPost(req, res) {
  const bodyData = req.body;
  console.log(bodyData);
  const data = await addPostDb(bodyData);
  if (data === false) {
    res.status(500).json('problems while connecting to DATABASE');
    return;
  }
  res.status(200).json(data);
}

async function deletePost(req, res) {
  const data = await deletePostDb();
  if (data === false) {
    res.status(500).json('problems while connecting to DATABASE');
    return;
  }
  res.status(200).json(data);
}

module.exports = { getPosts, getPostsWithCat, addPost, deletePost, getPostsId };

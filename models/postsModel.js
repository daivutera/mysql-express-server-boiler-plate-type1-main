const mysql = require('mysql2/promise');
const dbConfig = require('../src/dbConfig');
const { fromDb, fromDbInsert, fromDbId } = require('./helpers');

async function getPostsFromDb() {
  const data = await fromDb('SELECT * FROM posts');
  return data;
}

async function getPostsFromDbId(id) {
  const sql = 'SELECT * FROM posts WHERE post_id=?';
  console.log('model id===', id);
  const data = await fromDbId(sql, [Number(id)]);
  return data;
}

async function getPostsFromDbCat() {
  const sql =
    'SELECT posts.post_id, posts.title, posts.body, categories.name AS category FROM posts LEFT JOIN categories ON posts.category_id = categories.category_id';
  const data = await fromDb(sql);
  console.log('hello');
  return data;
}

async function addPostDb(bodyInfo) {
  const { title, body, category_id } = bodyInfo;
  console.log(bodyInfo);
  const sql = 'INSERT INTO posts(title, body, category_id) VALUES ( ?, ?, ?)';
  const data = await fromDbInsert(sql, [title, body, Number(category_id)]);
  return data;
}

async function deletePostDb() {
  const sql = 'SELECT * FROM posts';
  const data = await fromDb(sql);
  return data;
}

module.exports = {
  getPostsFromDb,
  addPostDb,
  deletePostDb,
  getPostsFromDbCat,
  getPostsFromDbId,
};

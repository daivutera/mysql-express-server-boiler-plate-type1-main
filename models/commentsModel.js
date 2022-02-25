const dbConfig = require('../src/dbConfig');
const mysql = require('mysql2/promise');
const { fromDbInsert } = require('./helpers');

async function addNewCommentDb(bodyInfo) {
  console.log(bodyInfo);
  const { author, body, post_id } = bodyInfo;
  const sql = 'INSERT INTO comments(author,body,post_id) VALUES(?,?,?)';
  const dataFromDb = await fromDbInsert(sql, [author, body, Number(post_id)]);
  return dataFromDb;
}
module.exports = addNewCommentDb;

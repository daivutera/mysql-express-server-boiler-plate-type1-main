const mysql = require('mysql2/promise');
const dbConfig = require('../src/dbConfig');

async function fromDb(sql) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [data] = await connection.query(sql);
    await connection.close();
    console.log('data from helper===', data);
    return data;
  } catch (error) {
    console.log('data from helper===error');
    return false;
  }
}

async function fromDbInsert(sql, arr) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [data] = await connection.execute(sql, arr);
    await connection.close();
    console.log('data from helper===', data);
    return data;
  } catch (error) {
    console.log(error);
    console.log('data from helper===error');
    return false;
  }
}
async function fromDbId(sql, arr) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [data] = await connection.execute(sql, arr);
    await connection.close();
    console.log('data from helper===', data);
    return data;
  } catch (error) {
    console.log(error);
    console.log('data from helper===error');
    return false;
  }
}
module.exports = { fromDb, fromDbInsert, fromDbId };

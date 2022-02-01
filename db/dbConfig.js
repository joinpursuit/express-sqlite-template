const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const DB_SOURCE = "./db" + process.env.DB_SOURCE;

let db = new sqlite3.Database(DB_SOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
});

module.exports = db;

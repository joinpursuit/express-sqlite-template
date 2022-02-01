const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();
const seedData = require("./seed.js");

const DB_SOURCE = "./db" + process.env.DB_SOURCE;
const table = "test";

const createTable = `CREATE TABLE ${table} (name TEXT, isWeekend BOOLEAN, rating, id INTEGER PRIMARY KEY)`;
const insert = `INSERT INTO ${table} (name, isWeekend, rating) values (?, ?, ?)`;

let db = new sqlite3.Database(DB_SOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(`DROP TABLE IF EXISTS ${table}`, (err) => {
      db.run(createTable, async (err) => {
        if (err) {
          console.log("Table was already created");
        } else {
          // Table just created, creating some rows
          for (let datum of seedData) {
            await db.run(insert, [datum.day, datum.isWeekend, datum.rating]);
          }

          // May execute before all data is seeded, therefore, only partial data may log
          // To confirm all data is seeded, go to the route
          db.all(`SELECT * FROM ${table}`, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          });
        }
      }); // Closes Create table
    }); // Closes Drop table
  }
});

module.exports = db;

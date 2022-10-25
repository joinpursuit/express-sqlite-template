// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  const query = "SELECT * FROM test";
  const params = [];
  try {
    const allDays = await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/test/:id", async (req, res) => {
  const query = "SELECT * FROM test WHERE id = ?";
  const params = [req.params.id];
  try {
    const allDays = await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.post("/test/", async (req, res) => {
  const query = "INSERT INTO test (name) VALUES ($name) RETURNING *";
  const params = { $name: req.body.name };

  try {
    const allDays = await db.run(query, params, (error, rows) => {
      res.status(200).json({ rows: rows, success: true });
      if (error) {
        console.log("try", error);
      }
    });
  } catch (err) {
    console.log(err);
    // res.status(status).json(obj)
    res.status(500).json("There was an error");
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;

# Express Back-end Template with SQLite3

## Getting Started

- Use this repository as a template
- clone to your machine
- `cd` into this repository
- `ls` to make sure you are on the same level as the `package.json` and `touch .env`

**.env**

```
PORT=5000
DB_SOURCE=/data.sqlite3
```

- `npm install` - in order to install dependencies
- `npm run db:init` - to initialize and seed the database
- `nodemon` or `node server.js`

## Starter Code: TO BE UPDATED to Actual App

Go to http://localhost:5000 a `Hello, World!` message

http://localhost:5000/test

To see JSON containing an array of objects that contain the days of the week

http://localhost:5000/test/1
To see JSON containing a single day of the week object

## How to Make this App Your own

**db/schema**

- Change the `table` variable to be an appropriate table name
- Change the `createTable` variable to create a SQL statement that forms an appropriate table for your project
- Change the `insert` variable to create an appropriate SQL statement that inserts appropriate data for your project

If more tables are needed, follow the template above and adapt it as needed.

**Remember**: SQLITE3 is very similar to PostgreSQL however, there will be some differences. Be sure to reference the documentation.

**db/seed**

- Change the array of objects to match your starter data

**app.js**

After confirming that the `test` routes work, remove them and continue building out this app in accordance to the instructions provided. Add the appropriate files, folders, npm packages etc. Note: You do not need `pg-promise`. Use SQLite3. There are example queries in `app.js` and `schema.js` and in the [docs](https://github.com/mapbox/node-sqlite3)

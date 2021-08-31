const express = require('express')
const app = express()
const port = 3000

// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
//   });

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   })

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '14844841',
  port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM test ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log(json(results.rows))
    })
  }

const { Pool } = require('pg');
const config = require('./config');

// Create a connection pool to the PostgreSQL database
const pool = new Pool(config.db);

module.exports = {
  query: (text, params) => pool.query(text, params),
};

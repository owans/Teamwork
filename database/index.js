const dotenv = require('dotenv');
dotenv.config();
const {Pool} = require('pg');
const pool = new Pool({connectionString: process.env.POSTGRES_URL});

module.exports = {
    query: async (text, params) => {
      const client = await pool.connect();
      try {
        const res = await client.query(text, params);
        return res;
      } finally {
        client.release();
      }
    },
    clearDb: async () => {
        // replace with your table
      //await pool.query('DROP TABLE IF EXISTS orders,flags,cars,users CASCADE');
    },
  };
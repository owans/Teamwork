const pool = require('../database/index');

module.exports = async () => {
    try {
      // check db for response

      await pool.query("SELECT NOW()");
      if (process.env.NODE_ENV !== 'production') {
        console.log('Database connected with tables');
      }
      return true;
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error.message);
      }
      return false;
    }
  };

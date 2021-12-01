const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.findUser = async (email, password) => {
  const select = `SELECT userInfo FROM account WHERE (userInfo->>'email' = $1 AND userInfo->>'password' = $2)`;
  const query = {
    text: select,
    values: [email, password],
  };
  const {rows} = await pool.query(query);
  return rows.length == 1 ? rows[0] : undefined;
};
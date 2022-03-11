import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'talleres2001',
  port: 3306,
  database: 'librerydb',
});

export { pool };


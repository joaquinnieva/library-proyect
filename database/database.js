import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'mysql-librery-app.alwaysdata.net',
  user: '260826',
  password: 'talleres2001',
  port: 3306,
  database: 'librery-app_database',
});

export { pool };


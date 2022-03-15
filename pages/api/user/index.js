import { pool } from '../../../database/database';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const user = await pool.query('SELECT * FROM user');
        return res.status(200).json(user[0]);
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }
    case 'POST':
      try {
        const { userMail, name } = req.body;
        const user = await pool.query('SELECT * FROM user WHERE userMail = ?', [userMail]);
        if (user[0].length === 0) {
          const savedUser = await pool.query('INSERT INTO user SET ?', {
            userMail,
            name,
          });
          return res.status(201).json({
            message: 'User created',
            userMail,
          });
        } else if (user[0]) {
          return res.status(200).json(user[0]);
        }
      } catch (error) {
        return res.status(400).json({ message: error.msg });
      }

    default:
      return res.status(400).json({ message: 'This method is not supported' });
  }
}
